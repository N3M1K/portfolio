<script lang="ts">
  import { onMount } from "svelte";

  let loaderEl: HTMLDivElement;
  let bodyEl: HTMLDivElement;
  let skipHintEl: HTMLButtonElement;
  let finished = false;

  function skip() {
    if (finished) return;
    finished = true;
    if (loaderEl) loaderEl.classList.add("done");
    if (skipHintEl) skipHintEl.style.display = "none";
    setTimeout(() => {
      if (loaderEl) loaderEl.style.display = "none";
    }, 400);
  }

  function line(html: string, cls = "") {
    const d = document.createElement("div");
    d.className = "ld-line" + (cls ? " " + cls : "");
    d.innerHTML = html;
    bodyEl.appendChild(d);
    bodyEl.scrollTop = bodyEl.scrollHeight;
    return d;
  }

  function out(html: string, cls = "") {
    const d = document.createElement("div");
    d.className = "ld-out" + (cls ? " " + cls : "");
    d.style.paddingLeft = "4px";
    d.innerHTML = html;
    bodyEl.appendChild(d);
    bodyEl.scrollTop = bodyEl.scrollHeight;
    return d;
  }

  function blank() {
    bodyEl.appendChild(document.createElement("br"));
  }

  function type(el: HTMLElement, text: string, speed: number, cb?: () => void) {
    let i = 0;
    function tick() {
      if (finished && el.dataset.noSkip !== "true") {
        el.textContent = text;
        if (cb) cb();
        return;
      }
      el.textContent = text.slice(0, (i += 2));
      if (i < text.length) setTimeout(tick, speed);
      else if (cb) setTimeout(cb, 40);
    }
    tick();
  }

  function progress(label: string, duration: number, onDone?: () => void) {
    const wrap = document.createElement("div");
    wrap.className = "ld-progress-wrap";
    wrap.innerHTML =
      '<span class="ld-out dim">' +
      label +
      '</span><div class="ld-progress-track"><div class="ld-progress-fill"></div></div>';
    bodyEl.appendChild(wrap);
    bodyEl.scrollTop = bodyEl.scrollHeight;
    const fill = wrap.querySelector(".ld-progress-fill") as HTMLDivElement;
    const steps = 14;
    let i = 0;
    function step() {
      if (finished) {
        fill.style.width = "100%";
        if (onDone) onDone();
        return;
      }
      i++;
      fill.style.width = Math.min(100, Math.round((i / steps) * 100)) + "%";
      if (i < steps) setTimeout(step, duration / steps);
      else if (onDone) setTimeout(onDone, 60);
    }
    setTimeout(step, 30);
  }

  const DEPS: [string, string, string][] = [
    ["lukasnemecek-portfolio", "2.0.0", "green"],
    ["cachyos-arch-kernel", "6.13", "green"],
    ["debian-server-host", "12.9", "blue"],
    ["forgejo-git-service", "9.0.0", "blue"],
    ["xploy-deployer", "1.0.0", "yellow"],
    ["bun-runtime", "1.2.4", "green"],
    ["svelte-core", "5.0.0", "purple"],
  ];

  function pad(s: string, n: number) {
    return s + " ".repeat(Math.max(0, n - s.length));
  }

  function main() {
    const promptLine = line(
      '<span class="ld-p">lukáš</span><span style="color:var(--fg4)">@</span><span class="ld-p2">cachyos</span><span style="color:var(--fg4)"> ~ </span><span class="ld-cursor" id="pre-cursor"></span>'
    );
    const cmdSpan = document.createElement("span");
    cmdSpan.className = "ld-cmd";
    promptLine.appendChild(cmdSpan);
    const preCursor = document.getElementById("pre-cursor");

    const CMD = "paru -Syu && systemctl status xploy";

    setTimeout(() => {
      if (preCursor) preCursor.remove();
      type(cmdSpan, CMD, 12, () => {
        blank();
        setTimeout(phase1, 100);
      });
    }, 150);
  }

  function phase1() {
    out("synchronizing package databases… <span class=\"ld-out g\">[OK]</span>", "dim");
    setTimeout(phase2, 120);
  }

  function phase2() {
    out("verifying system modules & services:", "y");

    let i = 0;
    function nextDep() {
      if (i >= DEPS.length) {
        setTimeout(phase3, 100);
        return;
      }
      const [name, ver, cls] = DEPS[i++];
      out(
        '  <span class="ld-out dim">✓</span> <span class="ld-out ' +
          cls +
          '">' +
          pad(name, 26) +
          '</span><span class="ld-out dim">' +
          ver +
          "</span>"
      );
      setTimeout(nextDep, finished ? 0 : 35);
    }
    nextDep();
  }

  function phase3() {
    progress("activating units & transferring bundle…", 300, phase4);
  }

  function phase4() {
    out("Done. System ready. <span class=\"ld-out g\">[exit: 0]</span>", "g");
    setTimeout(() => {
      skip();
    }, 280);
  }

  onMount(() => {
    function onKey(e: KeyboardEvent) {
      skip();
    }
    document.addEventListener("keydown", onKey);
    setTimeout(main, 100);
    return () => document.removeEventListener("keydown", onKey);
  });
</script>

<div bind:this={loaderEl} id="loader">
  <div class="loader-wrap">
    <div class="loader-topbar">
      <div class="loader-dot" style="background:#c95a5a"></div>
      <div class="loader-dot" style="background:#e6ae5c"></div>
      <div class="loader-dot" style="background:#8ba563"></div>
      <span class="loader-title">lukas@cachyos — zsh — boot</span>
      <button class="skip-btn-top" onclick={skip} title="Skip loading sequence">
        [ESC / Skip ↵]
      </button>
    </div>
    <div class="loader-body" bind:this={bodyEl}></div>
  </div>
</div>

<button
  bind:this={skipHintEl}
  class="skip-hint"
  onclick={skip}
  title="Skip animation"
>
  <span class="skip-badge">ESC</span>
  <span>Click anywhere or press any key to skip</span>
</button>

<style>
  #loader {
    position: fixed;
    inset: 0;
    background: var(--bg);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.4s ease, visibility 0.4s ease;
  }
  :global(#loader.done) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .loader-wrap {
    width: min(680px, 92vw);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  }
  .loader-topbar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: var(--bg2);
    border: 1px solid var(--bg3);
    border-bottom: 1px solid var(--bg3);
  }
  .loader-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
  .loader-title {
    flex: 1;
    font-size: 11px;
    color: var(--fg2);
    letter-spacing: 1.5px;
    padding-left: 8px;
  }
  .skip-btn-top {
    background: rgba(122, 154, 107, 0.12);
    border: 1px solid rgba(122, 154, 107, 0.4);
    color: var(--green);
    font-family: var(--code);
    font-size: 11px;
    padding: 2px 10px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.2s;
  }
  .skip-btn-top:hover {
    background: var(--green);
    color: var(--bg);
  }
  .loader-body {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    border-top: none;
    padding: 18px 20px 22px;
    font-family: var(--code);
    font-size: 12px;
    line-height: 1.7;
    height: 280px;
    overflow-y: auto;
    position: relative;
  }
  .loader-body::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--green);
    box-shadow: 0 0 10px rgba(122, 154, 107, 0.5);
  }
  .skip-hint {
    position: fixed;
    bottom: 24px;
    right: 28px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(30, 32, 40, 0.85);
    border: 1px solid var(--bg3);
    padding: 8px 14px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--fg2);
    letter-spacing: 1px;
    z-index: 100000;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.2s;
  }
  .skip-hint:hover {
    border-color: var(--green);
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }
  .skip-badge {
    background: var(--bg3);
    color: var(--green);
    font-family: var(--code);
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 2px;
    font-weight: bold;
  }

  /* Loader line styles */
  :global(.ld-line) { display: flex; gap: 8px; margin-bottom: 0; }
  :global(.ld-p) { color: var(--green); flex-shrink: 0; user-select: none; }
  :global(.ld-p2) { color: var(--purple); flex-shrink: 0; user-select: none; }
  :global(.ld-cmd) { color: var(--fg3); }
  :global(.ld-out) { color: var(--fg2); padding-left: 4px; }
  :global(.ld-out.g) { color: var(--green); }
  :global(.ld-out.y) { color: var(--yellow); }
  :global(.ld-out.r) { color: var(--red); }
  :global(.ld-out.b) { color: var(--blue); }
  :global(.ld-out.p) { color: var(--purple); }
  :global(.ld-out.dim) { color: var(--fg4); }
  :global(.ld-out.cyan) { color: var(--cyan); }
  :global(.ld-out.green) { color: var(--green); }
  :global(.ld-out.blue) { color: var(--blue); }
  :global(.ld-out.purple) { color: var(--purple); }
  :global(.ld-out.yellow) { color: var(--yellow); }
  :global(.ld-cursor) {
    display: inline-block;
    width: 8px;
    height: 13px;
    background: var(--green);
    animation: blink 1s step-end infinite;
    vertical-align: middle;
    margin-left: 1px;
  }
  :global(.ld-progress-wrap) { margin: 6px 0 2px; padding-left: 4px; }
  :global(.ld-progress-track) {
    height: 3px;
    background: var(--bg3);
    overflow: hidden;
    width: 100%;
    margin-top: 4px;
  }
  :global(.ld-progress-fill) {
    height: 100%;
    background: var(--green);
    width: 0%;
    transition: width 0.15s linear;
    box-shadow: 0 0 8px rgba(122, 154, 107, 0.4);
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
</style>

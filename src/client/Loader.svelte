<script lang="ts">
  import { onMount } from "svelte";

  let loaderEl: HTMLDivElement;
  let bodyEl: HTMLDivElement;
  let skipHintEl: HTMLSpanElement;
  let finished = false;

  function skip() {
    if (finished) return;
    finished = true;
    loaderEl.classList.add("done");
    skipHintEl.style.display = "none";
    setTimeout(() => {
      loaderEl.style.display = "none";
    }, 650);
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
      el.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(tick, speed);
      else if (cb) setTimeout(cb, 60);
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
    const steps = 28;
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
      else if (onDone) setTimeout(onDone, 120);
    }
    setTimeout(step, 80);
  }

  const DEPS: [string, string, string][] = [
    ["lukasnemecek-portfolio", "1.0.0", "green"],
    ["beth-stack", "3.2.1", "blue"],
    ["elysia", "1.1.0", "purple"],
    ["htmx.org", "1.9.12", "blue"],
    ["@libsql/client", "0.14.0", "cyan"],
    ["bun-types", "1.2.3", "green"],
    ["cyberpresso-theme", "0.1.0", "yellow"],
    ["nixos-config", "24.11", "green"],
    ["smaragd-spirit", "10.0.0", "yellow"],
    ["vim-skills", "9.9.9", "dim"],
  ];

  function pad(s: string, n: number) {
    return s + " ".repeat(Math.max(0, n - s.length));
  }

  function main() {
    const promptLine = line(
      '<span class="ld-p">lukáš</span><span style="color:var(--fg4)">@</span><span class="ld-p2">nixos</span><span style="color:var(--fg4)"> ~ </span><span class="ld-cursor" id="pre-cursor"></span>'
    );
    const cmdSpan = document.createElement("span");
    cmdSpan.className = "ld-cmd";
    promptLine.appendChild(cmdSpan);
    const preCursor = document.getElementById("pre-cursor");

    const CMD = "sudo nixos-rebuild switch --flake ~/.config/nixos";

    setTimeout(() => {
      if (preCursor) preCursor.remove();
      type(cmdSpan, CMD, 38, () => {
        blank();
        setTimeout(phase1, 300);
      });
    }, 600);
  }

  function phase1() {
    out(
      '[sudo] password for lukáš: <span style="opacity:.15">••••••••</span>',
      "dim"
    );
    setTimeout(() => {
      blank();
      out("evaluating derivation…", "dim");
      setTimeout(phase2, 700);
    }, 800);
  }

  function phase2() {
    out("building the system configuration", "y");
    blank();
    out("fetching missing dependencies", "dim");
    blank();

    let i = 0;
    function nextDep() {
      if (i >= DEPS.length) {
        setTimeout(phase3, 400);
        return;
      }
      const [name, ver, cls] = DEPS[i++];
      out(
        '  <span class="ld-out dim">↓</span> <span class="ld-out ' +
          cls +
          '">' +
          pad(name, 28) +
          '</span><span class="ld-out dim"> ' +
          ver +
          "</span>"
      );
      const delay = finished ? 0 : 80 + Math.random() * 120;
      setTimeout(nextDep, delay);
    }
    nextDep();
  }

  function phase3() {
    blank();
    progress(
      "building /nix/store/xxdev-portfolio-1.0.0…",
      2200,
      phase4
    );
  }

  function phase4() {
    blank();
    out("activating new configuration…", "dim");
    setTimeout(
      () => {
        out("systemd: reloading…", "dim");
        setTimeout(
          () => {
            out("nginx: restarted", "dim");
            setTimeout(
              () => {
                blank();
                out("Done. The following new units were started:", "dim");
                out(
                  '  portfolio.service         <span class="ld-out g">[ OK ]</span>'
                );
                out(
                  '  xxdev-node.service        <span class="ld-out g">[ OK ]</span>'
                );
                out(
                  '  deadrop.service           <span class="ld-out g">[ OK ]</span>'
                );
                blank();
                out("switching to new profile: generation 42", "dim");
                setTimeout(phase5, 600);
              },
              finished ? 0 : 300
            );
          },
          finished ? 0 : 350
        );
      },
      finished ? 0 : 400
    );
  }

  function phase5() {
    blank();
    const dLine = line(
      '<span class="ld-p">lukáš</span><span style="color:var(--fg4)">@</span><span class="ld-p2">nixos</span><span style="color:var(--fg4)"> ~ </span>'
    );
    const msg = document.createElement("span");
    msg.className = "ld-cmd";
    dLine.appendChild(msg);
    type(msg, "echo $?", 55, () => {
      blank();
      out("0", "g");
      blank();
      setTimeout(phase6, 500);
    });
  }

  function phase6() {
    out("// portfolio built successfully. loading…", "g");
    blank();
    progress("transferring assets to browser…", 900, () => {
      setTimeout(() => {
        finished = true;
        loaderEl.classList.add("done");
        skipHintEl.style.display = "none";
        setTimeout(() => {
          loaderEl.style.display = "none";
        }, 650);
      }, 300);
    });
  }

  onMount(() => {
    document.addEventListener("keydown", skip);
    setTimeout(main, 300);
    return () => document.removeEventListener("keydown", skip);
  });
</script>

<div bind:this={loaderEl} id="loader">
  <div class="loader-wrap">
    <div class="loader-topbar">
      <div class="loader-dot" style="background:#c95a5a"></div>
      <div class="loader-dot" style="background:#e6ae5c"></div>
      <div class="loader-dot" style="background:#8ba563"></div>
      <span class="loader-title">xxdev@nixos — zsh — 120×38</span>
    </div>
    <div class="loader-body" bind:this={bodyEl}></div>
  </div>
</div>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span bind:this={skipHintEl} class="skip-hint" onclick={skip} title="skip"
  >// press any key to skip</span
>

<style>
  #loader {
    position: fixed;
    inset: 0;
    background: var(--bg);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.6s ease, visibility 0.6s ease;
  }
  :global(#loader.done) {
    opacity: 0;
    visibility: hidden;
  }
  .loader-wrap {
    width: min(720px, 92vw);
  }
  .loader-topbar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    background: var(--bg2);
    border-bottom: 1px solid var(--bg3);
  }
  .loader-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .loader-title {
    flex: 1;
    text-align: center;
    font-size: 11px;
    color: var(--fg4);
    letter-spacing: 1.5px;
  }
  .loader-body {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    border-top: none;
    padding: 20px 24px 28px;
    font-family: var(--code);
    font-size: 12.5px;
    line-height: 1.85;
    height: 340px;
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
    box-shadow: 0 0 10px rgba(139, 165, 99, 0.5);
  }
  .skip-hint {
    position: fixed;
    bottom: 24px;
    right: 28px;
    font-family: var(--mono);
    font-size: 10px;
    color: var(--bg3);
    letter-spacing: 1.5px;
    z-index: 100000;
    cursor: pointer;
    transition: color 0.2s;
  }
  .skip-hint:hover {
    color: var(--fg4);
  }

  /* Loader line styles — must be global since they're created via DOM */
  :global(.ld-line) { display: flex; gap: 10px; margin-bottom: 0; }
  :global(.ld-p) { color: var(--green); flex-shrink: 0; user-select: none; }
  :global(.ld-p2) { color: var(--purple); flex-shrink: 0; user-select: none; }
  :global(.ld-cmd) { color: var(--fg3); }
  :global(.ld-out) { color: var(--fg4); padding-left: 4px; }
  :global(.ld-out.g) { color: var(--green); }
  :global(.ld-out.y) { color: var(--yellow); }
  :global(.ld-out.r) { color: var(--red); }
  :global(.ld-out.b) { color: var(--blue); }
  :global(.ld-out.p) { color: var(--purple); }
  :global(.ld-out.dim) { color: var(--bg3); }
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
    transition: width 0.4s linear;
    box-shadow: 0 0 8px rgba(139, 165, 99, 0.4);
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
</style>

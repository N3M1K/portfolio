<script lang="ts">
  import { onMount } from "svelte";

  let cursor: HTMLDivElement;
  let cring: HTMLDivElement;
  let cx = 0;
  let cy = 0;
  let rx = 0;
  let ry = 0;

  onMount(() => {
    cx = innerWidth / 2;
    cy = innerHeight / 2;
    rx = cx;
    ry = cy;

    function onMove(e: MouseEvent) {
      cx = e.clientX;
      cy = e.clientY;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
    }
    function onLeave() {
      cursor.style.opacity = "0";
      cring.style.opacity = "0";
    }
    function onEnter() {
      cursor.style.opacity = "1";
      cring.style.opacity = "1";
    }
    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement).closest("a,button")) {
        cursor.style.width = "14px";
        cursor.style.height = "14px";
        cursor.style.background = "var(--yellow)";
        cring.style.width = "48px";
        cring.style.height = "48px";
        cring.style.borderColor = "rgba(201,162,101,.5)";
      }
    }
    function onOut(e: MouseEvent) {
      if ((e.target as HTMLElement).closest("a,button")) {
        cursor.style.width = "8px";
        cursor.style.height = "8px";
        cursor.style.background = "var(--green)";
        cring.style.width = "32px";
        cring.style.height = "32px";
        cring.style.borderColor = "rgba(122,154,107,.4)";
      }
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    function lerpRing() {
      rx += (cx - rx) * 0.12;
      ry += (cy - ry) * 0.12;
      cring.style.left = rx + "px";
      cring.style.top = ry + "px";
      requestAnimationFrame(lerpRing);
    }
    lerpRing();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  });
</script>

<div class="cursor" bind:this={cursor}></div>
<div class="cursor-ring" bind:this={cring}></div>

<style>
  .cursor {
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--green);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
    transition: width 0.2s, height 0.2s, background 0.2s;
  }
  .cursor-ring {
    position: fixed;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(122, 154, 107, 0.4);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: width 0.25s, height 0.25s, border-color 0.2s;
  }
</style>

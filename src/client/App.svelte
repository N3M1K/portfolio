<script>
  import { onMount } from "svelte";
  import Loader from "./Loader.svelte";
  import Cursor from "./Cursor.svelte";
  import Nav from "./Nav.svelte";
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
  import Timeline from "./Timeline.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";

  let blurFilter;

  onMount(() => {
    let lastScrollY = window.scrollY;
    let vel = 0;

    function tick() {
      const currentScrollY = window.scrollY;
      const d = currentScrollY - lastScrollY;
      
      vel = vel * 0.8 + d * 0.2; // Smooth the velocity
      
      let blurY = Math.abs(vel) * 0.12;
      if (blurY < 0.2) blurY = 0; // Optimization: disable filter when slow
      if (blurY > 25) blurY = 25; // Cap the maximum blur

      if (blurFilter) {
        blurFilter.setAttribute("stdDeviation", `0,${blurY}`);
      }

      lastScrollY = currentScrollY;
      requestAnimationFrame(tick);
    }
    tick();
  });
</script>

<svg style="width:0;height:0;position:fixed;pointer-events:none;z-index:-1;">
  <filter id="scroll-blur" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur bind:this={blurFilter} in="SourceGraphic" stdDeviation="0,0" />
  </filter>
</svg>

<Loader />
<Cursor />
<Nav />

<main style="filter: url(#scroll-blur); will-change: filter;">
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Timeline />
  <Contact />
  <Footer />
</main>

<style>
  :global(:root) {
    --bg: #0c0d11;
    --bg1: #141519;
    --bg2: #1e2028;
    --bg3: #2e3240;
    --fg4: #6b7084;
    --fg: #9a9eb0;
    --fg2: #c5c8d4;
    --fg3: #dcdee6;
    --red: #b05454;
    --orange: #c47458;
    --yellow: #c9a265;
    --green: #7a9a6b;
    --cyan: #5a7f96;
    --blue: #5f89a8;
    --purple: #7e6d94;
    --brown: #8f5e4a;
    --display: "Major Mono Display", monospace;
    --mono: "Share Tech Mono", monospace;
    --code: "JetBrains Mono", monospace;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    background: var(--bg);
    color: var(--fg);
    font-family: var(--mono);
    font-size: 14px;
    line-height: 1.6;
    overflow-x: hidden;
    cursor: none;
  }

  /* Scanline overlay */
  :global(body::before) {
    content: "";
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.035) 2px,
      rgba(0, 0, 0, 0.035) 4px
    );
    pointer-events: none;
    z-index: 9990;
  }

  /* Grid overlay */
  :global(body::after) {
    content: "";
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(95, 137, 168, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(95, 137, 168, 0.03) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    z-index: 0;
  }

  :global(section) {
    position: relative;
    z-index: 1;
  }

  :global(.container) {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40px;
  }

  /* Shared section header */
  :global(.section-header) {
    margin-bottom: 48px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--bg2);
    display: flex;
    align-items: baseline;
    gap: 16px;
  }
  :global(.section-num) {
    font-family: var(--display);
    font-size: 11px;
    color: var(--green);
    letter-spacing: 2px;
  }
  :global(.section-title) {
    font-family: var(--display);
    font-size: clamp(22px, 3vw, 32px);
    color: var(--fg3);
    letter-spacing: 3px;
  }
  :global(.section-line) {
    flex: 1;
    height: 1px;
    background: var(--bg2);
  }

  /* Shared button */
  :global(.btn) {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    border: 1px solid;
    text-decoration: none;
    transition: all 0.2s;
    cursor: none;
  }
  :global(.btn-g) {
    color: var(--green);
    border-color: rgba(122, 154, 107, 0.45);
  }
  :global(.btn-g:hover) {
    background: rgba(122, 154, 107, 0.1);
    box-shadow: 0 0 20px rgba(122, 154, 107, 0.2);
  }
  :global(.btn-ghost) {
    color: var(--fg4);
    border-color: var(--bg3);
  }
  :global(.btn-ghost:hover) {
    color: var(--fg2);
    border-color: var(--fg4);
  }

  /* Scroll reveal */
  :global(.reveal) {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  :global(.reveal.visible) {
    opacity: 1;
    transform: none;
  }
  :global(.d1) { transition-delay: 0.1s; }
  :global(.d2) { transition-delay: 0.2s; }
  :global(.d3) { transition-delay: 0.3s; }
  :global(.d4) { transition-delay: 0.4s; }
  :global(.d5) { transition-delay: 0.5s; }

  /* Scrollbar */
  :global(::-webkit-scrollbar) { width: 4px; }
  :global(::-webkit-scrollbar-track) { background: var(--bg); }
  :global(::-webkit-scrollbar-thumb) { background: var(--bg3); }

  @media (max-width: 900px) {
    :global(.container) { padding: 0 20px; }
  }
</style>

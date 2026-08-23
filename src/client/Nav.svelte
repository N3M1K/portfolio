<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const sections = document.querySelectorAll("section[id]");
    const navAs = document.querySelectorAll(".nav-links a");

    function onScroll() {
      let cur = "";
      sections.forEach((s) => {
        if (scrollY >= (s as HTMLElement).offsetTop - 140) cur = s.id;
      });
      navAs.forEach((a) => {
        const href = a.getAttribute("href")?.replace("#", "") ?? "";
        (a as HTMLElement).style.color =
          href === cur ? "var(--green)" : "";
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<nav>
  <a href="#hero" class="nav-logo">
    <img src="/logo" alt="XXDEV Logo" style="width: 100%; height: auto; display: block;" />
  </a>
  <div class="nav-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 500;
    padding: 16px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(12, 13, 17, 0.90);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(46, 50, 64, 0.5);
  }
  .nav-logo {
    display: block;
    width: 120px;
    height: auto;
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    gap: 2px;
  }
  .nav-links a {
    color: var(--fg4);
    text-decoration: none;
    font-size: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 6px 14px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .nav-links a:hover {
    color: var(--fg2);
    border-color: var(--bg3);
    background: var(--bg1);
  }

  @media (max-width: 900px) {
    nav {
      padding: 14px 20px;
    }
  }
</style>

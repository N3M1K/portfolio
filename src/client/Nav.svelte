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
  <a href="#hero" class="nav-logo" title="xxdev - back to top">
    <img src="/logo" alt="XXDEV Logo" style="width: 100%; height: auto; display: block;" />
  </a>
  <div class="nav-links">
    <a href="#projects">Work</a>
    <a href="#about">About</a>
    <a href="#skills">Arsenal</a>
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
    padding: 14px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(12, 13, 17, 0.92);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(46, 50, 64, 0.6);
  }
  .nav-logo {
    display: block;
    width: 115px;
    height: auto;
    text-decoration: none;
    transition: transform 0.2s;
  }
  .nav-logo:hover {
    transform: scale(1.02);
  }
  .nav-links {
    display: flex;
    gap: 4px;
  }
  .nav-links a {
    color: var(--fg2);
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 12px;
    border: 1px solid transparent;
    transition: all 0.15s;
    font-family: var(--mono);
    font-weight: 500;
  }
  .nav-links a:hover {
    color: #fff;
    border-color: var(--bg3);
    background: var(--bg1);
  }

  @media (max-width: 900px) {
    nav {
      padding: 12px 20px;
    }
    .nav-links a {
      padding: 6px 8px;
      font-size: 10.5px;
      letter-spacing: 1.5px;
    }
  }

  @media (max-width: 480px) {
    nav {
      padding: 10px 14px;
    }
    .nav-logo {
      width: 95px;
    }
    .nav-links {
      gap: 2px;
    }
    .nav-links a {
      padding: 6px 6px;
      font-size: 10px;
      letter-spacing: 1px;
    }
  }
</style>

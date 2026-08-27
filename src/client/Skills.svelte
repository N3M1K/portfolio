<script lang="ts">
  import { reveal } from "./actions";

  interface SkillCategory {
    title: string;
    sub: string;
    delay: string;
    accent: string;
    items: { name: string; desc: string }[];
  }

  const categories: SkillCategory[] = [
    {
      title: "Backend & Systems",
      sub: "// runtime & api architecture",
      delay: "",
      accent: "var(--green)",
      items: [
        { name: "Bun & ElysiaJS", desc: "High-throughput APIs & real-time WebSocket servers" },
        { name: "Go (Golang)", desc: "CLI utilities, networking & local proxy tooling" },
        { name: "PHP & MySQL", desc: "E-commerce backends & custom administration panels" },
        { name: "LibSQL / SQLite", desc: "Zero-latency local database storage & schemas" },
      ],
    },
    {
      title: "Frontend & UI",
      sub: "// performance & client logic",
      delay: "d1",
      accent: "var(--yellow)",
      items: [
        { name: "TypeScript", desc: "Strict type safety across client & server code" },
        { name: "Svelte 5", desc: "Reactive, compiler-driven web applications" },
        { name: "HTMX & Vanilla CSS", desc: "Lean hypermedia architecture & custom design systems" },
        { name: "Core Web Vitals", desc: "100/100 performance, aggressive caching & fast LCP" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      sub: "// self-hosting & linux control",
      delay: "d2",
      accent: "var(--blue)",
      items: [
        { name: "Arch Linux (CachyOS)", desc: "Daily-driver workstation & local development" },
        { name: "Debian Server & Forgejo", desc: "Self-hosted Git, container host & production services" },
        { name: "xploy & Webhooks", desc: "Custom autonomous zero-downtime deployment engine" },
        { name: "Caddy & Reverse Proxies", desc: "Automated SSL, domain routing & local tunnels" },
      ],
    },
  ];
</script>

<section id="skills">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">03</span>
      <h2 class="section-title">technical arsenal</h2>
      <div class="section-line"></div>
      <span class="section-sub">// languages, tools & infrastructure</span>
    </div>

    <div class="skills-layout">
      {#each categories as cat}
        <div class="skill-category reveal {cat.delay}" style="--cat-acc:{cat.accent}" use:reveal>
          <div class="category-header">
            <h3 class="category-title">{cat.title}</h3>
            <span class="category-sub">{cat.sub}</span>
          </div>

          <div class="skill-list">
            {#each cat.items as item}
              <div class="skill-row">
                <div class="skill-name">{item.name}</div>
                <div class="skill-desc">{item.desc}</div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #skills {
    padding: 80px 0;
  }
  .section-sub {
    font-size: 11px;
    color: var(--fg4);
    font-family: var(--code);
    letter-spacing: 1px;
  }
  .skills-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  .skill-category {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.2s, transform 0.2s;
  }
  .skill-category::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--cat-acc, var(--green));
  }
  .skill-category:hover {
    border-color: var(--bg3);
    transform: translateY(-2px);
  }
  .category-header {
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--bg2);
  }
  .category-title {
    font-family: var(--display);
    font-size: 16px;
    color: var(--fg3);
    letter-spacing: 1px;
    margin-bottom: 3px;
  }
  .category-sub {
    font-family: var(--code);
    font-size: 10px;
    color: var(--fg4);
  }
  .skill-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .skill-row {
    padding-bottom: 9px;
    border-bottom: 1px solid rgba(46, 50, 64, 0.35);
  }
  .skill-row:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .skill-name {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--fg2);
    font-weight: 600;
    margin-bottom: 2px;
  }
  .skill-desc {
    font-size: 11.5px;
    color: var(--fg4);
    line-height: 1.4;
  }

  @media (max-width: 960px) {
    .skills-layout {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  }
</style>

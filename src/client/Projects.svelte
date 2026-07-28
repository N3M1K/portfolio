<script lang="ts">
  import { reveal } from "./actions";

  interface Project {
    id: string;
    name: string;
    desc: string;
    href: string;
    color: string;
    badges: { label: string; cls: string }[];
    stack: string[];
    lighthouse: { num: number; label: string; cls: string }[];
    metrics?: string;
    target?: string;
  }

  const projects: Project[] = [
    {
      id: "PROJ://001",
      name: "DEADROP",
      desc: "Anonymous data exchange platform. Upload documents, analyze content in real time. Privacy-first architecture, auto-assigned handles, WebSocket live broadcast.",
      href: "#",
      color: "var(--red)",
      badges: [{ label: "WIP", cls: "bw" }],
      stack: ["Bun", "ElysiaJS", "HTMX", "TypeScript", "LibSQL/Turso", "WebSockets", "Bun Workers"],
      lighthouse: [
        { num: 98, label: "Perf", cls: "lg" },
        { num: 78, label: "A11y", cls: "ly" },
        { num: 100, label: "Best", cls: "lg" },
        { num: 100, label: "SEO", cls: "lg" },
      ],
      metrics: "WS broadcast · Rate limiting · SHA-256 hashing · Privacy-first",
    },
    {
      id: "PROJ://002",
      name: "PNEUBAZAR\nZLÍN",
      desc: "Full e-commerce platform for a tyre reseller in Zlín. Parametric filtering by dimensions, season and price. PHP/MySQL backend with custom admin panel. Delivered and deployed to production.",
      href: "#",
      color: "var(--green)",
      badges: [
        { label: "Completed", cls: "bl" },
        { label: "Client", cls: "bc" },
        { label: "Thesis Project", cls: "bs" },
      ],
      stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      lighthouse: [
        { num: 78, label: "Perf", cls: "ly" },
        { num: 79, label: "A11y", cls: "ly" },
        { num: 100, label: "Best", cls: "lg" },
        { num: 91, label: "SEO", cls: "lg" },
      ],
    },
    {
      id: "PROJ://003",
      name: "SMARAGD\n.US",
      desc: "Website for Smaragd summer camp — an organisation I've been part of for 10+ years. Built and maintained by me. Now serving as a group leader.",
      href: "https://smaragd.us",
      color: "var(--yellow)",
      badges: [{ label: "Live", cls: "bl" }],
      stack: ["HTML/CSS", "JavaScript"],
      lighthouse: [
        { num: 99, label: "Perf", cls: "lg" },
        { num: 87, label: "A11y", cls: "ly" },
        { num: 100, label: "Best", cls: "lg" },
        { num: 92, label: "SEO", cls: "lg" },
      ],
      target: "_blank",
    },
    {
      id: "PROJ://004",
      name: "YOKOHAMA\nTWS",
      desc: "Corporate website for Yokohama TWS (formerly Mitas Zlín), a major industrial tyre manufacturer. Performance-first architecture with aggressive caching strategy.",
      href: "https://mitas-odbory.onrender.com",
      color: "var(--blue)",
      badges: [
        { label: "WIP", cls: "bw" },
        { label: "Volunteer", cls: "bs" },
      ],
      stack: ["HTML/CSS", "JavaScript", "Cache API"],
      lighthouse: [
        { num: 100, label: "Perf", cls: "lg" },
        { num: 87, label: "A11y", cls: "ly" },
        { num: 100, label: "Best", cls: "lg" },
        { num: 91, label: "SEO", cls: "lg" },
      ],
      metrics: "Aggressive caching · 100/100 Performance",
      target: "_blank",
    },
    {
      id: "PROJ://005",
      name: "XRP",
      desc: "Zero-config local reverse proxy. Auto-discovers running dev servers and routes them to clean .local HTTPS domains. Interactive TUI dashboard, cloudflared tunnels, cross-platform.",
      href: "https://github.com/N3M1K/xrp",
      color: "var(--cyan)",
      badges: [
        { label: "WIP", cls: "bw" },
        { label: "Open Source", cls: "bc" },
      ],
      stack: ["Go", "Caddy", "mkcert", "Cloudflared", "TUI"],
      lighthouse: [],
      metrics: "Auto-discovery · HTTPS · Custom TLDs · Cross-platform",
      target: "_blank",
    },
  ];

  const delays = ["", "d1", "d2", "d3", "d4"];
</script>

<section id="projects">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">02</span>
      <h2 class="section-title">projects</h2>
      <div class="section-line"></div>
    </div>
    <div class="projects-grid">
      {#each projects as p, i}
        <a
          class="project-card reveal {delays[i] ?? ''}"
          href={p.href}
          target={p.target ?? undefined}
          style="--ca:{p.color}"
          use:reveal
        >
          <div class="project-inner">
            <div class="project-top">
              <span class="project-id">{p.id}</span>
              <div class="project-badges">
                {#each p.badges as b}
                  <span class="badge {b.cls}">{b.label}</span>
                {/each}
              </div>
            </div>
            <div class="project-name">
              {#each p.name.split("\n") as line, li}
                {#if li > 0}<br />{/if}{line}
              {/each}
            </div>
            <p class="project-desc">{p.desc}</p>
            <div class="project-stack">
              {#each p.stack as s}
                <span class="stag">{s}</span>
              {/each}
            </div>
            <div class="lighthouse">
              {#each p.lighthouse as lh}
                <div class="lh-score">
                  <div class="lh-num {lh.cls}">{lh.num}</div>
                  <div class="lh-label">{lh.label}</div>
                </div>
              {/each}
            </div>
            {#if p.metrics}
              <div class="project-metrics" style="margin-top:0">{p.metrics}</div>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  #projects {
    padding: 100px 0;
    background: rgba(28, 31, 38, 0.4);
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 12px;
  }
  .project-card {
    background: var(--bg);
    border: 1px solid var(--bg2);
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .project-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--ca, var(--blue));
    transition: box-shadow 0.3s;
  }
  .project-card:hover {
    transform: translateY(-3px);
    border-color: var(--bg3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }
  .project-card:hover::before {
    box-shadow: 2px 0 14px var(--ca, var(--blue));
  }
  .project-inner { padding: 24px; }
  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 14px;
    gap: 12px;
  }
  .project-id {
    font-size: 10px;
    color: var(--fg4);
    letter-spacing: 1px;
  }
  .project-badges {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
  .badge {
    font-size: 9px;
    letter-spacing: 1.5px;
    padding: 2px 7px;
    border: 1px solid;
    text-transform: uppercase;
  }
  :global(.bl) { color: var(--green); border-color: rgba(122, 154, 107, 0.4); background: rgba(122, 154, 107, 0.08); }
  :global(.bw) { color: var(--yellow); border-color: rgba(201, 162, 101, 0.4); background: rgba(201, 162, 101, 0.08); }
  :global(.bs) { color: var(--purple); border-color: rgba(126, 109, 148, 0.4); background: rgba(126, 109, 148, 0.08); }
  :global(.bc) { color: var(--blue); border-color: rgba(95, 137, 168, 0.4); background: rgba(95, 137, 168, 0.08); }
  .project-name {
    font-family: var(--display);
    font-size: 18px;
    color: var(--fg3);
    letter-spacing: 2px;
    margin-bottom: 10px;
    line-height: 1.2;
  }
  .project-desc {
    color: var(--fg4);
    font-size: 12px;
    line-height: 1.7;
    margin-bottom: 18px;
  }
  .project-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 16px;
  }
  .stag {
    font-family: var(--code);
    font-size: 10px;
    padding: 2px 8px;
    background: var(--bg2);
    color: var(--fg4);
  }
  .project-metrics {
    font-size: 11px;
    color: var(--fg4);
    padding-top: 14px;
    border-top: 1px solid var(--bg2);
  }
  .lighthouse {
    display: flex;
    gap: 8px;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid var(--bg2);
  }
  .lh-score { flex: 1; text-align: center; }
  .lh-num {
    font-family: var(--display);
    font-size: 20px;
    line-height: 1;
    margin-bottom: 2px;
  }
  .lh-label {
    font-size: 8px;
    letter-spacing: 1px;
    color: var(--fg4);
  }
  :global(.lg) { color: var(--green); }
  :global(.ly) { color: var(--yellow); }

  @media (max-width: 600px) {
    .projects-grid { grid-template-columns: 1fr; }
  }
</style>

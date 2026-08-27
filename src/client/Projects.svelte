<script lang="ts">
  import { reveal } from "./actions";

  interface Project {
    id: string;
    name: string;
    tagline: string;
    desc: string;
    href: string;
    color: string;
    badge: string;
    badgeCls: string;
    stack: string[];
    proof: { type: "metric" | "lighthouse"; text?: string; scores?: { num: number; label: string; cls: string }[] };
    actionLabel?: string;
    target?: string;
  }

  const featuredProjects: Project[] = [
    {
      id: "PROJ://001",
      name: "xInvoice",
      tagline: "Fast, minimal invoice generator for freelancers & builders.",
      desc: "Eliminates bloated accounting software. Generates clean PDF invoices in seconds with instant client profile caching, automated tax calculation, and QR payment integration.",
      href: "https://xinvoice.xxdev.cz",
      color: "var(--green)",
      badge: "Featured Live App",
      badgeCls: "bl",
      stack: ["Svelte 5", "TypeScript", "Bun", "PDF Engine"],
      proof: {
        type: "metric",
        text: "⚡ Live in production · Instant client PDF generation & QR payments",
      },
      actionLabel: "Launch xInvoice ↗",
      target: "_blank",
    },
    {
      id: "PROJ://002",
      name: "XPLOY",
      tagline: "Autonomous webhook deployment engine for self-hosted servers.",
      desc: "Replaces commercial PaaS. Listens for webhooks from my self-hosted Forgejo Git, rebuilds containerized services on bare Linux, and orchestrates zero-downtime rollouts.",
      href: "https://git.xxdev.cz/n3m1k/xploy",
      color: "var(--purple)",
      badge: "Production Infra",
      badgeCls: "bs",
      stack: ["Debian Server", "Linux", "Bash", "Forgejo", "Webhooks"],
      proof: {
        type: "metric",
        text: "⚡ Powers xxdev.cz sites · Webhook-driven zero-downtime deploys",
      },
      actionLabel: "View on Forgejo ↗",
      target: "_blank",
    },
  ];

  const secondaryProjects: Project[] = [
    {
      id: "PROJ://003",
      name: "XRP",
      tagline: "Zero-config local reverse proxy with interactive TUI & tunnels.",
      desc: "Auto-discovers running local dev ports and routes them to clean `.local` HTTPS domains. Features a real-time terminal UI dashboard and built-in Cloudflared remote tunnel sharing.",
      href: "https://github.com/N3M1K/xrp",
      color: "var(--cyan)",
      badge: "Active Open Source",
      badgeCls: "bc",
      stack: ["Go", "Caddy", "mkcert", "Cloudflared", "TUI"],
      proof: {
        type: "metric",
        text: "⚡ Auto-discovery · Instant HTTPS · Interactive TUI dashboard",
      },
      actionLabel: "GitHub Repo ↗",
      target: "_blank",
    },
    {
      id: "PROJ://004",
      name: "SMARAGD.US",
      tagline: "Modern community platform for youth leadership organization.",
      desc: "Designed and launched in 2026 for Smaragd—a non-profit youth organization running camps and mentorship where I've been active for 10+ years and now serve as a group leader.",
      href: "https://smaragd.us",
      color: "var(--yellow)",
      badge: "Live Client",
      badgeCls: "bw",
      stack: ["HTML/CSS", "JavaScript", "Mobile-First"],
      proof: {
        type: "lighthouse",
        scores: [
          { num: 99, label: "Perf", cls: "lg" },
          { num: 87, label: "A11y", cls: "ly" },
          { num: 100, label: "Best", cls: "lg" },
          { num: 92, label: "SEO", cls: "lg" },
        ],
      },
      actionLabel: "Visit smaragd.us ↗",
      target: "_blank",
    },
    {
      id: "PROJ://005",
      name: "YOKOHAMA TWS (Odbory)",
      tagline: "Corporate union information platform with aggressive caching.",
      desc: "Engineered for Yokohama TWS Zlín (formerly Mitas). Built with an aggressive caching strategy and lightweight DOM for instant mobile access across industrial factory floors.",
      href: "https://mitas-odbory.onrender.com",
      color: "var(--blue)",
      badge: "Production Client",
      badgeCls: "bc",
      stack: ["HTML/CSS", "JavaScript", "Cache API"],
      proof: {
        type: "lighthouse",
        scores: [
          { num: 100, label: "Perf", cls: "lg" },
          { num: 87, label: "A11y", cls: "ly" },
          { num: 100, label: "Best", cls: "lg" },
          { num: 91, label: "SEO", cls: "lg" },
        ],
      },
      actionLabel: "View live portal ↗",
      target: "_blank",
    },
    {
      id: "PROJ://006",
      name: "PNEUBAZAR ZLÍN",
      tagline: "Full-scale tire e-commerce engine with custom administration.",
      desc: "School graduation thesis turned into full client delivery. Engineered parametric filtering across thousands of dimensions, season, and price indexes with a custom PHP/MySQL administrative backend.",
      href: "#",
      color: "var(--red)",
      badge: "Thesis Delivery",
      badgeCls: "bs",
      stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      proof: {
        type: "metric",
        text: "⚡ Delivered client system · Multi-attribute parametric search",
      },
      actionLabel: "Delivered System",
    },
  ];
</script>

<section id="projects">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">01</span>
      <h2 class="section-title">featured work</h2>
      <div class="section-line"></div>
      <span class="section-sub">// shipped software & systems</span>
    </div>

    <!-- Tier 1: Flagship Top Projects -->
    <div class="featured-tier-grid">
      {#each featuredProjects as p, i}
        <article
          class="project-card flagship-card reveal {i === 1 ? 'd1' : ''}"
          style="--ca:{p.color}"
          use:reveal
        >
          <div class="project-inner">
            <div class="project-top">
              <span class="project-id">{p.id}</span>
              <span class="badge {p.badgeCls}">{p.badge}</span>
            </div>

            <h3 class="project-name flagship-name">{p.name}</h3>
            <div class="project-tagline flagship-tagline">{p.tagline}</div>
            <p class="project-desc flagship-desc">{p.desc}</p>

            <div class="project-stack">
              {#each p.stack as s}
                <span class="stag">{s}</span>
              {/each}
            </div>

            {#if p.proof.type === 'metric' && p.proof.text}
              <div class="project-metrics">
                <span>{p.proof.text}</span>
              </div>
            {/if}

            {#if p.href && p.href !== "#"}
              <div class="project-action-row">
                <a
                  href={p.href}
                  target={p.target ?? undefined}
                  rel={p.target === "_blank" ? "noopener noreferrer" : undefined}
                  class="project-link-btn"
                >
                  {p.actionLabel ?? "View project →"}
                </a>
              </div>
            {/if}
          </div>
        </article>
      {/each}
    </div>

    <!-- Tier 2: More Shipped Work Subhead -->
    <div class="tier-divider reveal d2" use:reveal>
      <span class="tier-sub-label">// additional shipped systems & open source</span>
      <div class="tier-line"></div>
    </div>

    <!-- Tier 2: Secondary Projects Grid -->
    <div class="secondary-tier-grid">
      {#each secondaryProjects as p, i}
        <article
          class="project-card secondary-card reveal {i % 2 === 1 ? 'd1' : ''}"
          style="--ca:{p.color}"
          use:reveal
        >
          <div class="project-inner secondary-inner">
            <div class="project-top">
              <span class="project-id">{p.id}</span>
              <span class="badge {p.badgeCls}">{p.badge}</span>
            </div>

            <h3 class="project-name">{p.name}</h3>
            <div class="project-tagline">{p.tagline}</div>
            <p class="project-desc">{p.desc}</p>

            <div class="project-stack">
              {#each p.stack as s}
                <span class="stag">{s}</span>
              {/each}
            </div>

            {#if p.proof.type === 'lighthouse' && p.proof.scores}
              <div class="lighthouse">
                {#each p.proof.scores as lh}
                  <div class="lh-score">
                    <div class="lh-num {lh.cls}">{lh.num}</div>
                    <div class="lh-label">{lh.label}</div>
                  </div>
                {/each}
              </div>
            {:else if p.proof.type === 'metric' && p.proof.text}
              <div class="project-metrics">
                <span>{p.proof.text}</span>
              </div>
            {/if}

            {#if p.href && p.href !== "#"}
              <div class="project-action-row">
                <a
                  href={p.href}
                  target={p.target ?? undefined}
                  rel={p.target === "_blank" ? "noopener noreferrer" : undefined}
                  class="project-link-btn"
                >
                  {p.actionLabel ?? "View project →"}
                </a>
              </div>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  #projects {
    padding: 100px 0;
    background: #111319;
    border-top: 1px solid var(--bg2);
    border-bottom: 1px solid var(--bg2);
  }
  .section-sub {
    font-size: 11px;
    color: var(--fg4);
    font-family: var(--code);
    letter-spacing: 1px;
  }

  /* Tier 1: Flagship Top Projects */
  .featured-tier-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 40px;
  }
  .flagship-card {
    background: linear-gradient(180deg, rgba(24, 27, 34, 0.95) 0%, var(--bg1) 100%);
    border: 1px solid var(--bg3);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
  }
  .flagship-name {
    font-size: 24px;
    color: #fff;
    letter-spacing: 2px;
  }
  .flagship-tagline {
    font-size: 13.5px;
    color: var(--fg3);
  }
  .flagship-desc {
    font-size: 13.5px;
    line-height: 1.8;
  }

  /* Tier Divider */
  .tier-divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 32px 0 24px;
  }
  .tier-sub-label {
    font-family: var(--code);
    font-size: 10.5px;
    color: var(--fg4);
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .tier-line {
    flex: 1;
    height: 1px;
    background: var(--bg2);
  }

  /* Tier 2: Secondary Projects */
  .secondary-tier-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .secondary-card {
    background: var(--bg1);
    opacity: 0.95;
  }
  .secondary-inner {
    padding: 24px;
  }

  /* Card Base */
  .project-card {
    border: 1px solid var(--bg2);
    display: flex;
    flex-direction: column;
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
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.5);
  }
  .project-card:hover::before {
    box-shadow: 2px 0 16px var(--ca, var(--blue));
  }

  .project-inner {
    padding: 28px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    gap: 10px;
  }
  .project-id {
    font-family: var(--code);
    font-size: 11px;
    color: var(--fg4);
    letter-spacing: 1px;
  }
  .badge {
    font-size: 10.5px;
    letter-spacing: 1px;
    padding: 3px 8px;
    border: 1px solid;
    text-transform: uppercase;
    font-weight: 500;
    font-family: var(--mono);
  }
  :global(.bl) { color: var(--green); border-color: rgba(122, 163, 109, 0.5); background: rgba(122, 163, 109, 0.12); }
  :global(.bw) { color: var(--yellow); border-color: rgba(212, 175, 114, 0.5); background: rgba(212, 175, 114, 0.12); }
  :global(.bs) { color: var(--purple); border-color: rgba(142, 124, 166, 0.5); background: rgba(142, 124, 166, 0.12); }
  :global(.bc) { color: var(--blue); border-color: rgba(107, 158, 194, 0.5); background: rgba(107, 158, 194, 0.12); }
  
  .project-name {
    font-family: var(--display);
    font-size: 20px;
    color: var(--fg3);
    letter-spacing: 1.5px;
    margin-bottom: 6px;
    line-height: 1.2;
  }
  .project-tagline {
    color: var(--fg2);
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  .project-desc {
    color: var(--fg);
    font-size: 13px;
    line-height: 1.75;
    margin-bottom: 16px;
    flex: 1;
  }
  .project-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }
  .stag {
    font-family: var(--code);
    font-size: 11px;
    padding: 3px 8px;
    background: var(--bg2);
    color: var(--fg2);
    border: 1px solid rgba(46, 50, 64, 0.5);
  }
  .project-metrics {
    font-size: 12px;
    color: var(--fg2);
    padding-top: 14px;
    border-top: 1px solid var(--bg2);
    margin-top: auto;
    font-family: var(--mono);
    line-height: 1.5;
  }
  .lighthouse {
    display: flex;
    gap: 8px;
    margin-top: 12px;
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
    font-size: 9.5px;
    letter-spacing: 1px;
    color: var(--fg4);
    text-transform: uppercase;
  }
  :global(.lg) { color: var(--green); }
  :global(.ly) { color: var(--yellow); }

  .project-action-row {
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid rgba(46, 50, 64, 0.4);
  }
  .project-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11.5px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--green);
    text-decoration: none;
    font-family: var(--mono);
    font-weight: bold;
    transition: all 0.2s;
    padding: 4px 0;
  }
  .project-link-btn:hover {
    color: #fff;
    transform: translateX(4px);
  }

  @media (max-width: 900px) {
    .featured-tier-grid,
    .secondary-tier-grid {
      grid-template-columns: 1fr;
    }
    .project-inner { padding: 22px; }
  }
</style>

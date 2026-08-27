<script lang="ts">
  import { reveal } from "./actions";

  const entries = [
    {
      date: "SEP 2026",
      beat: "Starting FI MUNI in Brno",
      title: "Faculty of Informatics — Programování a vývoj aplikací",
      desc: "Deepening theoretical foundations in algorithms and distributed systems while continuing to build and ship production software.",
      delay: "",
    },
    {
      date: "2026",
      beat: "Shipped Smaragd.us & xInvoice",
      title: "Production Launches & SaaS Tooling",
      desc: "Delivered the new community portal for the <span class=\"em\">Smaragd youth organization</span> (99/100 Perf) and launched <span class=\"em\">xInvoice</span> as a live billing tool.",
      delay: "d1",
    },
    {
      date: "MAY 2026",
      beat: "Graduated SPŠP-COP Zlín",
      title: "Maturita with Honors in IT",
      desc: "Completed software engineering and applied mathematics coursework with a full-scale e-commerce platform thesis.",
      delay: "d2",
    },
    {
      date: "2025 — 2026",
      beat: "Yokohama TWS Union Platform",
      title: "100/100 Lighthouse Performance Portal",
      desc: "Engineered high-performance information architecture with <span class=\"em\">aggressive caching</span> for factory floor mobile connectivity.",
      delay: "d3",
    },
    {
      date: "2024",
      beat: "Pneubazar Zlín Client Delivery",
      title: "Parametric E-commerce Platform",
      desc: "Engineered multi-attribute tire search across thousands of dimensions with custom PHP/MySQL administrative backend.",
      delay: "d4",
    },
    {
      date: "2023 — NOW",
      beat: "Smaragd Camp Leader & Organizer",
      title: "Youth Non-Profit Leadership",
      desc: "10+ years camper, now leading groups and organizing summer camps. Building leadership, clear communication, and high-pressure execution skills.",
      delay: "d5",
    },
  ];
</script>

<section id="timeline-section">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">04</span>
      <h2 class="section-title">journey & milestones</h2>
      <div class="section-line"></div>
      <span class="section-sub">// history & education</span>
    </div>
    <div class="timeline">
      {#each entries as e}
        <div class="tli reveal {e.delay}" use:reveal>
          <div class="tl-header">
            <span class="tl-date">{e.date}</span>
            <span class="tl-sep">→</span>
            <h3 class="tl-beat">{e.beat}</h3>
          </div>
          <div class="tl-title">{e.title}</div>
          <div class="tl-desc">{@html e.desc}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #timeline-section {
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
  .timeline {
    position: relative;
    padding-left: 32px;
    max-width: 860px;
  }
  .timeline::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: var(--bg3);
  }
  .tli {
    position: relative;
    margin-bottom: 34px;
    padding-left: 24px;
  }
  .tli:last-child {
    margin-bottom: 0;
  }
  .tli::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 6px;
    width: 9px;
    height: 9px;
    border: 1px solid var(--green);
    background: var(--bg);
    transform: rotate(45deg);
    transition: background 0.2s, box-shadow 0.2s;
  }
  .tli:hover::before {
    background: var(--green);
    box-shadow: 0 0 10px var(--green);
  }
  .tl-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 4px;
    flex-wrap: wrap;
  }
  .tl-date {
    font-family: var(--code);
    font-size: 11px;
    color: var(--green);
    letter-spacing: 1px;
    font-weight: bold;
    flex-shrink: 0;
  }
  .tl-sep {
    color: var(--fg4);
    font-size: 12px;
  }
  .tl-beat {
    font-family: var(--mono);
    font-size: 16px;
    color: var(--fg3);
    font-weight: 600;
    margin: 0;
    display: inline;
  }
  .tl-title {
    font-size: 13px;
    color: var(--fg2);
    font-weight: 500;
    margin-bottom: 4px;
  }
  .tl-desc {
    font-size: 12.5px;
    color: var(--fg);
    line-height: 1.65;
  }
  .tl-desc :global(.em) {
    color: var(--blue);
    font-weight: 500;
  }
</style>

<script lang="ts">
  import { reveal } from "./actions";

  const entries = [
    {
      date: "SEP 2026",
      title: "FI MUNI — Programování a vývoj aplikací",
      desc: 'Starting at <span class="em">Faculty of Informatics, Masaryk University</span>. Moving to Brno.',
      delay: "",
    },
    {
      date: "MAY 2026",
      title: "Maturita — SPŠP-COP Zlín",
      desc: "Graduated from IT programme with a focus on mathematics and software development.",
      delay: "d1",
    },
    {
      date: "2025 — 2026",
      title: "Yokohama TWS — Corporate Website",
      desc: 'Volunteer project. Building the corporate site for a major industrial tyre manufacturer with <span class="em">performance-first caching architecture</span>.',
      delay: "d2",
    },
    {
      date: "2024",
      title: "Pneubazar Zlín — E-commerce Platform",
      desc: 'School thesis project turned into a real client engagement. <span class="em">Full-stack e-commerce</span> with PHP/MySQL, parametric filtering, and a custom admin panel. Delivered and deployed to production.',
      delay: "d3",
    },
    {
      date: "2023 — NOW",
      title: "Smaragd Summer Camp — Group Leader",
      desc: "10+ years as a camper, now leading groups. Building leadership and organizational skills through hands-on team management.",
      delay: "d4",
    },
  ];
</script>

<section id="timeline-section">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">04</span>
      <h2 class="section-title">timeline</h2>
      <div class="section-line"></div>
    </div>
    <div class="timeline">
      {#each entries as e}
        <div class="tli reveal {e.delay}" use:reveal>
          <div class="tl-date">{e.date}</div>
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
    background: rgba(28, 31, 38, 0.4);
  }
  .timeline {
    position: relative;
    padding-left: 32px;
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
    margin-bottom: 40px;
    padding-left: 24px;
  }
  .tli::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 8px;
    width: 9px;
    height: 9px;
    border: 1px solid var(--green);
    background: var(--bg);
    transform: rotate(45deg);
    transition: background 0.2s;
  }
  .tli:hover::before {
    background: var(--green);
  }
  .tl-date {
    font-size: 10px;
    color: var(--fg4);
    letter-spacing: 2px;
    margin-bottom: 4px;
  }
  .tl-title {
    font-size: 15px;
    color: var(--fg3);
    margin-bottom: 4px;
  }
  .tl-desc {
    font-size: 12px;
    color: var(--fg4);
    line-height: 1.7;
  }
  .tl-desc :global(.em) {
    color: var(--blue);
  }
</style>

<script lang="ts">
  import { reveal } from "./actions";
</script>

<section id="about">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">02</span>
      <h2 class="section-title">about & philosophy</h2>
      <div class="section-line"></div>
      <span class="section-sub">// background & mindset</span>
    </div>

    <div class="about-grid">
      <div class="about-text reveal" use:reveal>
        <p class="lead-p">
          <span class="hi">Hey, I'm Lukáš.</span> I build software with an obsession for <span class="em">minimalism, raw performance, and full ownership</span> of the stack.
        </p>

        <p>
          I started programming in high school (SPŠP-COP Zlín) and went straight into building real production tools and client systems. This September, I'm continuing that path at <span class="em2">FI MUNI in Brno</span>.
        </p>

        <div class="philosophy-box">
          <div class="ph-title">// My Engineering Mindset</div>
          <p class="ph-text">
            "Build lean, measure everything, and minimize dependencies. Code should be fast by default, and infrastructure should be something you truly own."
          </p>
        </div>

        <p>
          I daily-drive <span class="em">Arch Linux (CachyOS)</span>, host my own <span class="em2">Debian server running Forgejo Git</span>, and deploy with my custom tool <span class="em">xploy</span>.
        </p>

        <p>
          Outside the terminal: I've spent 10+ years with <span class="em3">Smaragd</span>—a youth non-profit organization running camps where I now serve as a group leader. When I'm not coding or organizing, I'm usually with a cup of coffee blasting <span class="music-highlight">Linkin Park, BMTH, SOAD, Brixtn, or Realita</span>.
        </p>
      </div>

      <div class="about-stats reveal d2" use:reveal>
        <div class="stat-box" style="--acc:var(--green)">
          <div class="stat-top">
            <span class="stat-num">4+</span>
            <span class="stat-badge">Shipped</span>
          </div>
          <div class="stat-label">Production Deliveries</div>
          <div class="stat-desc">Client platforms, live tools & e-commerce engines.</div>
        </div>

        <div class="stat-box" style="--acc:var(--yellow)">
          <div class="stat-top">
            <span class="stat-num">100/100</span>
            <span class="stat-badge">Score</span>
          </div>
          <div class="stat-label">Top Lighthouse Perf</div>
          <div class="stat-desc">Achieved on Yokohama corporate union platform.</div>
        </div>

        <div class="stat-box" style="--acc:var(--blue)">
          <div class="stat-top">
            <span class="stat-num">3y+</span>
            <span class="stat-badge">Leadership</span>
          </div>
          <div class="stat-label">Youth Camp Leader</div>
          <div class="stat-desc">Team coordination & mentorship under pressure.</div>
        </div>

        <div class="stat-box" style="--acc:var(--purple)">
          <div class="stat-top">
            <span class="stat-num">Self-Hosted</span>
            <span class="stat-badge">Infra</span>
          </div>
          <div class="stat-label">Independent Stack</div>
          <div class="stat-desc">Debian server, Forgejo Git & custom deployment.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  #about {
    padding: 100px 0;
  }
  .section-sub {
    font-size: 11px;
    color: var(--fg4);
    font-family: var(--code);
    letter-spacing: 1px;
  }
  .about-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 56px;
    align-items: start;
  }
  .lead-p {
    font-size: 15px !important;
    line-height: 1.8 !important;
    color: var(--fg2) !important;
  }
  .about-text p {
    color: var(--fg);
    font-size: 13.5px;
    line-height: 1.85;
    margin-bottom: 18px;
  }
  .hi { color: var(--fg3); font-weight: 600; }
  .em { color: var(--green); font-weight: 500; }
  .em2 { color: var(--yellow); font-weight: 500; }
  .em3 { color: var(--blue); font-weight: 500; }
  .music-highlight {
    color: var(--purple);
    font-weight: 500;
    font-family: var(--mono);
  }

  .philosophy-box {
    background: var(--bg1);
    border-left: 3px solid var(--green);
    border-top: 1px solid var(--bg2);
    border-right: 1px solid var(--bg2);
    border-bottom: 1px solid var(--bg2);
    padding: 16px 20px;
    margin: 22px 0;
  }
  .ph-title {
    font-family: var(--code);
    font-size: 11px;
    color: var(--green);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .ph-text {
    font-family: var(--mono);
    font-size: 13px !important;
    color: var(--fg2) !important;
    line-height: 1.7 !important;
    margin-bottom: 0 !important;
    font-style: italic;
  }

  .about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .stat-box {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    padding: 22px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.2s, transform 0.2s;
  }
  .stat-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--acc, var(--blue));
    transform: scaleX(0);
    transition: transform 0.3s;
  }
  .stat-box:hover {
    border-color: var(--bg3);
    transform: translateY(-2px);
  }
  .stat-box:hover::before {
    transform: scaleX(1);
  }
  .stat-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
  }
  .stat-num {
    font-family: var(--display);
    font-size: 32px;
    color: var(--fg3);
    line-height: 1;
  }
  .stat-badge {
    font-family: var(--code);
    font-size: 9px;
    padding: 2px 6px;
    background: var(--bg2);
    color: var(--fg4);
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .stat-label {
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--fg2);
    font-weight: 600;
    margin-bottom: 6px;
  }
  .stat-desc {
    font-size: 11.5px;
    color: var(--fg4);
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
  }
  @media (max-width: 600px) {
    .about-stats { grid-template-columns: 1fr; }
  }
</style>

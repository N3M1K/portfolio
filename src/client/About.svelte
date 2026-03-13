<script lang="ts">
  import { reveal } from "./actions";
</script>

<section id="about">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">01</span>
      <h2 class="section-title">about</h2>
      <div class="section-line"></div>
    </div>
    <div class="about-grid">
      <div class="about-text reveal" use:reveal>
        <p>
          <span class="hi">Hey —</span> I'm a 4th-year high school student at
          <span class="em">SPŠP-COP Zlín</span>, graduating May 2026.
          Starting at <span class="em2">FI MUNI</span> (Programování a vývoj aplikací)
          in September.
        </p>
        <p>
          I've been building real, deployed projects since secondary school — not
          toy apps, but
          <span class="em">production systems with real clients</span>.
          E-commerce platforms, corporate websites, real-time web apps. I care
          about architecture, performance, and writing code that doesn't
          embarrass you six months later.
        </p>
        <p>
          Outside of code: I've been a
          <span class="em3">camp leader at Smaragd</span> for 10 years — which
          taught me more about managing chaos and people than any course.
          Currently deep in <span class="em2">NixOS</span> after Arch, Fedora,
          Mint and Kali. The declarative OS rabbit hole has me.
        </p>
        <p>Moving to Brno soon. Looking for interesting problems.</p>
      </div>
      <div class="about-stats reveal d2" use:reveal>
        <div class="stat-box" style="--acc:var(--green)">
          <div class="stat-num">4+</div>
          <div class="stat-label">Production Projects</div>
        </div>
        <div class="stat-box" style="--acc:var(--blue)">
          <div class="stat-num">10y</div>
          <div class="stat-label">Camp Leadership</div>
        </div>
        <div class="stat-box" style="--acc:var(--yellow)">
          <div class="stat-num">90+</div>
          <div class="stat-label">Lighthouse Score</div>
        </div>
        <div class="stat-box" style="--acc:var(--purple)">
          <div class="stat-num">∞</div>
          <div class="stat-label">NixOS configs broken</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  #about { padding: 100px 0; }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }
  .about-text p {
    color: var(--fg);
    font-size: 13px;
    line-height: 1.9;
    margin-bottom: 16px;
  }
  .hi { color: var(--fg3); }
  .em { color: var(--blue); }
  .em2 { color: var(--yellow); }
  .em3 { color: var(--green); }
  .about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }
  .stat-box {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.2s;
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
  }
  .stat-box:hover::before {
    transform: scaleX(1);
  }
  .stat-num {
    font-family: var(--display);
    font-size: 36px;
    color: var(--fg3);
    line-height: 1;
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--fg4);
  }

  @media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .about-stats { grid-template-columns: 1fr 1fr; }
  }
</style>

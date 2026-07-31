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
          <span class="hi">Hey —</span> I graduated from
          <span class="em">SPŠP-COP Zlín</span> in May 2026 and I'm
          starting at <span class="em2">FI MUNI</span> (Programování a vývoj aplikací)
          this September.
        </p>
        <p>
          I've been building and deploying production systems since high school —
          <span class="em">e-commerce platforms, corporate websites, and
          real-time web applications</span>.
          I care about architecture, performance, and writing code that
          holds up over time.
        </p>
        <p>
          Outside of code: I've been a
          <span class="em3">group leader at Smaragd summer camp</span> for 3 years,
          which taught me a lot about team coordination and
          working under pressure. Linux enthusiast, currently running
          <span class="em2">NixOS</span>.
        </p>
        <p>
          I'm also passionate about infrastructure and DevOps—running a <span class="em">self-hosted Git (Forgejo)</span> instance and managing deployments for my own sites using my custom <span class="em2">xploy</span> project.
        </p>
        <p>Moving to Brno soon. Open to interesting projects.</p>
      </div>
      <div class="about-stats reveal d2" use:reveal>
        <div class="stat-box" style="--acc:var(--green)">
          <div class="stat-num">4+</div>
          <div class="stat-label">Production Projects</div>
        </div>
        <div class="stat-box" style="--acc:var(--blue)">
          <div class="stat-num">3y</div>
          <div class="stat-label">Camp Leadership</div>
        </div>
        <div class="stat-box" style="--acc:var(--yellow)">
          <div class="stat-num">90+</div>
          <div class="stat-label">Lighthouse Score</div>
        </div>
        <div class="stat-box" style="--acc:var(--purple)">
          <div class="stat-num">3+</div>
          <div class="stat-label">Years Dev Experience</div>
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

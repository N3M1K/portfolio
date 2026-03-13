<script lang="ts">
  import { reveal } from "./actions";
</script>

<section id="hero">
  <div class="reveal" use:reveal>
    <div class="hero-tag">Available for freelance</div>
    <h1 class="hero-name">
      <span class="glitch" data-text="Lukáš">Lukáš</span><br />
      <span class="glitch" data-text="Němeček">Němeček</span>
    </h1>
    <div class="hero-handle"><span class="slash">//</span>xxdev</div>
    <p class="hero-desc">
      Developer from <span class="ac">Zlín, CZ</span>. Building real things —
      production e-commerce, real-time platforms, corporate systems. Incoming
      <span class="ac">FI MUNI</span> student. Camp leader. NixOS explorer.
    </p>
    <div class="hero-ctas">
      <a href="#projects" class="btn btn-g">→ view projects</a>
      <a href="#contact" class="btn btn-ghost">get in touch</a>
    </div>
  </div>

  <div class="hero-terminal reveal d2" use:reveal>
    <div class="term-bar">
      <div class="term-dot" style="background:#c95a5a"></div>
      <div class="term-dot" style="background:#e6ae5c"></div>
      <div class="term-dot" style="background:#8ba563"></div>
      <span class="term-bar-title">xxdev@nixos ~ zsh</span>
    </div>
    <div class="term-body">
      <div style="display:flex;gap:10px">
        <span class="tp">❯</span><span class="tc">cat whoami.json</span>
      </div>
      <div class="to">{"{"}</div>
      <div style="color:var(--blue);padding-left:36px">
        "name": <span style="color:var(--yellow)">"Lukáš Němeček"</span>,
      </div>
      <div style="color:var(--blue);padding-left:36px">
        "handle": <span style="color:var(--yellow)">"xxdev"</span>,
      </div>
      <div style="color:var(--blue);padding-left:36px">
        "location": <span style="color:var(--yellow)">"Zlín → Brno"</span>,
      </div>
      <div style="color:var(--blue);padding-left:36px">
        "next": <span style="color:var(--yellow)">"FI MUNI 2026"</span>,
      </div>
      <div style="color:var(--blue);padding-left:36px">
        "stack": <span style="color:var(--yellow)"
          >["Bun","Elysia","TS","PHP"]</span
        >,
      </div>
      <div style="color:var(--blue);padding-left:36px">
        "os": <span style="color:var(--yellow)">"NixOS"</span>,
      </div>
      <div style="color:var(--blue);padding-left:36px">
        "iq": <span style="color:var(--green)">140</span>
        <span style="color:var(--fg4);font-style:italic">// had to flex</span>
      </div>
      <div class="to">{"}"}</div>
      <div style="display:flex;gap:10px;margin-top:8px">
        <span class="tp">❯</span><span class="tc"
          ><span class="tcursor"></span></span
        >
      </div>
    </div>
  </div>
</section>

<style>
  #hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 60px;
    padding: 100px 40px 60px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .hero-tag {
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .hero-tag::before {
    content: "";
    width: 28px;
    height: 1px;
    background: var(--green);
  }
  .hero-name {
    font-family: var(--display);
    font-size: clamp(36px, 5vw, 64px);
    color: var(--fg3);
    line-height: 1.1;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }
  .glitch {
    position: relative;
    display: inline-block;
  }
  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--display);
    font-size: inherit;
    letter-spacing: inherit;
  }
  .glitch::before {
    color: var(--red);
    opacity: 0;
    animation: gr 7s infinite;
  }
  .glitch::after {
    color: var(--blue);
    opacity: 0;
    animation: gb 7s infinite 0.4s;
  }
  @keyframes gr {
    0%, 87%, 100% { opacity: 0; transform: none; }
    88% { opacity: 0.7; clip-path: inset(15% 0 65% 0); transform: translateX(-4px); }
    90% { opacity: 0.7; clip-path: inset(60% 0 8% 0); transform: translateX(3px); }
    92% { opacity: 0.7; clip-path: inset(3% 0 85% 0); transform: translateX(-2px); }
    94% { opacity: 0; }
  }
  @keyframes gb {
    0%, 89%, 100% { opacity: 0; transform: none; }
    90% { opacity: 0.6; clip-path: inset(72% 0 3% 0); transform: translateX(4px); }
    92% { opacity: 0.6; clip-path: inset(25% 0 50% 0); transform: translateX(-2px); }
    94% { opacity: 0.6; clip-path: inset(8% 0 75% 0); transform: translateX(3px); }
    96% { opacity: 0; }
  }
  .hero-handle {
    font-family: var(--display);
    font-size: clamp(20px, 3vw, 36px);
    color: var(--green);
    letter-spacing: 4px;
    margin-bottom: 28px;
  }
  .hero-handle .slash {
    color: var(--fg4);
  }
  .hero-desc {
    color: var(--fg4);
    font-size: 13px;
    line-height: 1.8;
    max-width: 420px;
    margin-bottom: 36px;
  }
  .hero-desc :global(.ac) {
    color: var(--blue);
  }
  .hero-ctas {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .hero-terminal {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    position: relative;
    overflow: hidden;
  }
  .hero-terminal::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--green);
    box-shadow: 0 0 12px rgba(139, 165, 99, 0.6);
  }
  .term-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: var(--bg2);
    border-bottom: 1px solid var(--bg3);
  }
  .term-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .term-bar-title {
    flex: 1;
    text-align: center;
    font-size: 10px;
    color: var(--fg4);
    letter-spacing: 1px;
  }
  .term-body {
    padding: 20px;
    font-family: var(--code);
    font-size: 12px;
    line-height: 2;
  }
  .tp {
    color: var(--green);
    user-select: none;
    flex-shrink: 0;
  }
  .tc {
    color: var(--fg3);
  }
  .to {
    color: var(--blue);
    padding-left: 20px;
  }
  .tcursor {
    display: inline-block;
    width: 8px;
    height: 14px;
    background: var(--green);
    animation: blink 1s step-end infinite;
    vertical-align: middle;
    margin-left: 2px;
  }
  @keyframes blink {
    50% { opacity: 0; }
  }

  @media (max-width: 900px) {
    #hero {
      grid-template-columns: 1fr;
      padding: 100px 20px 60px;
    }
    .hero-terminal {
      display: none;
    }
  }
</style>

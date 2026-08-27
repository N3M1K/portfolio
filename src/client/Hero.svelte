<script lang="ts">
  import { reveal } from "./actions";
</script>

<section id="hero">
  <div class="hero-content reveal" use:reveal>
    <div class="hero-tag">
      <span class="status-dot"></span>
      Available for freelance & projects
    </div>
    
    <h1 class="hero-name">
      <span class="glitch" data-text="Lukáš">Lukáš</span>
      <span class="glitch" data-text="Němeček">Němeček</span>
    </h1>

    <div class="hero-value-prop">
      Full-stack developer from <span class="highlight">Zlín, CZ</span> entering <span class="highlight">FI MUNI</span>.
    </div>

    <p class="hero-desc">
      I build fast web applications, developer tooling, and self-hosted infrastructure. From production e-commerce to custom deployment pipelines—I care about lean architecture, real performance, and shipping software that lasts.
    </p>

    <div class="hero-ctas">
      <a href="#projects" class="btn btn-g">
        <span>Explore selected work</span>
        <span class="cta-arrow">↓</span>
      </a>
      <a href="#contact" class="btn btn-ghost">Let's work together →</a>
    </div>

    <div class="hero-proof-strip">
      <div class="proof-item">
        <span class="proof-num">4+</span>
        <span class="proof-lbl">Production Projects</span>
      </div>
      <span class="proof-sep">/</span>
      <div class="proof-item">
        <span class="proof-num">100/100</span>
        <span class="proof-lbl">Lighthouse (Yokohama)</span>
      </div>
      <span class="proof-sep">/</span>
      <div class="proof-item">
        <span class="proof-num">Self-Hosted</span>
        <span class="proof-lbl">Debian + Forgejo</span>
      </div>
    </div>
  </div>

  <div class="hero-terminal reveal d2" use:reveal>
    <div class="term-bar">
      <div class="term-dot" style="background:#c95a5a"></div>
      <div class="term-dot" style="background:#e6ae5c"></div>
      <div class="term-dot" style="background:#8ba563"></div>
      <span class="term-bar-title">lukas@cachyos-station ~ xxdev-ctl</span>
    </div>
    <div class="term-body">
      <div class="term-prompt-line">
        <span class="tp">❯</span><span class="tc">xxdev-ctl status --live</span>
      </div>
      
      <div class="term-node-list">
        <div class="term-node">
          <span class="node-dot dot-g">●</span>
          <span class="node-name">debian-server</span>
          <span class="node-val">[UP: 99.98% · Zlín host]</span>
        </div>
        <div class="term-node">
          <span class="node-dot dot-g">●</span>
          <span class="node-name">forgejo-git</span>
          <span class="node-val">[git.xxdev.cz · active]</span>
        </div>
        <div class="term-node">
          <span class="node-dot dot-g">●</span>
          <span class="node-name">xinvoice-app</span>
          <span class="node-val">[xinvoice.xxdev.cz · live]</span>
        </div>
        <div class="term-node">
          <span class="node-dot dot-g">●</span>
          <span class="node-name">xploy-deployer</span>
          <span class="node-val">[webhook :9000 · ready]</span>
        </div>
        <div class="term-node">
          <span class="node-dot dot-y">●</span>
          <span class="node-name">workstation</span>
          <span class="node-val">[cachyos-arch · ready to build]</span>
        </div>
        <div class="term-node music-node">
          <span class="node-dot dot-b">♫</span>
          <span class="node-name">music-queue</span>
          <span class="node-val">[Linkin Park · BMTH · Brixtn · SOAD]</span>
        </div>
      </div>

      <div class="term-prompt-line" style="margin-top:12px">
        <span class="tp">❯</span><span class="tc">xxdev-ctl ping --status</span>
      </div>
      <div class="term-msg">System online · Available for projects. <span class="tcursor"></span></div>
    </div>
  </div>
</section>

<style>
  #hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    align-items: center;
    gap: 48px;
    padding: 120px 40px 80px;
    max-width: 1160px;
    margin: 0 auto;
  }
  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 16px;
    background: rgba(122, 163, 109, 0.08);
    border: 1px solid rgba(122, 163, 109, 0.25);
    padding: 4px 10px;
  }
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.85); }
  }
  .hero-name {
    font-family: var(--display);
    font-size: clamp(32px, 4.5vw, 56px);
    color: var(--fg3);
    line-height: 1.1;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }
  .hero-value-prop {
    font-size: clamp(18px, 2.2vw, 24px);
    color: var(--fg2);
    font-family: var(--mono);
    line-height: 1.4;
    margin-bottom: 16px;
    font-weight: 500;
  }
  .hero-value-prop .highlight {
    color: var(--green);
    border-bottom: 1px dashed rgba(122, 163, 109, 0.5);
  }
  .hero-desc {
    color: var(--fg2);
    font-size: 14px;
    line-height: 1.8;
    max-width: 520px;
    margin-bottom: 28px;
  }
  .hero-desc :global(.ac) {
    color: var(--blue);
    font-weight: 600;
  }
  .hero-ctas {
    display: flex;
    gap: 14px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }
  .cta-arrow {
    display: inline-block;
    transition: transform 0.2s;
  }
  .btn-g:hover .cta-arrow {
    transform: translateY(3px);
  }
  .hero-proof-strip {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 20px;
    border-top: 1px solid var(--bg2);
    flex-wrap: wrap;
  }
  .proof-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .proof-num {
    font-family: var(--display);
    font-size: 18px;
    color: var(--fg3);
    line-height: 1;
  }
  .proof-lbl {
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--fg4);
  }
  .proof-sep {
    color: var(--bg3);
    font-size: 14px;
  }

  .glitch {
    position: relative;
    display: inline-block;
    margin-right: 8px;
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

  .hero-terminal {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
    min-width: 0;
  }
  .hero-terminal::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--green);
    box-shadow: 0 0 12px rgba(122, 163, 109, 0.6);
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
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
  .term-bar-title {
    flex: 1;
    text-align: center;
    font-size: 11px;
    color: var(--fg2);
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .term-body {
    padding: 20px;
    font-family: var(--code);
    font-size: 12px;
    line-height: 1.7;
    overflow-x: hidden;
  }
  .term-prompt-line {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }
  .term-node-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-left: 10px;
    margin: 6px 0;
    min-width: 0;
  }
  .term-node {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-size: 11.5px;
    min-width: 0;
    flex-wrap: wrap;
  }
  .node-dot {
    font-size: 9px;
    flex-shrink: 0;
  }
  .dot-g { color: var(--green); }
  .dot-y { color: var(--yellow); }
  .dot-b { color: var(--blue); font-size: 12px; }
  .node-name {
    color: var(--blue);
    min-width: 105px;
    font-weight: 500;
    flex-shrink: 0;
  }
  .node-val {
    color: var(--fg2);
    word-break: break-word;
  }
  .music-node .node-name {
    color: var(--purple);
  }
  .music-node .node-val {
    color: var(--fg);
    font-style: italic;
  }
  .tp {
    color: var(--green);
    user-select: none;
    flex-shrink: 0;
    font-weight: bold;
  }
  .tc {
    color: var(--fg3);
    word-break: break-all;
  }
  .term-msg {
    padding-left: 18px;
    color: var(--green);
    font-weight: bold;
    word-break: break-word;
  }
  .tcursor {
    display: inline-block;
    width: 8px;
    height: 13px;
    background: var(--green);
    animation: blink 1s step-end infinite;
    vertical-align: middle;
    margin-left: 2px;
  }
  @keyframes blink {
    50% { opacity: 0; }
  }

  @media (max-width: 960px) {
    #hero {
      grid-template-columns: 1fr;
      padding: 100px 20px 60px;
      gap: 36px;
    }
  }

  @media (max-width: 480px) {
    #hero {
      padding: 90px 14px 48px;
    }
    .hero-name {
      font-size: 32px;
    }
    .term-body {
      padding: 14px;
      font-size: 11px;
    }
    .term-node {
      gap: 4px;
    }
    .node-name {
      min-width: 90px;
    }
    .hero-proof-strip {
      gap: 10px;
    }
    .proof-sep {
      display: none;
    }
  }
</style>

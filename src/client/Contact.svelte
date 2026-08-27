<script lang="ts">
  import { reveal } from "./actions";
  let copied = false;

  function copyEmail() {
    navigator.clipboard.writeText("lukas.nemecek@xxdev.cz");
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<section id="contact">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">05</span>
      <h2 class="section-title">contact & collaboration</h2>
      <div class="section-line"></div>
      <span class="section-sub">// let's build something real</span>
    </div>

    <div class="contact-wrap">
      <div class="contact-text reveal" use:reveal>
        <div class="contact-hook-tag">// INVITATION</div>
        <h2 class="contact-headline">
          Have a project worth building?<br />
          <span class="highlight">Let's make it real.</span>
        </h2>

        <p class="contact-desc">
          I'm currently open to select freelance engagements, contract development, and technical collaborations. Whether you need a high-performance web platform, API architecture, custom tooling, or full-stack engineering—let's discuss how we can build it right.
        </p>

        <div class="direct-contact-box">
          <div class="direct-label">Direct Email:</div>
          <div class="direct-row">
            <a href="mailto:lukas.nemecek@xxdev.cz" class="direct-email-link">
              lukas.nemecek@xxdev.cz
            </a>
            <button class="copy-btn" onclick={copyEmail} title="Copy email to clipboard">
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div class="contact-links">
          <a class="contact-link" href="https://git.xxdev.cz/n3m1k" target="_blank" rel="noopener noreferrer">
            <span class="ll">Forgejo Git</span>
            <span class="lv">git.xxdev.cz/n3m1k</span>
            <span class="la">↗</span>
          </a>

          <a class="contact-link" href="https://github.com/N3M1K" target="_blank" rel="noopener noreferrer">
            <span class="ll">GitHub</span>
            <span class="lv">github.com/N3M1K</span>
            <span class="la">↗</span>
          </a>

          <a class="contact-link" href="https://xinvoice.xxdev.cz" target="_blank" rel="noopener noreferrer">
            <span class="ll">xInvoice</span>
            <span class="lv">xinvoice.xxdev.cz</span>
            <span class="la">↗</span>
          </a>

          <a class="contact-link" href="https://smaragd.us" target="_blank" rel="noopener noreferrer">
            <span class="ll">Smaragd</span>
            <span class="lv">smaragd.us</span>
            <span class="la">↗</span>
          </a>
        </div>
      </div>

      <div class="cta-block reveal d2" use:reveal>
        <div class="cta-label">// Status & Availability</div>
        
        <div class="avail-badge">
          <div class="avail-dot"></div>
          <span>Available for Q3/Q4 Projects · Remote / Brno / Zlín</span>
        </div>

        <h3 class="cta-title">Looking for an engineer who delivers?</h3>
        
        <ul class="cta-list">
          <li>✓ Production full-stack web platforms (Bun / Svelte / PHP)</li>
          <li>✓ High-throughput APIs & WebSocket servers</li>
          <li>✓ Core Web Vitals & 100/100 Lighthouse performance</li>
          <li>✓ Independent self-hosted infrastructure & deployment</li>
        </ul>

        <div class="cta-actions">
          <a href="mailto:lukas.nemecek@xxdev.cz" class="btn btn-g send-btn">
            <span>→ Send an email</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  #contact {
    padding: 100px 0 90px;
    background: rgba(12, 13, 17, 0.8);
  }
  .section-sub {
    font-size: 11px;
    color: var(--fg4);
    font-family: var(--code);
    letter-spacing: 1px;
  }
  .contact-wrap {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: start;
  }
  .contact-hook-tag {
    font-family: var(--code);
    font-size: 11px;
    color: var(--green);
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .contact-headline {
    font-family: var(--display);
    font-size: clamp(26px, 3.5vw, 42px);
    color: var(--fg3);
    letter-spacing: 2px;
    line-height: 1.2;
    margin-bottom: 18px;
  }
  .contact-headline .highlight {
    color: var(--green);
  }
  .contact-desc {
    color: var(--fg2);
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .direct-contact-box {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    padding: 16px 20px;
    margin-bottom: 24px;
  }
  .direct-label {
    font-size: 10.5px;
    color: var(--fg4);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: var(--code);
    margin-bottom: 6px;
  }
  .direct-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .direct-email-link {
    font-family: var(--mono);
    font-size: 15px;
    color: var(--fg3);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
  }
  .direct-email-link:hover {
    color: var(--green);
  }
  .copy-btn {
    background: var(--bg2);
    border: 1px solid var(--bg3);
    color: var(--fg2);
    font-family: var(--code);
    font-size: 11px;
    padding: 6px 12px;
    min-height: 36px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .copy-btn:hover {
    border-color: var(--green);
    color: var(--green);
  }

  .contact-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .contact-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: var(--fg2);
    text-decoration: none;
    font-size: 12px;
    padding: 12px 14px;
    border: 1px solid var(--bg2);
    background: var(--bg1);
    transition: all 0.15s;
    min-height: 44px;
  }
  .contact-link:hover {
    color: #fff;
    border-color: var(--bg3);
    background: var(--bg2);
    transform: translateY(-1px);
  }
  .ll {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--green);
    font-family: var(--code);
    text-transform: uppercase;
    font-weight: 600;
  }
  .lv {
    color: var(--fg4);
    font-size: 11px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .la {
    color: var(--fg4);
    font-size: 12px;
    transition: transform 0.2s, color 0.2s;
  }
  .contact-link:hover .la {
    color: var(--green);
    transform: translateX(2px) translateY(-2px);
  }

  .cta-block {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    padding: 32px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
  }
  .cta-block::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--green), var(--blue), var(--yellow));
  }
  .cta-label {
    font-size: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--green);
    font-family: var(--code);
    margin-bottom: 14px;
  }
  .avail-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11.5px;
    letter-spacing: 0.5px;
    color: var(--fg2);
    background: rgba(122, 163, 109, 0.08);
    border: 1px solid rgba(122, 163, 109, 0.25);
    padding: 6px 12px;
    margin-bottom: 20px;
  }
  .avail-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    animation: pa 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes pa {
    0%, 100% { box-shadow: 0 0 6px var(--green); opacity: 1; }
    50% { box-shadow: none; opacity: 0.4; }
  }
  .cta-title {
    font-family: var(--display);
    font-size: 19px;
    color: var(--fg3);
    letter-spacing: 1.5px;
    margin-bottom: 16px;
    line-height: 1.3;
  }
  .cta-list {
    list-style: none;
    padding: 0;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cta-list li {
    font-size: 12.5px;
    color: var(--fg2);
    line-height: 1.5;
  }
  .cta-actions {
    display: flex;
    flex-direction: column;
  }
  .send-btn {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    font-size: 11px;
    min-height: 44px;
  }

  @media (max-width: 900px) {
    .contact-wrap {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .contact-links {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    #contact {
      padding: 80px 0 60px;
    }
    .cta-block {
      padding: 20px;
    }
    .direct-row {
      flex-wrap: wrap;
      gap: 8px;
    }
    .copy-btn {
      width: 100%;
      min-height: 44px;
    }
  }
</style>

<script lang="ts">
  import { reveal } from "./actions";
</script>

<section id="contact">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">05</span>
      <h2 class="section-title">contact</h2>
      <div class="section-line"></div>
    </div>
    <div class="contact-wrap">
      <div class="contact-text reveal" use:reveal>
        <h2>Let's build<br /><span>something real.</span></h2>
        <p>
          Open to freelance work, interesting projects, and conversations about
          architecture, Linux, or why polling is inferior to WebSockets.
        </p>
        <div class="contact-links">
          <a class="contact-link" href="https://xxdev.cz" target="_blank">
            <span class="ll">Web</span><span class="lv">xxdev.cz</span
            ><span class="la">→</span>
          </a>
          <a
            class="contact-link"
            href="https://pneubazarzlin.cz"
            target="_blank"
          >
            <span class="ll">Live</span><span class="lv"
              >pneubazarzlin.cz</span
            ><span class="la">→</span>
          </a>
          <a class="contact-link" href="https://smaragd.us" target="_blank">
            <span class="ll">Camp</span><span class="lv">smaragd.us</span
            ><span class="la">→</span>
          </a>
          <a class="contact-link" href="mailto:hello@xxdev.cz">
            <span class="ll">Email</span><span class="lv"
              >hello@xxdev.cz</span
            ><span class="la">→</span>
          </a>
        </div>
      </div>
      <div class="cta-block reveal d2" use:reveal>
        <div class="cta-label">// Status</div>
        <div class="avail-badge">
          <div class="avail-dot"></div>
          Available · Freelance / Part-time
        </div>
        <h3>Open to projects</h3>
        <p>
          Graduating May 2026, FI MUNI in September. Available for interesting
          freelance work now — and open to collaborations during university.
        </p>
        <a href="mailto:hello@xxdev.cz" class="btn btn-g">→ send a message</a>
      </div>
    </div>
  </div>
</section>

<style>
  #contact { padding: 100px 0 80px; }
  .contact-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }
  .contact-text h2 {
    font-family: var(--display);
    font-size: clamp(28px, 4vw, 48px);
    color: var(--fg3);
    letter-spacing: 3px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .contact-text h2 span { color: var(--green); }
  .contact-text p {
    color: var(--fg4);
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: 28px;
  }
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--fg4);
    text-decoration: none;
    font-size: 12px;
    padding: 10px 14px;
    border: 1px solid var(--bg2);
    background: var(--bg1);
    transition: all 0.15s;
  }
  .contact-link:hover {
    color: var(--fg2);
    border-color: var(--bg3);
  }
  .ll {
    font-size: 9px;
    letter-spacing: 2px;
    color: var(--fg4);
    text-transform: uppercase;
    min-width: 60px;
  }
  .lv { color: var(--fg3); flex: 1; }
  .la {
    color: var(--fg4);
    font-size: 10px;
    transition: all 0.2s;
  }
  .contact-link:hover .la {
    color: var(--green);
    transform: translateX(3px);
  }
  .cta-block {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    padding: 36px;
    position: relative;
    overflow: hidden;
  }
  .cta-block::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--green), var(--blue), var(--purple));
  }
  .cta-label {
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 12px;
  }
  .avail-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    letter-spacing: 1.5px;
    color: var(--green);
    margin-bottom: 20px;
  }
  .avail-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    animation: pa 2s ease-in-out infinite;
  }
  @keyframes pa {
    0%, 100% { box-shadow: 0 0 6px var(--green); opacity: 1; }
    50% { box-shadow: none; opacity: 0.4; }
  }
  .cta-block h3 {
    font-family: var(--display);
    font-size: 22px;
    color: var(--fg3);
    letter-spacing: 2px;
    margin-bottom: 12px;
  }
  .cta-block p {
    font-size: 12px;
    color: var(--fg4);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  @media (max-width: 900px) {
    .contact-wrap { grid-template-columns: 1fr; }
  }
</style>

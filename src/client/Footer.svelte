<footer>
  <span>LUKÁŠ NĚMEČEK · XXDEV · ZLÍN, CZ</span>
  <span style="color:var(--bg2)">//</span>
  <span>Built with Svelte, Bun & Elysia <span style="color:var(--green)">❤</span></span>
</footer>

<style>
  footer {
    border-top: 1px solid var(--bg2);
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
    color: var(--bg3);
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 600px) {
    footer {
      flex-direction: column;
      gap: 6px;
      text-align: center;
    }
  }
</style>

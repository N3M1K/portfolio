<script lang="ts">
  import { reveal } from "./actions";

  interface SkillGroup {
    title: string;
    delay: string;
    skills: { name: string; width: string; color: string }[];
  }

  const groups: SkillGroup[] = [
    {
      title: "// Backend & Runtime",
      delay: "",
      skills: [
        { name: "Bun", width: "85%", color: "var(--green)" },
        { name: "Go", width: "55%", color: "var(--cyan)" },
        { name: "PHP", width: "80%", color: "var(--purple)" },
        { name: "ElysiaJS", width: "80%", color: "var(--blue)" },
        { name: "Node.js", width: "65%", color: "var(--green)" },
        { name: "WebSockets", width: "60%", color: "var(--yellow)" },
      ],
    },
    {
      title: "// Frontend & DB",
      delay: "d1",
      skills: [
        { name: "TypeScript", width: "82%", color: "var(--blue)" },
        { name: "HTML / CSS", width: "90%", color: "var(--orange)" },
        { name: "HTMX", width: "75%", color: "var(--red)" },
        { name: "MySQL / SQLite", width: "78%", color: "var(--cyan)" },
        { name: "LibSQL / Turso", width: "65%", color: "var(--green)" },
      ],
    },
    {
      title: "// Tools & Systems",
      delay: "d2",
      skills: [
        { name: "Linux", width: "80%", color: "var(--yellow)" },
        { name: "Git", width: "82%", color: "var(--orange)" },
        { name: "NixOS", width: "35%", color: "var(--blue)" },
        { name: "Performance / LH", width: "75%", color: "var(--green)" },
        { name: "REST / API Design", width: "70%", color: "var(--purple)" },
      ],
    },
  ];
</script>

<section id="skills">
  <div class="container">
    <div class="section-header reveal" use:reveal>
      <span class="section-num">03</span>
      <h2 class="section-title">skills</h2>
      <div class="section-line"></div>
    </div>
    <div class="skills-layout">
      {#each groups as g}
        <div class="skill-group reveal {g.delay}" use:reveal>
          <div class="skill-group-title">{g.title}</div>
          {#each g.skills as sk}
            <div class="skill-item">
              <span class="skill-name">{sk.name}</span>
              <div class="sbt">
                <div
                  class="sbf"
                  style="--sw:{sk.width};--sc:{sk.color}"
                ></div>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #skills { padding: 100px 0; }
  .skills-layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }
  .skill-group {
    background: var(--bg1);
    border: 1px solid var(--bg2);
    padding: 24px;
  }
  .skill-group-title {
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--fg4);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--bg2);
  }
  .skill-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .skill-item:last-child { margin-bottom: 0; }
  .skill-name {
    font-family: var(--code);
    font-size: 12px;
    color: var(--fg);
  }
  .sbt {
    width: 80px;
    height: 3px;
    background: var(--bg3);
    overflow: hidden;
    flex-shrink: 0;
  }
  .sbf {
    height: 100%;
    background: var(--sc, var(--blue));
    transition: width 1s ease;
    width: 0;
  }
  :global(.sbf.on) { width: var(--sw); }

  @media (max-width: 900px) {
    .skills-layout { grid-template-columns: 1fr; }
  }
</style>

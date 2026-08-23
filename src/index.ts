import { Elysia } from "elysia";
import path from "path";

const DIST = path.resolve("dist");
const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .get("/", () => new Response(Bun.file(path.join(DIST, "index.html"))))
  .get("/logo", () => {
    return new Response(Bun.file(path.join(DIST, "logo.svg")), {
      headers: { "Content-Type": "image/svg+xml" },
    });
  })
  .get("/icon", () => {
    return new Response(Bun.file(path.join(DIST, "icon.svg")), {
      headers: { "Content-Type": "image/svg+xml" },
    });
  })
  .get("/assets/*", (ctx) => {
    const filePath = path.join(DIST, ctx.path);
    return new Response(Bun.file(filePath));
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

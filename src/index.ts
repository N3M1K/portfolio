import { Elysia } from "elysia";
import path from "path";

const DIST = path.resolve("dist");

const app = new Elysia()
  .get("/", () => new Response(Bun.file(path.join(DIST, "index.html"))))
  .get("/assets/*", (ctx) => {
    const filePath = path.join(DIST, ctx.path);
    return new Response(Bun.file(filePath));
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

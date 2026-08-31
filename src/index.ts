import { Elysia } from "elysia";
import path from "path";

const DIST = path.resolve("dist");
const PUBLIC = path.resolve("public");
const PORT = process.env.PORT || 3000;

async function getFile(relPath: string) {
  const distFile = Bun.file(path.join(DIST, relPath));
  if (await distFile.exists()) return distFile;
  const pubFile = Bun.file(path.join(PUBLIC, relPath));
  if (await pubFile.exists()) return pubFile;
  return null;
}

const app = new Elysia()
  .get("/", async () => {
    const file = (await getFile("index.html")) ?? Bun.file(path.join(DIST, "index.html"));
    return new Response(file);
  })
  .get("/logo", async () => {
    const file = (await getFile("logo.svg")) ?? Bun.file(path.join(DIST, "logo.svg"));
    return new Response(file, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  })
  .get("/icon", async () => {
    const file = (await getFile("icon.svg")) ?? Bun.file(path.join(DIST, "icon.svg"));
    return new Response(file, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  })
  .get("/xinvoice", async () => {
    const file =
      (await getFile(path.join("xinvoice", "index.html"))) ??
      Bun.file(path.join(DIST, "xinvoice", "index.html"));
    return new Response(file, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  })
  .get("/xinvoice/", async () => {
    const file =
      (await getFile(path.join("xinvoice", "index.html"))) ??
      Bun.file(path.join(DIST, "xinvoice", "index.html"));
    return new Response(file, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  })
  .get("/xinvoice/*", async (ctx) => {
    const subPath = ctx.path.replace(/^\/xinvoice\/?/, "");
    if (!subPath || subPath === "") {
      const file =
        (await getFile(path.join("xinvoice", "index.html"))) ??
        Bun.file(path.join(DIST, "xinvoice", "index.html"));
      return new Response(file, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const file = await getFile(path.join("xinvoice", subPath));
    if (file) {
      return new Response(file);
    }

    const fallback =
      (await getFile(path.join("xinvoice", "index.html"))) ??
      Bun.file(path.join(DIST, "xinvoice", "index.html"));
    return new Response(fallback, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  })
  .get("/assets/*", (ctx) => {
    const filePath = path.join(DIST, ctx.path);
    return new Response(Bun.file(filePath));
  })
  .listen({
    port: Number(PORT),
    hostname: "0.0.0.0",
  });

console.log(
  `🦊 Elysia is running at http://localhost:${PORT}`
);

# N3M1K's Portfolio

My personal developer portfolio built with **Bun, ElysiaJS, and Svelte**.

## Overview
This repository contains my portfolio website, which showcases my projects, skills, and background.

### Tech Stack
- **Backend:** Bun + ElysiaJS
- **Frontend:** Svelte + Vite
- **Deployment:** Managed and deployed via [xploy](https://git.xxdev.cz/n3m1k/xploy), my custom self-hosted deployment automation tool.
- **Git:** Hosted on my self-hosted Forgejo instance.

## Development

To start the development server (backend + frontend serving):
```bash
bun run dev
```
To run the Svelte client development server with hot-reload:
```bash
bun run dev:client
```

## Build

To compile the Svelte client to the `dist` directory:
```bash
bun run build
```
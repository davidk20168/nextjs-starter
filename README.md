
# nextjs-app-router-starter

Starter **Next.js 14 (App Router) + TypeScript + Tailwind CSS** with:
- File-based routing in `app/`
- Example pages (`/` and `/about`)
- Example API route (`/api/hello`)
- Simple Navbar component
- Environment vars example
- ESLint + strict TS config

## Quickstart

```bash
# 1) Extract this folder
cd nextjs-app-router-starter

# 2) Install deps
npm install

# 3) Run dev server
npm run dev
# open http://localhost:3000
```

> If you prefer `pnpm` or `yarn`, feel free to use them.

## What’s inside?

- `app/page.tsx`: Home page (server component) fetching data from `/api/hello`
- `app/about/page.tsx`: About page
- `app/api/hello/route.ts`: API route returning JSON
- `components/Nav.tsx`: Simple navigation bar
- `styles/globals.css`: Tailwind base styles
- `tailwind.config.ts`, `postcss.config.js`: Tailwind setup
- `next.config.ts`, `tsconfig.json`, `.eslintrc.json`: Configs
- `.env.local.example`: Example env file

## Environment variables

Copy `.env.local.example` to `.env.local` and adjust values:

```
cp .env.local.example .env.local
```

## Production build

```bash
npm run build
npm start
```

## Deploy

- **Vercel**: zero‑config (recommended).
- **Docker/VM**: build then run `npm start` behind a reverse proxy (Nginx/Caddy).

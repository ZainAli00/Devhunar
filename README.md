# Devhunar — Agency Landing Site

Production-ready monorepo: React + Vite + TypeScript + Tailwind (client) and Node.js + Express + TypeScript (server).

## Prerequisites

- Node.js 18+
- pnpm 8+ (`npm install -g pnpm`)

## Setup

```bash
# From repo root
pnpm install

# Run both client and server concurrently
pnpm dev
```

- Client: http://localhost:5173
- Server: http://localhost:4000

## Structure

```
devhunar/
  client/   Vite + React + TS + Tailwind
  server/   Express + TS API
```

## API Endpoints

| Method | Path               | Description                  |
|--------|--------------------|------------------------------|
| GET    | /api/projects      | Returns all projects JSON    |
| GET    | /api/testimonials  | Returns all testimonials JSON|
| POST   | /api/contact       | Accepts { name, email, message } |

## Build

```bash
pnpm build
```

---

CEO: Zain Ali
Company: Devhunar

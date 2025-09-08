# EPG Viewer

An interactive Electronic Program Guide (EPG) viewer built with React, designed to handle large data sets efficiently using virtualization and modern state management.

---

## Getting Started

### Install dependencies

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

### Build

```sh
pnpm build
```

### Preview

```sh
pnpm preview
```

---

## Tech Stack

- **React** + **TypeScript** — Core UI framework  
- **Vite** — Fast bundler and dev server  
- **Tailwind CSS** — Utility-first styling  
- **TanStack Virtual** — Grid and list virtualization for performant rendering  
- **TanStack Query** — Data fetching, caching, and background updates  
- **zustand** — Lightweight global state management  
- **Biome** — Linting and code formatting  
- **Vitest** — Unit testing framework  
- **Playwright** — End-to-end testing  

---

## Available Scripts

From the project root, you can run:

- `pnpm dev` — Start the development server with Vite  
- `pnpm build` — Build the project for production  
- `pnpm preview` — Preview the production build  
- `pnpm lint` — Run Biome linter  
- `pnpm format` — Format the code with Biome  
- `pnpm prepare` — Configure Husky for git hooks  
- `pnpm test` — Run unit tests with Vitest  
- `pnpm test:e2e` — Run end-to-end tests with Playwright  
- `pnpm test:e2e:ui` — Run Playwright in UI mode  
- `pnpm test:e2e:headed` — Run Playwright in headed mode  

---

## Features

- Virtualized EPG timeline with TanStack Virtual  
- Vertical and horizontal virtualization for channels and programs  
- Scroll synchronization between header, sidebar, and timeline  
- Efficient data fetching and caching with TanStack Query  
- Global state management with zustand  
- Accessible and responsive UI components  
- Unit and end-to-end test coverage  

---

## Project Structure

```
src/
├─ app/                # Application entry and providers
├─ components/
│  ├─ epg/             # Core EPG components (dialog, grid, sidebar, header)
│  ├─ ui/              # Reusable UI primitives
│  └─ layout/          # Layout wrappers (e.g. MainLayout)
├─ hooks/              # Custom React hooks
├─ data/               # Data access layer (repositories)
├─ adapters/           # API adapters and validation
├─ store/              # Zustand global store
├─ tests/              # Unit, integration, and e2e tests
├─ types/              # TypeScript definitions
└─ main.tsx            # Vite entry point
```

---

## Configuration

- `biome.json` — Biome configuration for linting and formatting  
- `vite.config.ts` — Vite configuration file  

---

## Environment Variables

**VITE_API_EPG_URL is required** and must be set in your `.env` file at the project root:

```
VITE_API_EPG_URL=<your_epg_api_url>
```

Replace `<your_epg_api_url>` with the actual URL of your EPG API endpoint.

Example:
```
VITE_API_EPG_URL=https://api.example.com/epg
```

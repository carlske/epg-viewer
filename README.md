# EPG Viewer

The timeline currently renders the programs in fixed slots (Program components).
The next step was to implement proportional sizing based on unix_begin/unix_end and the pxPerMinute scale, so that each program’s real duration is reflected in its width on the timeline.
The architecture is already prepared to support this extension without major changes.

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

## Why These Technologies?


- **React + TypeScript**: Provides a robust foundation for building a modular, component-based EPG. TypeScript ensures type safety across API responses (e.g., unix_begin / unix_end) and prevents runtime errors when mapping schedules.

- **Vite**: Enables instant startup and fast HMR, which is critical for iterating quickly on UI adjustments and timeline rendering under tight deadlines.

- **Tailwind CSS**: A utility-first CSS framework that accelerates the creation of a responsive grid layout with sticky headers/sidebars, perfectly fitting the “TV guide” look without writing large amounts of custom CSS.

- **TanStack Virtual**: Essential for performance when rendering potentially hundreds of channels and thousands of programs. Virtualization ensures smooth scrolling in the EPG timeline without overloading the DOM.

- **TanStack Query**: Manages API calls, caching, and background refreshes of the EPG data, ensuring the timeline is always up to date while keeping data-fetching logic clean and declarative.

- **Zustand**: Simple and scalable global state management that complements React Query. Used for UI state like scroll position, filters, and “now” marker without adding boilerplate.

- **Biome**: Modern linting/formatting ensures a consistent codebase, especially valuable in a test project where clarity and maintainability are evaluated.

- **Vitest**: Provides unit tests for core logic (e.g., time-to-pixels conversion, adapters), guaranteeing correctness of the most business-critical parts.

- **Playwright**: Validates end-to-end behavior like horizontal/vertical scroll, sticky headers, and modal interactions across browsers, ensuring the EPG behaves as expected for the user.

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

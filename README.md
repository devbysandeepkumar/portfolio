# devbysandeepkumar

Personal portfolio site for **Sandeep Kumar** — Full Stack & AI Engineer. Built with Next.js 16, React 19, Tailwind CSS 4, GSAP, and Lenis.

## Tech Stack

- **Framework:** Next.js 16 (App Router) · React 19
- **Styling:** Tailwind CSS 4
- **Animation:** GSAP · Lenis (smooth scroll)
- **Fonts:** Geist Sans & Geist Mono (via `next/font`)
- **Language:** TypeScript

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, tech marquee, services, featured project, CTA |
| `/projects` | Project listing |
| `/projects/[slug]` | Individual project detail |
| `/about` | Bio, skills, stack groups, education |
| `/contact` | Contact details & social links |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Project Structure

```
app/            # Routes (App Router)
components/     # Shared UI components
data/           # Portfolio content (projects, skills, services)
public/         # Static assets
```

## Features

- Dark/light theme toggle (persisted to `localStorage`, respects `prefers-color-scheme`)
- Smooth scroll via Lenis
- Scroll-reveal animations (GSAP)
- Tech stack marquee
- Fully responsive
- Accessible (skip-to-content, semantic HTML, ARIA labels)

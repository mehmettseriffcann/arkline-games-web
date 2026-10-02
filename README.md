# Arkline Games — Website

Marketing site for Arkline Games, a mobile game studio. Built with Next.js (App Router), Tailwind CSS v4 and TypeScript.

Design references: [Dream Games](https://dreamgames.com), [Peak](https://peak.com), [Circle Games](https://circle.gs), [Gram Games](https://gram.gs).

## Sections

| Section | Component | Reference |
| --- | --- | --- |
| Hero | `app/components/Hero.tsx` | Gram / Peak — one big statement, single CTA |
| About Us | `app/components/About.tsx` | Dream Games — image + short copy |
| Our Games | `app/components/Games.tsx` | Circle — icon, pitch, store badges, phone mockup |
| How We Work | `app/components/Culture.tsx` | Peak — value cards |
| Careers | `app/components/Careers.tsx` | Dream / Gram — brand-coloured CTA |

Brand colours and fonts live in `app/globals.css` (`@theme`) and `app/layout.tsx`.
To publish a game, add its store URLs via `<StoreBadge store="apple" href="..." />` in `Games.tsx`.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

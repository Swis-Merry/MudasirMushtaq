# AGENTS.md

- Stack: Next.js 15 App Router, TypeScript, Tailwind v4 (theme tokens in `src/app/globals.css`), `motion/react`, Zod.
- Verify: `npm run lint && npm run typecheck && npm run build`.
- Content lives in `src/content/*.ts`; every fact/quote must reference a URL in `src/content/sources.ts`. Never invent awards, quotes or social handles.
- Naming: visible copy uses **Mudasir Mushtaq** only. "Mudasir Wani" appears only in `site.alternateName` (JSON-LD) and SEO keywords.
- Keep personal recognition (`personalAwards`) strictly separate from DRE company awards (`companyAwards`, `developerAwards`). Never use Qurat Ul Ain's personal awards.
- Reduced motion is handled globally by `<MotionConfig reducedMotion="user">` in `src/components/Providers.tsx` — do not branch on `useReducedMotion()` during render (causes hydration mismatches).
- Contact form: `src/app/api/contact/route.ts` (Resend REST API, env vars in `.env.example`).
- Windows host: no Python available; git has no global identity configured (commit with `git -c user.name=... -c user.email=...`).
- Screenshots: Chrome headless via a small CDP script (Node 24 has a global `WebSocket`); stop any running `next start` before `next build` (Windows file locks / stale servers on port 3100).

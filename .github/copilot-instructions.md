# Copilot Instructions — Portfolio Website

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (tokens in `src/styles/app.css` via `@theme`)
- React Router DOM, i18next, Framer Motion, lucide-react

## Code Style

### Props

- Define `interface FooProps { ... }` with regular (non-readonly) fields.
- Wrap with `Readonly<>` at the function signature: `function Foo({ ... }: Readonly<FooProps>)`.
- Never mark individual fields as `readonly`.

### Tailwind

- Use Tailwind shorthand classes (`h-140` not `h-[560px]`, `leading-5.5` not `leading-[22px]`).
- Use design tokens from `@theme` (`text-base-dark`, `bg-cyan-100`, `font-heading`, etc.).

### Responsive

- **Mobile-first** approach: base classes = mobile (0–767px), `md:` = tablet (768–1023px), `lg:` = desktop (1024px+).
- Never use `max-md:` or `max-lg:` — always build up from mobile with `md:` and `lg:`.
- Content container: `mx-auto w-full max-w-[1320px] px-4 md:px-8 lg:px-12`.
- Figma has Desktop (1440px wide) and Mobile variants. Tablet is a smooth transition — typically mobile layout with larger spacing or 2-col grids.

### TypeScript

- Avoid `any`. Use proper types or `unknown` with narrowing.
- No unused variables or imports.

### i18n

- All user-visible text in components must use `useTranslation()` with tokens from `public/locales/{en,ua}/translation.json`.
- Never hardcode UI strings — always look up the matching i18n key.
- **Ukrainian translations are authoritative** — they were provided by the client and are final.
- **English translations are auto-translated placeholders** — if Figma source text differs from the EN token value, use the Figma text and update the EN token accordingly.

### Components

- Always prefer existing UI components (`src/components/ui/`) over writing custom markup — check what's available first.
- Only create custom elements when no existing component fits.
- If a new piece of UI appears in more than one place, extract it into a reusable component in `src/components/ui/`.

## Post-Implementation Checks

After implementing or editing each component, run ALL checks and fix every issue:

1. **TypeScript** — `npx tsc --noEmit` → zero errors
2. **ESLint** — check via VS Code diagnostics → zero warnings/errors
3. **SonarQube** — `sonarqube_analyze_file` on the file → zero issues
4. **VS Code diagnostics** — `get_errors` on the file → zero problems

Fix ALL warnings and errors before marking the component as done.

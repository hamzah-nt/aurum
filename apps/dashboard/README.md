# Partner and admin dashboard

One React + Vite + TypeScript web app for rental partners and AURUM administrators, with separate role-based areas. Partners manage only their own company, listings, availability and booking requests. Administrators review partners/listings and oversee operations, with sensitive actions audited.

NestJS must enforce authentication, role and record-level authorization on every protected operation. Hidden routes or controls are not security. Keep secrets out of browser bundles and Git. Use private storage and short-lived signed URLs for non-public files.

## Local run

```bash
# from repository root
cp apps/dashboard/.env.example apps/dashboard/.env.local
npm install
npm run dev:dashboard
```

Vite serves the app locally (default `http://localhost:5173`). Supabase and API auth are not wired yet.

See the [project README](../../README.md) for shared architecture, security requirements, the provisional Stripe Connect decision and roadmap; see [MVP requirements](../../docs/requirements.md) for product scope and [environment standards](../../docs/environment.md).

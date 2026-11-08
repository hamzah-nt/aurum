# API

NestJS + TypeScript API: the trusted application boundary for authentication checks, customer/partner/admin authorization, input validation, booking rules and sensitive service access. Supabase PostgreSQL is the source of truth; enforce least privilege with RLS and tenant isolation as a second layer to backend checks.

Keep Supabase service-role and any payment secrets server-side, managed through environment/secret configuration. Never commit secrets or expose them to the mobile app or dashboard. Rate-limit exposed endpoints, validate all input, audit security-sensitive changes, and use private storage with short-lived signed URLs for non-public files.

Stripe Connect is provisional: no live payment flow until written Stripe UK confirmation and UK payments solicitor review. Delayed settlement after handover remains a proposal subject to both. Do not represent Connect as automatic regulatory compliance or escrow. Never store card details; use provider-hosted/tokenised collection. Verify provider webhooks and handle events idempotently if/when payments are approved.

## Local run

```bash
# from repository root
cp apps/api/.env.example apps/api/.env
npm install
npm run dev:api
```

Health check: `GET http://localhost:3000/health`

See the [project README](../../README.md) for the shared roadmap and security requirements, [environment standards](../../docs/environment.md), and [technical architecture](../../docs/architecture.md) for trust boundaries.

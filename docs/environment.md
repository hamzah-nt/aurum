# Environment and secrets

## Separation

Use distinct configuration for local development, preview and production. When Supabase and hosting are connected (Phase 2+), prefer separate projects/environments rather than sharing credentials across stages.

| Audience | Allowed values | Forbidden |
| --- | --- | --- |
| `apps/api` | Server secrets via `.env` / host secret store | Committing real secrets; exposing them to clients |
| `apps/dashboard` | `VITE_*` public URL, anon key, feature flags | Service-role key, Stripe secret, webhook secrets |
| `apps/mobile` | `EXPO_PUBLIC_*` public URL, anon key, feature flags | Service-role key, Stripe secret, webhook secrets |

## Local setup

1. Copy each app's `.env.example` to the ignored env file named in that app README.
2. Leave Supabase and payment placeholders empty until a real project and approvals exist.
3. Keep `PAYMENTS_ENABLED` / `*_PAYMENTS_ENABLED` false until provider and legal clearance.

## Rules

- Commit only `.env.example` placeholders. Real `.env` / `.env.local` files stay out of Git.
- Treat the mobile app and dashboard as untrusted clients.
- Rotate any credential that appears in a screenshot, chat log or client bundle.
- Do not invent production policies, completed setup or live service status in docs.

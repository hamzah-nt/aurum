# AURUM technical architecture

## Shape

```text
Expo customer app ─┐
                   ├── HTTPS + Supabase access token ── NestJS API ── Supabase PostgreSQL
React/Vite web ────┘                                      ├────────── Supabase Storage
                                                         └────────── payment provider (later)
```

Use a small npm-workspaces monorepo so the three deployable apps and their documentation stay together. Keep app boundaries explicit. Add shared packages only when repeated, stable code justifies them; do not make a generic platform layer up front.

## Responsibilities and trust boundaries

- Supabase Auth owns sign-up, sign-in and session tokens. Mobile and web clients may use the public anon key for Auth and appropriately protected Storage access.
- NestJS is the trusted application boundary: validate Supabase JWTs, enforce customer/partner/admin roles, validate inputs, own booking state transitions, and mediate sensitive data changes.
- PostgreSQL is the source of truth. Model user profiles/roles, partners, vehicles, availability and bookings relationally. Enforce ownership and least privilege with database permissions/RLS as a second layer; do not rely on UI role hiding.
- Keep the Supabase service-role key and any payment secret strictly server-side. Never put them in `EXPO_PUBLIC_*` or `VITE_*` variables.
- Store vehicle images in Supabase Storage with explicit upload/read rules. Use signed URLs where content should not be public.
- Booking conflict checks must be atomic in the database/API path so two requests cannot confirm the same vehicle and dates.
- Payment provider calls and webhooks are deferred. When introduced, verify webhook signatures and make event handling idempotent.

## Initial data concepts

- `profiles`: auth user link and minimal customer profile.
- `memberships` or role fields: customer, partner and admin access; partner association is explicit.
- `partners`: company profile and review status.
- `vehicles`: partner-owned listing and moderation status.
- `vehicle_images`: ordered Storage object references.
- `availability` and `bookings`: date ranges, request status and price snapshot.
- `audit_events`: admin actions and security-sensitive state changes.

Finalize table shapes and RLS policies in Phase 2 against the confirmed booking and business rules.

## Environment configuration

Use separate local, preview and production Supabase projects when deployments begin. Commit only `.env.example` placeholders. Keep secrets out of Git, screenshots and client bundles. The API receives server-only credentials; clients receive only public project URL/anon key and feature configuration.

## Deployment direction

- Expo EAS for mobile builds and distribution.
- A static host for the Vite dashboard.
- A Node host for the NestJS API.
- Supabase managed database/Auth/Storage.

Pick providers and configure production environments only when the MVP flow is stable. Start local development against a dedicated Supabase project or local Supabase setup once Phase 2 begins.

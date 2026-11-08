# AURUM

AURUM is a private-beta marketplace for discovering premium vehicle rentals and submitting booking requests. The MVP is intentionally small: a customer mobile app, one role-based web dashboard, and a trusted API.

## MVP architecture

- **Customer app:** React Native, Expo and TypeScript for iOS and Android.
- **Partner and admin dashboard:** one React + Vite + TypeScript web app, with separate role-based areas.
- **Backend:** NestJS + TypeScript API for authorization, business rules and trusted service access.
- **Data and identity:** Supabase PostgreSQL, Auth and Storage.
- **Source control:** Git and GitHub.
- **Payments:** Stripe Connect is the preferred candidate, subject to the checks below. No live payments until cleared.

See [MVP requirements](docs/requirements.md), [technical architecture](docs/architecture.md), [environment and secrets](docs/environment.md), and [Git workflow](docs/development-workflow.md).

## Security by design

Treat customer, partner, booking and identity-related data as sensitive from the first schema and endpoint. Enforce least privilege with PostgreSQL Row Level Security (RLS) and tenant isolation, plus independent backend authentication, role and object-level authorization. Frontend route or button hiding is never authorization. Require MFA for AURUM administrators.

Use private storage for non-public files and short-lived signed URLs. Minimise collected data and retention; where feasible, use a specialist identity-verification provider and retain only its result/reference. Never store card details in AURUM. Validate inputs, rate-limit exposed endpoints, keep secrets in server-side environment/secret management, and never put secrets in frontend bundles or Git. Record security-sensitive actions in audit logs. Plan backups and recovery, monitoring and alerts, incident handling, dependency review, and security testing before private beta or live sensitive-data use.

These are requirements, not claims that controls are already implemented.

## Payments and regulatory status

Stripe Connect is **provisional**. Before any live integration or money movement, obtain written confirmation from Stripe for the intended UK platform, connected-account and settlement arrangement, and review the actual business model and flow with a UK payments solicitor. Payment processing infrastructure does not decide AURUM's regulatory status. Stripe Connect does not automatically make the model compliant and must not be described as escrow.

Delayed settlement to a rental partner after vehicle handover is a **proposed flow only**; provider and legal confirmation are required, including who receives funds, refunds, disputes, fees and chargeback liability. Keep payment UI/integration disabled or in test mode until confirmed. AURUM must not store card numbers or security codes; use provider-hosted or tokenised payment collection. Prefer specialist identity verification where feasible instead of retaining identity-document copies.

## Phased roadmap

1. **Project foundations (current — Phase 1):** confirm MVP scope and architecture; establish repository, workspace, development workflow and environment/security standards; record open business, legal and payment decisions. Do not claim services or production controls are configured until they are.
2. **Database and authentication:** model core records, roles, Supabase Auth, RLS, tenant isolation and session/access rules.
3. **Design system and app structure:** branding, navigation, reusable components and initial layouts.
4. **Customer mobile app:** accounts, vehicle discovery, filters, details and customer profile.
5. **Partner dashboard:** company profile, fleet listings, pricing/availability and booking requests.
6. **Booking engine:** server-validated requests, availability/conflict handling, booking states and notifications.
7. **Admin dashboard:** partner/listing approval, operational oversight and audited administrative actions.
8. **Payments and handover:** only after written provider and legal clearance; implement the confirmed payment flow, verified/idempotent webhooks, reconciliation and handover workflow.
9. **Testing and deployment:** end-to-end and security testing, recovery/monitoring and controlled private beta readiness.

## Phase 1 objectives

- Keep the MVP scope, roles, trust boundaries and architecture documented and aligned.
- Establish Git/GitHub workflow and the Expo, Vite and NestJS workspace boundaries.
- Define environment separation and secret-handling rules before connecting services.
- Record security requirements and payment/legal questions as open decisions where they remain unresolved.
- Avoid inventing credentials, policies, completed setup or implementation status.

## Repository and setup

```text
apps/
  api/        NestJS API
  dashboard/  Vite partner/admin dashboard
  mobile/     Expo customer app
docs/         requirements, architecture and workflow
```

Prerequisites: Node.js 22 LTS (or supported current LTS), npm, Git and Cursor. Check each app README for its responsibility. Safe `.env.example` placeholders exist for each app; never commit `.env` files or secrets. Supabase, payments and hosting are not connected in Phase 1.

```bash
npm install
npm run dev:api        # NestJS health endpoint on :3000
npm run dev:dashboard  # Vite partner/admin shell
npm run dev:mobile     # Expo customer shell
```

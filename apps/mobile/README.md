# Customer mobile app

React Native + Expo + TypeScript app for customers on iOS and Android. The MVP covers account access, approved vehicle discovery, vehicle details, booking requests and status/history.

Keep customer-facing screens and mobile navigation here. Treat the app as an untrusted client: never embed server or payment secrets, and do not rely on client-side checks for authorization or booking/payment calculations. Collect only data needed for the customer flow; use a specialist identity-verification provider where feasible rather than retaining identity documents.

## Local run

```bash
# from repository root
cp apps/mobile/.env.example apps/mobile/.env
npm install
npm run dev:mobile
```

Use the Expo Go app or an emulator after the Metro bundler starts. Auth, API and payments are not connected in Phase 1.

The shared architecture, security requirements, provisional Stripe Connect position and Phase 1 roadmap are in the [project README](../../README.md). Product scope is in [MVP requirements](../../docs/requirements.md). Environment rules are in [environment standards](../../docs/environment.md).

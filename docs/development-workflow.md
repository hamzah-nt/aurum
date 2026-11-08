# Development workflow

## Git

- `main` stays in a working state.
- Create short branches such as `feat/customer-vehicle-list` or `fix/booking-date-validation`.
- Make small commits with clear verbs (`Add vehicle search screen`).
- Open a GitHub pull request to merge when a feature is ready; review the diff and confirm the app still starts before merging.
- Do not commit `.env` files, credentials, build output or personal data. Keep `.env.example` safe and current.
- Tag meaningful private-beta milestones (for example `v0.1.0-beta.1`).

## Daily loop

1. Pull the latest `main` and create/update a feature branch.
2. Change one user-visible slice at a time, including API and dashboard/mobile work needed for that slice.
3. Run the relevant app locally and manually verify the changed flow.
4. Commit, push and review the branch before merging.

## Collaboration

The technical founder owns code, architecture, releases and technical security. The business founder supplies decisions and real operating rules (partner onboarding, inventory, booking/cancellation terms, driver checks, insurance, payment/legal advice, support). Record unresolved business rules as explicit assumptions; do not encode them as if confirmed. Open product/legal/payment questions stay in [MVP requirements](requirements.md). Secret and environment rules are in [environment standards](environment.md).

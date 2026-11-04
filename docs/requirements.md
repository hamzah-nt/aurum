# AURUM MVP requirements

## Product goal

Let customers discover premium rental vehicles offered by partner rental companies, submit a booking request, and follow its status. Give partners the minimum tools to manage listings and requests. Give AURUM administrators the minimum tools to approve partners/listings and oversee operations.

The target is a private beta before January 2027. A working, manually operated beta is more valuable than a broad feature set. Payment provider and legal decisions are open; no live payment processing is in scope until those decisions are confirmed.

## MVP users and capabilities

### Customer — iOS/Android app

- Create an account, sign in, recover access, and manage basic profile details.
- Browse approved, available vehicles; search/filter by location, dates, price and vehicle attributes.
- View vehicle photos, specifications, partner, rental terms and indicative price.
- Submit a booking request and see its status/history.
- Cancel or contact support according to the agreed booking rules.
- See clear pricing and deposit information before submitting.

### Rental partner — web dashboard

- Sign in to a partner account and maintain company profile details.
- Create/edit vehicle listings, upload photos, set indicative prices and manage availability.
- Review booking requests and accept or decline them.
- See upcoming and past bookings.

### AURUM admin — same web dashboard, admin role

- Review/approve partner accounts and vehicle listings.
- View and manage users, listings and bookings for operational support.
- Suspend or hide accounts/listings when needed, with an audit trail for sensitive actions.

## MVP boundaries

- One customer mobile app for iOS and Android; one responsive web dashboard for partners and admins.
- A single marketplace and currency at launch; exact launch geography, currency, taxes and rental rules remain business decisions.
- Booking requests are authoritative only after the API validates listing status and availability. Prevent overlapping confirmed bookings server-side.
- Payment UI and provider integration remain behind a feature boundary. Use provider test mode only after the provider and payment flow are chosen; never accept or transfer real customer money in this MVP until cleared.
- No separate partner app, microservices, recommendation engine, live fleet integrations, complex dynamic pricing, or multi-country rollout.

## Decisions to confirm with the business owner

1. Launch city/area, currency and whether initial inventory is curated manually.
2. Whether customers request a booking or receive instant confirmation; this plan assumes requests.
3. Required driver/identity checks and who performs them.
4. Cancellation, deposit, mileage, delivery and handover rules.
5. Who is the contracting rental provider, and what customer-facing terms/support route apply.
6. Payment provider, merchant/recipient model, refunds, disputes and payout timing. Keep disabled pending legal and provider confirmation.
7. Personal data retention, privacy notice, support and incident handling.

## MVP acceptance checks

- A customer can find an approved vehicle, inspect its terms, request dates, and track the resulting booking state.
- A partner can manage only its own profile, vehicles, availability and requests.
- An admin can review and moderate partners/listings and view bookings.
- The API rejects unauthorised role access, invalid status changes and conflicting booking dates.
- No secret key is shipped in either client app; payment remains disabled or test-only.

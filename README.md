# AURUM

A lean private-beta marketplace for discovering and requesting premium vehicle rentals. The first target is a usable iOS/Android customer app and one web dashboard with separate partner and admin permissions.

## Stack

- Customer app: React Native, Expo and TypeScript
- Partner/admin dashboard: React, Vite and TypeScript
- API: NestJS and TypeScript
- Data, identity and files: Supabase PostgreSQL, Auth and Storage
- Payments: provider decision pending; test mode only until approved

## Repository layout

```text
apps/
  api/        NestJS API
  dashboard/  Vite partner and admin dashboard
  mobile/     Expo customer app
docs/         requirements, architecture and working agreements
```

See [the requirements](docs/requirements.md), [architecture](docs/architecture.md), and [Git workflow](docs/development-workflow.md).

## Local setup

Prerequisites: Node.js 22 LTS (or a supported current LTS), npm, Git, and Cursor. Environment values will be documented in `.env.example` files before services are connected. Never commit secrets.

The app workspaces are being added in small, verifiable steps. The root npm workspace is in place; dependencies have not yet been installed.

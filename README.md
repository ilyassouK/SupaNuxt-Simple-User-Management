# SupaNuxt: A Simple User Management App

Look at the [Demo](https://supanuxtjs.vercel.app/)


SupaNuxt is a simple user management application built with Nuxt.js, Nuxt UI, Pinia, and Supabase. This application includes an authentication system and allows users to access their accounts via a magic link powered by Supabase.

> [!TIP]
> Feel free to contribute, report issues, or suggest improvements!



## Key Features
- User authentication using Supabase.
- Magic login links sent via email for easy access.
- Global Pinia store for managing application state across components and pages.

## Technologies Used
- Nuxt 3
- Nuxt UI
- Supabase
- Pinia


## Setup
Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Environment Variables
Configure your Supabase environment variables.

.env:
```bash
SUPABASE_URL = ""
SUPABASE_KEY = ""
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

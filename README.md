# Monorepo Cafe

An example monorepo setup using pnpm workspaces demonstrating a full-stack application with shared packages.

See this project deployed at: https://monorepo-cafe-shop.onrender.com

## Project Structure

```
monorepo-cafe/
├── apps/
│   ├── client/    # React + Vite frontend application
│   └── server/    # Express.js backend application
│
└── packages/
    ├── database/  # Shared Prisma database client and types
    └── ui/        # Shared React UI components
```

### How It Works

- **apps/** contains the main applications:

  - `client`: A React application built with Vite that consumes the shared packages
  - `server`: An Express.js server that handles API requests and uses the database package

- **packages/** contains shared code:
  - `database`: Provides a typed Prisma client and database types used by both apps
  - `ui`: Contains reusable React components used by the client app

The applications and packages are connected using pnpm workspace dependencies, allowing for efficient code sharing and type safety across the monorepo.

## Setup

1. Install pnpm globally:

   ```bash
   npm install -g pnpm
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   # Copy example env files
   cp apps/client/.env.example apps/client/.env
   cp apps/server/.env.example apps/server/.env
   cp packages/database/.env.example packages/database/.env
   ```

   Update the `.env` files with your local configuration values.

4. Setup Postgres database:

   Start Postgres on your machine and add a database named `monorepo_cafe` or whatever name you'd like that matches your `packages/database/.env` file `DATABASE_URL` configuration.

5. Run migration & generate Prisma client:

   ```bash
   pnpm db:migrate
   ```

6. Start the development servers:
   ```bash
   pnpm dev
   ```

This will start both the client and server applications concurrently:

- Client: http://localhost:5173
- Server: http://localhost:3000

## Available Scripts

- `pnpm dev` - Start both client and server in development mode
- `pnpm client:build` - Build the client application
- `pnpm server:start` - Start the server in production mode
- `pnpm db:migrate` - Run database migrations
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push database schema changes

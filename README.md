# Monorepo Cafe

An example monorepo setup using pnpm workspaces, demonstrating a modern full-stack application structure with shared packages.

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

3. Generate Prisma client:

   ```bash
   pnpm db:generate
   ```

4. Start the development servers:
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
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push database schema changes

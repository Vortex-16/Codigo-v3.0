# 🚀 CodeBattle Arena v3.0 - Complete Documentation
### The Ultimate Guide to the T3 Stack Architecture

---

## 📖 Table of Contents

1. [Introduction to v3.0 (The T3 Stack)](#introduction-to-v30-the-t3-stack)
2. [Architecture Overview](#architecture-overview)
3. [Project Structure](#project-structure)
4. [Backend: tRPC & Prisma](#backend-trpc--prisma)
5. [Frontend: Next.js & Tailwind](#frontend-nextjs--tailwind)
6. [Authentication (NextAuth.js)](#authentication-nextauthjs)
7. [AI Integration (Gemini)](#ai-integration-gemini)
8. [Database Schema](#database-schema)
9. [Development Workflow](#development-workflow)
10. [Deployment](#deployment)

---

## 🎯 Introduction to v3.0 (The T3 Stack)

CodeBattle Arena v3.0 represents a complete modernization of the platform. We have moved from a traditional Node/Express REST API to the **T3 Stack**, prioritizing type safety, developer experience, and performance.

### 🌟 Key Changes from v2.0
- **Language**: JavaScript → **TypeScript** (Full type safety from DB to UI).
- **Frontend**: HTML/Vanilla JS → **Next.js (React)**.
- **API**: Express REST Endpoints → **tRPC** (Type-safe RPC).
- **Database**: Mongoose (MongoDB) → **Prisma** (SQLite/Postgres).
- **Styling**: CSS Variables → **Tailwind CSS**.

---

## 🏗️ Architecture Overview

In v3.0, the "Client" and "Server" are more tightly integrated within the Next.js framework.

### 🔄 Data Flow (tRPC)
Instead of manual `fetch('/api/...')` calls, we use tRPC hooks.
1. **Define Router**: You write a backend function in `src/server/api/routers`.
2. **Call in Component**: You call it like a regular function: `api.user.getStats.useQuery()`.
3. **Type Safety**: If you change the backend, the frontend gives a red squiggly line if not updated.

---

## 📂 Project Structure

```
v3.0/
├── 📁 prisma/                # Database Source of Truth
│   ├── schema.prisma        # The DB model definition
│   └── seed.ts              # Script to populate initial data
│
├── 📁 src/
│   ├── 📁 server/           # Backend Logic
│   │   ├── 📁 api/          # tRPC API Layer
│   │   │   ├── 📁 routers/  # Domain-specific logic
│   │   │   │   ├── user.ts     # User stats & profile
│   │   │   │   ├── problem.ts  # Problem fetching & submission
│   │   │   │   ├── ai.ts       # Gemini AI integration
│   │   │   │   └── post.ts     # (Example router)
│   │   │   ├── root.ts      # Main Router registry
│   │   │   └── trpc.ts      # Middleware & Context setup
│   │   ├── 📁 auth/         # NextAuth Configuration
│   │   └── db.ts            # Global Prisma Client instance
│   │
│   ├── 📁 pages/            # Frontend Routes (Pages Router)
│   │   ├── index.tsx        # Landing Page
│   │   ├── _app.tsx         # Global App Wrapper (Providers)
│   │   └── api/             # Next.js API Routes (tRPC/Auth entry)
│   │
│   └── env.js               # Environment Variable Validation
```

---

## 🧠 Backend: tRPC & Prisma

### 1. The API Routers (`src/server/api/routers/`)
These replace the old Controller classes.
- **`user.ts`**: Handles fetching user profiles, stats, and leaderboards.
- **`problem.ts`**: Fetches problems with breakdown by difficulty/category.
- **`ai.ts`**: Proxies requests to Google Gemini.

### 2. Database Access (Prisma)
We don't write SQL or Mongoose queries. We use the Prisma Client:
```typescript
// Old (Mongoose)
// await User.findOne({ _id: id });

// New (Prisma)
await ctx.db.user.findUnique({
  where: { id: ctx.session.user.id }
});
```

---

## 🎨 Frontend: Next.js & Tailwind

### Pages & Routing
We use Next.js file-system routing.
- `src/pages/index.tsx` → `/`
- `src/pages/problem/[id].tsx` → `/problem/hello-world` (Dynamic Route)

### Styling (Tailwind)
No more 1000-line CSS files. We use utility classes:
```tsx
// Old
<div class="dashboard-card">...</div>

// New
<div class="rounded-xl bg-white/10 p-4 hover:bg-white/20">...</div>
```

---

## 🔐 Authentication (NextAuth.js)

We use **NextAuth.js v5** (beta) integrated with Prisma.
- **Adapters**: Automatically saves users to the `User` table in Prisma.
- **Providers**: Configured for Discord (easily extensible to GitHub, Google).
- **Session**: `ctx.session.user` is available in all tRPC procedures.

---

## 🤖 AI Integration (Gemini)

The `aiRouter` (`src/server/api/routers/ai.ts`) handles communication with Google Gemini.
- **Input**: User code, language, problem text.
- **Process**: Sends a prompt to Gemini Pro model.
- **Output**: JSON containing feedback, hints, or corrected code.
- **Safety**: API Key is kept server-side (in `.env`), never exposed to the client.

---

## 🗃️ Database Schema

Our `schema.prisma` mapping mirrors the v2.0 logic but strictly typed:

- **User**: The central identity.
- **Problem**: Coding challenges (JSON fields for tags/examples).
- **Submission**: Records of code execution.
- **UserProblemSolved**: Tracks completion status (preventing double points).
- **ArenaMatch**: (Coming Soon) Real-time session data.

---

## 🛠️ Development Workflow

1. **Modify Schema**: Edit `prisma/schema.prisma`.
2. **Push Changes**: `bun db:push` (Updates dynamic SQLite db).
3. **Update Router**: Add a function in `src/server/api/routers/`.
4. **Build Frontend**: Use the new query in your React component.

---

## 📦 Deployment

The app is deployed as a standard Next.js application.
- **Build**: `bun run build`
- **Start**: `bun start`
- **Env**: Ensure `DATABASE_URL`, `AUTH_SECRET`, and `GEMINI_API_KEY` are set.

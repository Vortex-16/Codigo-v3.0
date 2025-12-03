# CodeBattle Arena v3.0 - T3 Stack Migration Setup

## ✅ Configuration Complete

Your T3 Stack is now configured with:

- ✅ **TypeScript** - Type-safe development
- ✅ **Next.js 15** with App Router - Modern React framework
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **tRPC** - End-to-end type-safe APIs
- ✅ **Prisma** - Type-safe ORM with MongoDB
- ✅ **MongoDB** - Database (matches v2.0)
- ✅ **NextAuth.js** - Authentication (will migrate to Clerk later)
- ✅ **Socket.IO** - Real-time WebSocket for arena battles
- ✅ **Google Gemini AI** - AI code assistance
- ✅ **Bun** - Fast package manager and runtime
- ✅ **ESLint + Prettier** - Code quality

---

## 📋 Database Schema

The Prisma schema includes:

### Core Models
- **User** - Extended with arena stats, problem-solving stats
- **Account** - NextAuth account management
- **Session** - User sessions
- **VerificationToken** - Email verification

### CodeBattle Specific Models
- **Problem** - Coding challenges with test cases
- **SolvedProblem** - User solutions tracking
- **ArenaMatch** - 1v1 battle records
- **ArenaQueue** - Matchmaking queue

---

## 🚀 Getting Started

### 1. Setup Environment Variables

Copy `.env.example` to `.env.local` (already done) and fill in:

```bash
# Required:
AUTH_SECRET="your-auth-secret"  # Run: npx auth secret
DATABASE_URL="mongodb://localhost:27017/codebattle-arena"
GEMINI_API_KEY="your-gemini-api-key"

# Optional (if using Discord OAuth):
AUTH_DISCORD_ID="your-discord-client-id"
AUTH_DISCORD_SECRET="your-discord-client-secret"
```

### 2. Start MongoDB

Make sure MongoDB is running locally:
```bash
# Windows (if MongoDB installed as service):
net start MongoDB

# Or use MongoDB Atlas cloud database
```

### 3. Initialize Database

```bash
# Push schema to MongoDB
bun run db:push

# Or create migrations
bun run db:generate
```

### 4. Run Development Server

```bash
bun run dev
```

Visit: http://localhost:3000

---

## 📁 Project Structure

```
v3.0/
├── prisma/
│   └── schema.prisma          # Database models (MongoDB)
├── src/
│   ├── app/                   # Next.js App Router pages
│   ├── server/
│   │   ├── api/               # tRPC routers
│   │   └── db.ts              # Prisma client
│   ├── trpc/                  # tRPC client setup
│   └── env.js                 # Environment validation
├── public/                    # Static assets
└── .env.local                 # Environment variables (gitignored)
```

---

## 🔧 Next Steps

### Immediate Tasks:
1. [ ] Configure MongoDB connection string in `.env.local`
2. [ ] Generate AUTH_SECRET: `npx auth secret`
3. [ ] Get Gemini API key from Google AI Studio
4. [ ] Run `bun run db:push` to sync database

### Development Tasks:
1. [ ] Create tRPC routers for:
   - Problems (CRUD operations)
   - Arena (matchmaking, battles)
   - User stats (leaderboards, progress)
   - AI assistance (code analysis)
2. [ ] Build UI components with Tailwind
3. [ ] Implement Socket.IO for real-time arena
4. [ ] Integrate ACE Editor or Monaco for code editing
5. [ ] Set up authentication providers
6. [ ] Migrate data from v2.0 MongoDB

### Migration from v2.0:
- User data compatible (just need to map fields)
- Problem data needs JSON conversion for test cases
- Arena matches can be migrated directly
- Authentication will need user migration script

---

## 📚 Useful Commands

```bash
# Development
bun run dev              # Start dev server (with Turbo)
bun run build            # Build for production
bun run start            # Start production server

# Database
bun run db:push          # Push schema changes to DB
bun run db:generate      # Create migration files
bun run db:studio        # Open Prisma Studio (GUI)

# Code Quality
bun run lint             # Run ESLint
bun run lint:fix         # Fix ESLint issues
bun run format:check     # Check Prettier formatting
bun run format:write     # Format with Prettier
bun run typecheck        # TypeScript type checking
bun run check            # Run lint + typecheck
```

---

## 🔗 Resources

- [T3 Stack Docs](https://create.t3.gg/)
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Prisma MongoDB Guide](https://www.prisma.io/docs/concepts/database-connectors/mongodb)
- [tRPC Documentation](https://trpc.io/)
- [Socket.IO Docs](https://socket.io/docs/v4/)
- [NextAuth.js Guide](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 🎯 Migration Plan (v2.0 → v3.0)

### Phase 1: Backend Setup ✅
- [x] Configure Prisma with MongoDB
- [x] Install Socket.IO & Gemini AI
- [x] Setup environment variables
- [ ] Create tRPC routers

### Phase 2: Authentication
- [ ] Configure NextAuth providers
- [ ] Create user migration script from v2.0
- [ ] Test authentication flow

### Phase 3: Core Features
- [ ] Problem management system
- [ ] Code execution integration (Piston API)
- [ ] AI assistance service
- [ ] User stats & leaderboards

### Phase 4: Arena System
- [ ] Socket.IO real-time setup
- [ ] Matchmaking queue system
- [ ] Live battle functionality
- [ ] Scoring & results

### Phase 5: UI/UX
- [ ] Landing page
- [ ] Dashboard
- [ ] Code editor interface
- [ ] Arena battle UI
- [ ] Leaderboards

### Phase 6: Testing & Launch
- [ ] Data migration from v2.0
- [ ] Performance testing
- [ ] Production deployment

---

**Status:** ✅ Initial setup complete. Ready for development!

# 🔐 Security Policy

## 📅 Supported Versions

We actively maintain and patch the following versions:

| Version         | Supported          |
|----------------|--------------------|
| `main` branch  | ✅ Yes (active dev) |
| Older releases | ❌ No               |

---

## 🛡️ Reporting a Vulnerability

If you find a **security vulnerability** in CodeBattle Arena (e.g., XSS, Data Exposure, Authentication Flaws):

- **DO NOT** open a public GitHub issue.
- **INSTEAD**, please report it **privately** via:

📧 Email: `alpha4codersy@gmmail.com`  
🛠️ GitHub Security Advisories (preferred): [Report here](https://github.com/vikashgupta16/CodeBattle-Arena/security/advisories)

We will respond within **48 hours** and work to release a patch ASAP.

---

## 🔐 Security Practices Followed

CodeBattle Arena v3.0 is built on the **T3 Stack** with security-by-default principles:

- **Type-Safe APIs**: **tRPC** ensures inputs are validated at runtime/compile-time with **Zod Schemas**.
- **Database Safety**: **Prisma ORM** prevents SQL injection by defaulting to parameterized queries.
- **Authentication**: **NextAuth.js** handles secure sessions (JWT/Database) and OAuth providers.
- **Input Validation**: All API inputs are rigorously validated using **Zod**.
- **Environment Security**: Secrets are managed via `src/env.js` which enforces schema validation on build.
- **Sandboxed Execution**: Code runner (Piston) executes user code in isolated containers.

---

## 🧠 Responsible Disclosure

If you responsibly disclose a vulnerability, you will:

- Be credited in our **Hall of Fame** 👑
- Optionally receive early access to new features ⚔️

---

## 🛠️ Security Tools & Dependencies

We regularly monitor our stack using:

- `bun audit` / `npm audit`
- `Dependabot`
- Automated Type Checking (`tsc`) and Linting (`ESLint`)

---

## 🧪 Future Enhancements (Planned)

- [ ] Rate limiting middleware for tRPC procedures
- [ ] Content Security Policy (CSP) headers
- [ ] 2FA support via NextAuth extensions

# 🏆 Leaderboard Platform

A full-stack leaderboard platform for competitive games, built with a **PNPM monorepo** that includes:

- 📱 React Native mobile app (Expo SDK)
- 🖥️ Next.js-based Admin Dashboard
- 🧠 Node.js + Express Backend (connected to MongoDB)

---

## 🧱 Monorepo Structure

```
.
├── apps
│   ├── admin-dashboard    # Admin panel (Next.js + Tailwind CSS)
│   ├── mobile             # Mobile app (Expo + React Native)
│   └── backend-server     # Node.js server
├── packages
│   ├── ui                 # Shared UI components
│   ├── types              # Shared TypeScript types
│   └── config             # Shared config/env
├── .npmrc
├── package.json
└── pnpm-workspace.yaml
```

---

## 🔧 Tech Stack

| Layer    | Tech                                         |
| -------- | -------------------------------------------- |
| Frontend | React Native (Expo), Next.js                 |
| Backend  | Node.js, Express                             |
| Database | MongoDB                                      |
| Styling  | Tailwind CSS (admin), custom styles (mobile) |
| Monorepo | PNPM workspace                               |
| Tooling  | ESLint, Prettier                             |

---

## 🚀 Getting Started

### 1. Clone & Setup

```bash
git clone https://github.com/your-username/leaderboard-platform.git
cd leaderboard-platform
pnpm install
```

### 2. Environment Setup

Create environment files in:

```
apps/admin-dashboard/.env
apps/mobile-app/.env
apps/backend-server/.env
```

Example `.env` for backend:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/leaderboard
```

### 3. Start Development Servers

#### Backend:

```bash
pnpm --filter backend-server dev
```

#### Admin Dashboard:

```bash
pnpm --filter admin-dashboard dev
```

#### Mobile App:

```bash
pnpm --filter mobile-app start
```

---

## 📲 Mobile App

- Built using **Expo SDK**
- Features:
  - Leaderboard with rank change arrows
  - User detail modal with stats, badges, and actions
  - Full Inter font support
  - Dark theme with polished UI

---

## 🧑‍💼 Admin Dashboard

- Built with **Next.js + Tailwind CSS**
- Features:
  - View, add, edit, delete users
  - Sidebar with detailed user profiles
  - Badge management and leaderboard updates

---

## 🧠 Backend API

- Node.js with ExpressJS
- Schema includes:
  - Users
  - Points
  - Rank
  - Badges

---

## 📦 Scripts

Common scripts from root:

```bash
pnpm dev          # Start all dev servers
pnpm lint         # Run ESLint across all packages
pnpm build        # Build all apps
pnpm format       # Prettier formatting
```

---

## 🏗️ Build & Deploy

### Admin:

```bash
pnpm --filter admin-dashboard build
# Deploy to Vercel or Netlify
```

### Mobile:

```bash
pnpm --filter mobile-app run build
# Use EAS to build iOS/Android
```

### Backend:

```bash
pnpm --filter backend-server build
# Deploy to Render, Railway, or VPS
```

---

## 📁 Shared Packages

| Package  | Description                                 |
| -------- | ------------------------------------------- |
| `ui`     | Reusable components for admin/mobile        |
| `types`  | Shared TypeScript types (User, Badge, etc.) |
| `config` | Centralized config and constants            |

---

## 🛠️ Future Improvements

- CI/CD integration with GitHub Actions
- Push notifications for attacks (FCM)
- Real-time leaderboard updates
- Role-based admin access

---

## 📸 Screenshots

_(Add mobile and admin screenshots here for better visual reference)_

---

## 📄 License

MIT License © 2025 Ankush Rishi

---

## 🤝 Acknowledgements

Thanks to all open-source libraries and tools that power this project.

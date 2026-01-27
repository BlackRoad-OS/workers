# 🛣️ BlackRoad OS Workers

> Edge computing infrastructure for the BlackRoad ecosystem - Cloudflare Workers powering the next generation of sovereign computing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange)](https://workers.cloudflare.com/)

## 🌟 Overview

This repository contains the Cloudflare Workers infrastructure for the BlackRoad OS ecosystem. These edge functions power critical services across 315+ repositories spanning 15 organizations in the BlackRoad empire.

### What are BlackRoad Workers?

BlackRoad Workers are serverless edge functions deployed globally on Cloudflare's network, providing:

- ⚡ **Ultra-low latency** - Execute code closer to users
- 🌍 **Global reach** - Deployed across 275+ cities worldwide
- 🔒 **Secure** - Isolated execution environments
- 🚀 **Scalable** - Auto-scaling from zero to millions
- 💰 **Cost-effective** - Pay only for what you use

## 🏗️ Architecture

### BlackRoad Ecosystem Integration

This repository connects to:

| Organization | Repos | Purpose |
|--------------|-------|---------|
| [BlackRoad-OS](https://github.com/BlackRoad-OS) | 100+ | Core infrastructure |
| [BlackRoad-AI](https://github.com/BlackRoad-AI) | 52 | AI models & tools |
| [BlackRoad-Cloud](https://github.com/BlackRoad-Cloud) | 20 | Cloud infrastructure |
| [BlackRoad-Security](https://github.com/BlackRoad-Security) | 17 | Security tools |
| [Blackbox-Enterprises](https://github.com/Blackbox-Enterprises) | 9 | Stealth R&D |

**[📊 View Full Ecosystem Map](https://github.com/BlackRoad-OS/index)**

### Key Infrastructure Resources

- **Cloudflare Account**: `848cf0b18d51e0170e0d1537aec3505a`
- **Continuity Database**: `f0721506-cb52-41ee-b587-38f7b42b97d9`
- **82 Workers** deployed across the ecosystem
- **11 D1 Databases** for edge data storage
- **20 KV Namespaces** for key-value caching
- **9 R2 Buckets** for object storage

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm
- Cloudflare account (Account ID: `848cf0b18d51e0170e0d1537aec3505a`)
- Wrangler CLI installed

### Installation

```bash
# Clone the repository
git clone https://github.com/BlackRoad-OS/workers.git
cd workers

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your API keys

# Start local development server
npm run dev
```

### Deploy to Cloudflare

```bash
# Deploy to development
npm run deploy

# Deploy to production
npm run deploy -- --env production

# Deploy to staging
npm run deploy -- --env staging
```

## 📁 Project Structure

```
workers/
├── src/
│   ├── index.ts              # Main worker entry point
│   ├── handlers/             # Request handlers
│   ├── lib/                  # Shared libraries
│   ├── middleware/           # Middleware functions
│   └── types/                # TypeScript types
├── .github/
│   └── workflows/            # CI/CD workflows
├── wrangler.toml             # Cloudflare Workers configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🔗 Integration with BlackRoad Services

### Core Services

| Service | Worker | Description |
|---------|--------|-------------|
| **API Gateway** | `blackroad-api` | Main API routing and gateway |
| **Continuity** | `blackroad-continuity-api` | Cross-session state management |
| **Lucidia** | `lucidia-core` | AI platform engine |
| **Auth** | `blackroad-auth` | Authentication & identity |
| **Payments** | `blackroad-payment-gateway` | Stripe integration |

### Related Repositories

- [blackroad-os-web](https://github.com/BlackRoad-OS/blackroad-os-web) - FastAPI web services
- [blackroad-os-docs](https://github.com/BlackRoad-OS/blackroad-os-docs) - Documentation hub
- [blackroad.io](https://github.com/BlackRoad-OS/blackroad.io) - Main website
- [index](https://github.com/BlackRoad-OS/index) - Master ecosystem index

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start local development server
npm run deploy       # Deploy to Cloudflare
npm run test         # Run tests
npm run lint         # Lint code
npm run format       # Format code with Prettier
npm run typecheck    # Type check with TypeScript
```

### Environment Variables

See `.env.example` for required environment variables:

- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID
- `CLOUDFLARE_API_TOKEN` - API token for deployments
- `CONTINUITY_DB_ID` - D1 database ID for state management
- `GITHUB_TOKEN` - GitHub access token
- `STRIPE_API_KEY` - Stripe integration

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in CI mode
npm run test:ci

# Run tests with coverage
npm test -- --coverage
```

## 📚 Documentation

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [BlackRoad OS Documentation](https://github.com/BlackRoad-OS/blackroad-os-docs)
- [API Documentation](https://api.blackroad.io/docs)
- [CLAUDE.md](https://github.com/BlackRoad-OS/index/blob/main/CLAUDE.md) - AI assistant instructions

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally with `npm run dev`
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🔒 Security

For security concerns, please review our [Security Policy](./SECURITY.md) or contact security@blackroad.io.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🖤 BlackRoad Ecosystem

Part of the BlackRoad empire:

- 🌐 **15 Organizations** across GitHub
- 📦 **315+ Repositories** 
- ☁️ **82 Cloudflare Workers**
- 🗄️ **11 D1 Databases**
- 🔑 **20 KV Namespaces**
- 📦 **9 R2 Buckets**
- 🌍 **21 Domains**

**[🛣️ Explore the Full Map →](https://github.com/BlackRoad-OS/index)**

---

<p align="center">
  <strong>Built with 🖤 by BlackRoad OS, Inc.</strong><br>
  <em>Digital sovereignty and post-permission infrastructure</em>
</p>

<p align="center">
  <a href="https://blackroad.io">Website</a> •
  <a href="https://github.com/BlackRoad-OS">GitHub</a> •
  <a href="https://twitter.com/BlackRoadOS">Twitter</a> •
  <a href="https://discord.gg/blackroad">Discord</a>
</p>
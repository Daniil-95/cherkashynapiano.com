# Cherkashynapiano.com

Classical pianist Irina Cherkashyna portfolio website.

Built with: **Next.js 14** + **TypeScript** + **Strapi CMS** + **PostgreSQL** + **Prisma ORM**

## 📁 Project Structure

```
packages/
├── web/         # Next.js frontend (port 3000)
└── cms/         # Strapi CMS (port 1337)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22+ / npm 10+
- PostgreSQL 14+

### Installation

```bash
npm install
```

### Database Setup

Create PostgreSQL database:
```bash
createdb cherkashynapiano_dev
```

### Environment Variables

Create `.env` in root:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/cherkashynapiano_dev"
STRAPI_API_URL="http://localhost:1337"
NEXT_PUBLIC_STRAPI_API_URL="http://localhost:1337"
```

### Development

Start both services:
```bash
npm run dev
```

Or separately:
```bash
# Terminal 1 - Strapi CMS
cd packages/cms
npm run develop

# Terminal 2 - Next.js Frontend
cd packages/web
npm run dev
```

### URLs
- Frontend: http://localhost:3000
- Strapi Admin: http://localhost:1337/admin

### Build & Deploy

```bash
npm run build
npm start
```

## 📄 License

MIT

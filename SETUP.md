# 🎹 Cherkashynapiano.com - Setup Complete!

## ✅ Что было сделано (Фаза 1-3)

### Структура проекта
```
cherkashynapiano.com/
├── packages/
│   ├── web/                 # Next.js 14 + TypeScript
│   │   ├── app/
│   │   │   ├── page.tsx        (Главная)
│   │   │   ├── biography/
│   │   │   ├── repertoire/
│   │   │   ├── concerts/
│   │   │   ├── gallery/
│   │   │   ├── media/
│   │   │   ├── contact/
│   │   │   └── layout.tsx      (Header + Footer)
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── lib/
│   │   │   ├── strapi.ts       (API клиент)
│   │   │   └── types.ts        (TypeScript типы)
│   │   ├── prisma/
│   │   │   └── schema.prisma   (БД модели)
│   │   └── styles/
│   │       └── globals.css     (Дизайн)
│   │
│   └── cms/                 # Strapi 5
│       ├── config/
│       │   ├── server.js       (Server config)
│       │   ├── database.js     (PostgreSQL)
│       │   ├── admin.js        (Admin config)
│       │   └── plugins.js      (Email & др.)
│       └── src/
│
├── .env                     (Переменные окружения)
├── .gitignore
├── package.json             (Workspaces)
└── README.md
```

### 🚀 Установленные пакеты
- ✅ Turbo (монорепозиторий)
- ✅ Next.js 14 + React 18 + TypeScript
- ✅ Strapi 5 + PostgreSQL
- ✅ Prisma ORM + @prisma/client
- ✅ Axios (API клиент)
- ✅ Tailwind CSS

---

## 📋 Дальнейшие шаги

### 1. Инициализация Strapi (⚠️ ВАЖНО)

```bash
cd packages/cms
npm run develop
```

**Это запустит Strapi на http://localhost:1337**
- На первом запуске Strapi создаст админа (следуйте инструкциям)
- Перейдите в админку и создайте Content Types (см. ниже)

### 2. Создание Content Types в Strapi админке

В админке создайте эти коллекции через UI:

**Biography** (Одна запись)
- `title` (String)
- `description` (Rich Text)
- `profileImage` (Media)

**Repertoire** (Много записей)
- `title` (String) - название произведения
- `composer` (String) - композитор
- `year` (Number)
- `duration` (Number)
- `description` (Rich Text)

**Concert** (Много записей)
- `title` (String)
- `description` (Rich Text)
- `date` (DateTime)
- `location` (String)
- `venue` (String)
- `time` (String)
- `isUpcoming` (Boolean) - default: true

**Photo** (Много записей)
- `title` (String)
- `description` (Rich Text)
- `imageUrl` (String) - URL к изображению
- `category` (String)
- `order` (Number) - для сортировки

**Video** (Много записей)
- `title` (String)
- `description` (Rich Text)
- `youtubeId` (String) - YouTube ID
- `category` (String)
- `order` (Number)

**ContactMessage** (Автоматическая коллекция)
- `name` (String)
- `email` (String)
- `message` (Rich Text)

### 3. Настройка прав доступа в Strapi

1. Settings → Users & Permissions → Roles
2. Public роль: разрешить READ для всех коллекций
3. Authenticated роль: разрешить CREATE для ContactMessage

### 4. Запуск Next.js фронтенда

```bash
# Terminal 2
cd packages/web
npm run dev
```

**Next.js запустится на http://localhost:3000**

### 5. Построение и деплой

```bash
# Из корня
npm run build
npm start
```

---

## 🔗 API Endpoints (Strapi → Next.js)

Все запросы через `/api/` (например: `http://localhost:1337/api/biography`)

- `GET /biography` - получить биографию
- `GET /repertoires` - получить весь репертуар
- `GET /concerts?filters[isUpcoming][$eq]=true` - предстоящие концерты
- `GET /photos` - галерея фото
- `GET /videos` - видео
- `POST /contact-messages` - отправить сообщение контакта

---

## 🌐 Переменные окружения

```env
# .env (скопирована из примера)
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=cherkashynapiano_dev
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=

STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

⚠️ **Перед первым запуском Strapi:**
1. Создайте БД PostgreSQL (если еще не создана)
2. Обновите `.env` с правильными credentials

---

## 💡 Полезные команды

```bash
# Установить зависимости для всех пакетов
npm install

# Запустить оба сервиса одновременно (из корня)
npm run dev

# Strapi отдельно
cd packages/cms && npm run develop

# Next.js отдельно
cd packages/web && npm run dev

# Собрать всё
npm run build

# Миграции Prisma (если нужны)
cd packages/web && npm run prisma:push
```

---

## 📚 Что дальше?

- [ ] **Фаза 4**: Настройка email формы (SendGrid или другой провайдер)
- [ ] **Фаза 5**: Стилизация и адаптивность
- [ ] **Фаза 6**: Docker + деплой на сервер

---

## 🎯 Архитектура

```
┌─────────────────────────────────────────┐
│ Next.js Frontend (port 3000)            │
│ - Страницы (Biography, Repertoire...)  │
│ - Server Components                    │
│ - API Client (axios)                   │
└────────────────┬────────────────────────┘
                 │ HTTP/REST
                 ↓
┌─────────────────────────────────────────┐
│ Strapi CMS (port 1337)                  │
│ - Content Management                   │
│ - REST API                             │
│ - Admin Panel                          │
└────────────────┬────────────────────────┘
                 │ Database Queries
                 ↓
┌─────────────────────────────────────────┐
│ PostgreSQL Database                     │
│ - Tables: biography, repertoires,      │
│   concerts, photos, videos, ...        │
└─────────────────────────────────────────┘
```

---

**Готово! 🚀 Система готова к разработке. Начните со второго шага (инициализация Strapi).**

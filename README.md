# cherkashynapiano.com

Oficiální webová prezentace klavíristky Iriny Cherkashyny vytvořená pomocí moderního technologického stacku.

Projekt slouží jako profesionální webová prezentace obsahující biografii, repertoár, koncerty, fotografie, videa a kontaktní informace spravované prostřednictvím CMS systému.

## Technologie

- Next.js 15
- TypeScript
- SCSS
- Strapi CMS
- PostgreSQL
- Prisma ORM

## Klíčové funkce

- Responzivní design pro desktop, tablet i mobil
- Správa obsahu přes Strapi CMS
- Dynamické načítání dat z API
- Sekce Biografie
- Sekce Repertoár
- Přehled koncertů a vystoupení
- Fotogalerie s carousel funkcionalitou
- Videogalerie
- Kontaktní formulář
- SEO optimalizace

## Struktura projektu

```text
packages/
├── web/      # Frontend aplikace (Next.js)
└── cms/      # Administrace obsahu (Strapi CMS)
```

## Lokální spuštění

### Instalace závislostí

```bash
npm install
```

### Spuštění vývojového prostředí

```bash
npm run dev
```

### Build produkční verze

```bash
npm run build
```

### Spuštění produkční verze

```bash
npm run start
```

## Použité technologie

| Technologie | Účel |
|------------|------|
| Next.js | Frontend aplikace |
| TypeScript | Typová kontrola |
| SCSS | Stylování aplikace |
| Strapi | Správa obsahu |
| PostgreSQL | Databáze |
| Prisma | Databázová vrstva |

## Live Demo

https://cherkashynapiano-com-web.vercel.app/

## Autor

**Daniil Andrushko**

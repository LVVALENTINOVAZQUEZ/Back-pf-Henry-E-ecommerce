<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Back-pf-Henry (API)

Backend del proyecto E-commerce de renta de autos. Guía para instalar,
configurar y ejecutar localmente.

## Tecnologías principales

-   Node.js + TypeScript (NestJS)
-   Prisma ORM
-   Handlebars para emails
-   Estructura en `src/`

## Requisitos previos

1.  Node.js v18+
2.  npm
3.  Base de datos compatible con Prisma (ej.: PostgreSQL)
4.  Git

## Instalación

``` bash
git clone -b develop https://github.com/LVVALENTINOVAZQUEZ/Back-pf-Henry-E-ecommerce.git
cd Back-pf-Henry-E-ecommerce
npm install
```

## Variables de entorno

Crea `.env` en la raíz:

``` env
PORT=3000
JWT_SECRET=tu_secreto_jwt
JWT_EXPIRES_IN=7d
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
MAIL_USER=tu@correo.com
MAIL_PASS=tu_password
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
```

## Prisma

``` bash
npx prisma generate
npx prisma migrate dev --name init
```

## Scripts

``` bash
npm run start:dev
npm run start
npm run build
npm run start:prod
npm run test
npm run test:e2e
npm run test:cov
```

## Flujo recomendado

1.  Configurar `.env`
2.  `npm install`
3.  `npx prisma generate`
4.  `npx prisma migrate dev --name init`
5.  `npm run start:dev`

## Notas

-   Para Gmail se requiere contraseña de aplicación.
-   Si falla TypeScript: borrar `node_modules`.

## Estructura relevante

-   API: `src/`
-   Prisma y migraciones: `prisma/`


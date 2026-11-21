# MITIS Frontend

Aplicación React 18 + Vite del proyecto MITIS.

## Instalación

```bash
npm install
cp .env.example .env
npm run dev
```

## Variables

- `VITE_API_URL`: base `/api/v1`; predeterminado `http://localhost:4000/api/v1`.
- `VITE_ENABLE_DEMO`: datos de muestra explícitos; mantener `false`.

## Scripts

- `npm run dev`: servidor en `http://localhost:5173`.
- `npm run build`: compilación de producción.
- `npm run lint`: revisión ESLint.
- `npm test`: Vitest una sola vez.
- `npm run test:watch`: Vitest interactivo.

## Roles

Administrador, colaborador, cliente y auditor. El RBAC visual oculta acciones, pero el backend siempre valida el acceso real.

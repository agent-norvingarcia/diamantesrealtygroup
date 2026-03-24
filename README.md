# Norvin García Realty App

Aplicación web inmobiliaria premium construida con React + Vite + Tailwind + Firebase.

## Setup

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Copia `.env.example` a `.env` y coloca credenciales de Firebase.
3. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```
4. Build producción:
   ```bash
   npm run build
   ```

## Firebase esperado

- Firestore:
  - `propiedades`
  - `perfil` (documento `norvin`)
- Storage:
  - `propiedades/`
- Auth:
  - Email/password

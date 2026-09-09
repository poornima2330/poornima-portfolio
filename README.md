# Poornima K — 3D Engineering Portfolio

A deploy-ready Vite + React + TypeScript portfolio using React Three Fiber, Three.js and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel
1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify
1. Connect the GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Included resume files

- `/public/Poornima_K_Resume_Backend.pdf`
- `/public/Poornima_K_Resume_FullStack.pdf`

The top navigation links to the backend-focused version by default. Update `src/App.tsx` if you want the full-stack version to be the primary download.

## Main content sources

The site content was written from the two resumes provided in the conversation:
- backend / platform-focused resume
- full-stack / Flutter-focused resume


## Portfolio customization

The navbar includes a customization panel with:

- Four accent color themes
- Three text-size options
- Five languages: English, Tamil, Spanish, German and Japanese
- Preferences persisted with `localStorage`

The portfolio also includes direct links to AgilityDelivered and the IEEE publication.

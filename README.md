# ACCA Audit Mastery

Offline-capable ACCA Audit and Assurance study app built with Next.js 14, TypeScript, Tailwind CSS, and local JSON content.

## Features

- Concise AA topic notes with exam-focused structure
- Client-side topic search
- MCQ practice with instant feedback and saved local progress
- Revision mode with flashcards and one-page summaries
- Installable PWA with service worker caching for offline study

## Install

1. Install Node.js 18.17 or later.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy To Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy. The `manifest.json` and `sw.js` files in `public/` will be served automatically.

## Offline Notes

- Open the site once while online so the service worker can cache the core routes and assets.
- After the first visit, homepage, topic pages, practice mode, revision mode, and app assets remain available offline.
- If you update the app, bump the cache name in `public/sw.js` so clients refresh cached content cleanly.

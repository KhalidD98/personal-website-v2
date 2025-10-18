# Personal Website V2

Static website built with React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

## Project Structure

```
personal-website-v2/
  ├── src/         # React components
  ├── public/      # Static assets
  └── public/data/ # JSON data files
```

## Working with Data

Store data in JSON files:
- Put JSON files in `public/data/`
- Access via `fetch('/data/yourfile.json')`

## Available Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

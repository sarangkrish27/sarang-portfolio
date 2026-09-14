# Sarang — Portfolio

A Vue 3 + Vite portfolio site. Projects and certificates are driven by YAML
files — edit the data, the site updates, no component code to touch.

## Run it

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Editing content

- **Projects** → `src/data/projects.yaml`
- **Certificates** → `src/data/certifications.yaml`
- **Bio / quick facts** → `src/components/About.vue`
- **Skills** → `src/components/Skills.vue` (`groups` array)
- **Contact links** → `src/components/Footer.vue` (`links` array)

Each YAML file has comments at the top explaining every field. To add a new
project, copy an existing entry, change the `id`, and fill in the rest —
`image` can be a path like `/src/assets/images/your-file.png` (drop the file
in `src/assets/images/`) or a full URL. Leave `demo` or `link` fields as
`""` if you don't have one; they just won't render a button.

## Structure

```
src/
  components/   Hero, About, Skills, Projects, Certificates, NavBar, Footer
  data/         projects.yaml, certifications.yaml
  composables/  useReveal.js — scroll-in animation for sections
  assets/images/ profile photo etc.
  style.css     design tokens (colors, fonts, spacing) — change once, applies everywhere
```

## Design notes

- Graph-paper background + hand-drawn sticky notes + pixel display font for
  the name, matching your original mockup.
- Fonts: **Press Start 2P** (pixel name), **Caveat** (handwritten labels),
  **Space Grotesk** (body/UI text) — loaded from Google Fonts in `style.css`.
- Motion is deliberate, not scattered: the hero name/notes play once on load,
  each section fades in once as you scroll to it, and project/certificate
  cards lift slightly on hover. Respects `prefers-reduced-motion`.
- Colors, spacing, and shadows are all CSS variables at the top of
  `src/style.css` — change the palette in one place.

## Before you deploy

- Swap the placeholder email/GitHub/LinkedIn links in `Footer.vue`.
- Add real repo/demo links and project screenshots in `projects.yaml`.
- Replace the favicon in `public/favicon.svg` if you want something custom.
- Any static host works (Vercel, Netlify, GitHub Pages) — `npm run build`
  and deploy the `dist/` folder.

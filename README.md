# Sarang — Portfolio + Journal

A new Vue 3 + Vite website combining the supplied portfolio and blog. The original folders are unchanged.

## Run

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist` folder. Configure the host to serve `index.html` for unknown paths so direct article URLs work. A Netlify-compatible `_redirects` file is included; Vercel configuration is also included.

## Content

- Projects and certifications: `src/data/content.js` (original YAML files retained for reference).
- Articles: `blogs/*.md`, with title, date, tag, excerpt, and banner frontmatter. Drafts with `draft: true` stay hidden.
- Article images: `public/banners/`.
- Project screenshots and portrait: `public/images/`.
- Homepage biography and skills: `src/views/Home.vue`.
- Contact and social links: `src/App.vue`.

Markdown is for trusted, author-maintained content and supports syntax-highlighted code. Fonts load from Google Fonts, with local system fallbacks. There is no contact backend; contact links open email.

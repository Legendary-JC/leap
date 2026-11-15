# LEAP Canada – Website

Loveworld Economic Advancement Program (LEAP) website, built with **Eleventy + Nunjucks**, driven by **JSON** data, running on **Node.js**.

## Run it
```bash
npm install
npm start        # dev server with live reload (http://localhost:8080)
npm run build    # static site written to _site/
```
Needs Node.js 18 or newer. To deploy under a sub-folder: `PATH_PREFIX=/leap/ npm run build`.

## Where things live
```
.eleventy.js                 Eleventy config
src/_data/site.json          Global content: name, nav, scripture, concept, vision, mission, event, footer
src/_data/pages.json         Per-page content: titles, descriptions, hero text, the 4 pillars and their programs, ways to get involved
src/_includes/layouts/       base.njk (shared page shell)
src/_includes/partials/      header, footer, page-hero, cta-band, svg defs
src/_includes/art/           Inline SVG illustrations (hero, network, poster, pillar-1..4)
src/index.njk  about.njk  blueprint.njk  resources.njk  contact.njk  get-involved.njk
src/css/styles.css           All styles (copied to _site/css)
src/js/main.js               Menu, scroll reveals, resource filter, form handling
```

## Editing content
- Change wording, nav items, event details or contact info in `site.json` and `pages.json`. No HTML edits needed.
- Add a pillar or program by adding an object to `pages.blueprint.pillars` in `pages.json`. The Home, Blueprint and Resources pages update automatically. (A new pillar also needs an `art/pillar-N.njk` illustration.)
- Contact email, location and phone are empty in `site.json` and show "To be added" until filled.

## Forms
The Contact and Get Involved forms are front-end only (they show a thank-you message). Connect them to a form service (Formspree, Netlify Forms) or your own backend by adding an `action` to the `<form>` tags.

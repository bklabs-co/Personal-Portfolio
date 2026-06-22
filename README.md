# Bharanikumar R — Portfolio

A premium, dark-themed developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Design concept

The signature visual motif is a "request trace" — an animated diagram of a request
passing through client → auth → firewall → server checkpoints. It echoes the
firewall-based access control work that's the actual differentiator in the
underlying experience, and recurs as the scroll-progress bar and section accents.

- **Colors**: near-black base (`#08090b`), signal blue (`#5b8cff`), violet (`#7c5cf`f) accent
- **Type**: Inter for display/body, JetBrains Mono for labels, tags, and nav (a nod to the dev/terminal subject)
- **Components**: terminal-window styled project cards, glass-blur sticky nav, scroll-reveal sections

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data/content.js       # single source of truth — all resume/project copy
  components/
    Navbar.jsx           # sticky glass nav + mobile menu
    Hero.jsx              # hero + signature request-trace SVG animation
    About.jsx             # story + stats
    Skills.jsx             # tag-based skill groups
    Projects.jsx + ProjectCard.jsx   # project grid + case-study modal
    Experience.jsx        # work timeline + education + certifications
    Contact.jsx            # CTA + contact methods + resume download
    Footer.jsx
    ScrollProgress.jsx     # top progress bar
    CustomCursor.jsx       # desktop-only custom cursor
    Reveal.jsx / SectionLabel.jsx   # shared scroll-animation + label helpers
public/
  Bharanikumar-R-Resume.pdf   # downloadable resume (linked from nav + contact)
```

## Editing content

All resume data, project descriptions, skills, and stats live in
`src/data/content.js`. Update that file to change copy without touching
component code.

## Deploying

This is a standard Vite app — `npm run build` produces a static `dist/` folder
deployable to Vercel, Netlify, Cloudflare Pages, or any static host.

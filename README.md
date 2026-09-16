# Qi Li — faculty page

Personal academic site for Qi Li, built with Next.js and deployed as a static
site on GitHub Pages. All content lives in plain JSON files under `data/` —
edit those to update the site, no code changes needed.

Live at: `https://qilimk.github.io/qili-prof/`

## Editing content

Every page reads from a JSON file in `data/`. Edit the file, commit, and push
to `main` — GitHub Actions rebuilds and redeploys the site automatically
(usually within a minute or two).

| File | Powers | Shape |
|---|---|---|
| `data/profile.json` | Name/title, About text, site `<title>` | `{ name, title, dept, university, office, bio, email, phone }` |
| `data/links.json` | Sidebar links + nav CV link | `{ cv, scholar, github, linkedin, x, email }` — set any value to `""` to hide that link |
| `data/updates.json` | Home page "Updates" list | array of `{ date, text }`, newest first |
| `data/teaching.json` | Home page "Teaching" list | array of `{ term, title, link }` |
| `data/publications.json` | `/publications` (searchable/filterable) | array of `{ title, authors, venue, year, links: { pdf, code }, tags: [] }` |
| `data/group.json` | `/group` | array of `{ name, role, site }` |
| `data/experiences.json` | `/experiences` | array of `{ year, text }` |
| `data/awards.json` | `/recognition` → Awards | array of `{ year, text }` |
| `data/talks.json` | `/recognition` → Talks | array of `{ date, title }` |
| `data/press.json` | `/recognition` → Press | array of `{ year, outlet, title, link }` |

To add a new item to any list, just add a new object to the corresponding
array — the page re-sorts and re-renders automatically.

To replace the headshot, swap `public/qi_headshot.jpg` (keep the filename, or
update the `src` in `components/Sidebar.tsx`). To replace the CV, swap
`public/CV_QiLi_202508.pdf` and update `data/links.json`'s `cv` field to match.

Adding a new page (e.g. a blog or a new section) means adding a folder under
`app/` with a `page.tsx`, plus a matching entry in the `items` array in
`components/NavBar.tsx`.

### Colors

The accent color (links, hover states) is one CSS variable —
`--color-accent` (and `--color-accent-hover`) in `app/globals.css`. Change
those two hex values and every link on the site updates. Everything else is
the Tailwind `slate` gray scale (`text-slate-900`, `border-slate-200`, etc.)
throughout the components.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (GitHub Pages)

This repo builds as a static export (`output: "export"` in `next.config.ts`)
and deploys via `.github/workflows/deploy.yml` on every push to `main`.

One-time setup in the GitHub repo: **Settings → Pages → Source: GitHub
Actions**. After that, pushes to `main` deploy automatically — no manual
build step.

The site is served from a project page
(`https://<user>.github.io/<repo-name>/`), so the build sets
`NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` (derived automatically from the
repo name in the workflow — nothing to configure by hand, even if the repo
is renamed or forked).

To preview the production build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/qili-prof npm run build
npx serve out
```

## Template for other faculty

This site started from
[`faculty-page-template`](../faculty-page-template), a stripped-down copy of
this same code with placeholder content. To spin up a page for another
faculty member, clone that template rather than this repo — see its README.

# Qi Li — faculty page

Personal academic site for Qi Li. Pure HTML/CSS/JS, no framework, no build
step, no `npm install` — content and styling are in separate files on
purpose, so editing content never risks breaking the design.

Live at: `https://qilimk.github.io/qili-prof/`

## Editing content

Everything on the page is in **`index.html`**, top to bottom in the order
it's displayed: About, Updates, Teaching, Publications, Group, Experiences,
Recognition, CV. Find the section by its `<h1>`/`<h2>` heading or its
`id="..."` (e.g. `id="publications"`), copy an existing entry's HTML block,
paste it, and edit the text inside.

For example, to add a new update, find `<section id="updates">` and copy one
of its `<li>` lines:

```html
<li><span class="date tabular">2024-12-01</span><span>Released VideoBadminton dataset paper (IEEE BigData 2024).</span></li>
```

Change the date and text, keep the same tags around them, and add it above
the other entries (lists are newest-first — there's no automatic sorting,
so put new items where you want them to appear).

The same copy-a-block-and-edit-the-text pattern works for every section:
Teaching and Experiences use the same `<li><span class="date">...` shape;
Group uses `<li><p class="group-name">...</p><p class="group-role">...</p></li>`;
Recognition's Awards/Talks/Press are each their own list inside
`<section id="recognition">`.

**Publications** are a bit more structured — each is a `<li class="pub-item"
data-tags="...">` block with a title, year, authors, venue, and PDF/code
links. The `data-tags` attribute drives the topic filter dropdown (comma
lists, edit freely) and the search box; both are handled by `script.js`
without needing a data file.

**To replace the headshot**: swap `qi_headshot.jpg` for your own image (same
filename, or update the `src` in the sidebar's `<img>` tag). **To replace the
CV**: swap `CV_QiLi_202508.pdf` (same filename, or update the two `href`s
that reference it — the sidebar link and the CV section's download button).

Edit the file, commit, and push to `main` — GitHub Pages serves the updated
file directly. No build, no deploy pipeline; changes are live as soon as
GitHub Pages picks up the push (usually under a minute).

## Colors, fonts, layout

All of that lives in **`style.css`** — never in `index.html`. The whole
palette is defined once at the top as CSS custom properties:

```css
:root {
  --color-accent: #0f766e;       /* links */
  --color-accent-hover: #115e59; /* links on hover */
  --color-ink: #333332;          /* headings, primary text */
  ...
}
```

Change a value there and everything using it updates across the whole page.
Content edits in `index.html` should never need a matching edit in
`style.css`, and vice versa — that separation is the point of this setup.

## Behavior

**`script.js`** is optional progressive enhancement: the mobile menu toggle
and the Publications search/filter. The page is fully readable and
navigable with JavaScript disabled; only those two interactions need it.

## Local preview

No install needed — either open `index.html` directly in a browser, or serve
it locally so relative paths behave exactly like they will on GitHub Pages:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment (GitHub Pages)

**Settings → Pages → Source: Deploy from a branch → `main` / `(root)`.**
That's the entire deployment setup — GitHub Pages serves the repo's files
as-is, so there's nothing to build and no GitHub Actions workflow.

## Template for other faculty

This site started from
[`faculty-page-template`](../faculty-page-template), the same pure-HTML
setup with placeholder content. To spin up a page for another faculty
member, clone that template rather than this repo — see its README.

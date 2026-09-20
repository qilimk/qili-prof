# Qi Li — faculty page

Personal academic site for Qi Li. Pure HTML/CSS/JS, no framework, no build
step, no `npm install` — content and styling are in separate files on
purpose, so editing content never risks breaking the design.

Live at: `https://qilimk.github.io/qili-prof/`

## Pages

The site is six HTML files, each with the same header/sidebar/footer
(copy-pasted, since there's no templating without a build step) and one job:

| File | Contains |
|---|---|
| `index.html` | About (bio), Updates, and **Selected Publications** only |
| `publications.html` | The complete, searchable/filterable publications list |
| `teaching.html` | Teaching |
| `group.html` | Group |
| `experiences.html` | Experiences |
| `recognition.html` | Recognition — Awards, Talks, Press |

CV has no page of its own — the sidebar's "Curriculum Vitae" link opens the
PDF directly on every page.

## Editing content

Find the section by its `<h1>`/`<h2>` heading or `id="..."`, copy an
existing entry's HTML block, paste it, and edit the text inside.

For example, to add a new update, open `index.html`, find
`<section id="updates">`, and copy one of its `<li>` lines:

```html
<li><span class="date tabular">2024-12-01</span><span>Released VideoBadminton dataset paper (IEEE BigData 2024).</span></li>
```

Change the date and text, keep the same tags around them, and add it above
the other entries (lists are newest-first — there's no automatic sorting,
so put new items where you want them to appear).

The same copy-a-block-and-edit-the-text pattern works for every page:
Teaching and Experiences use the same `<li><span class="date">...` shape;
Group uses `<li><p class="group-name">...</p><p class="group-role">...</p></li>`;
Recognition's Awards/Talks/Press are each their own list inside
`recognition.html`.

**Publications** are a bit more structured — each is a `<li class="pub-item"
data-tags="...">` block with a title, year, authors, venue, and PDF/code
links, living in `publications.html`. The `data-tags` attribute drives the
topic filter dropdown (comma lists, edit freely) and the search box, both
handled by `script.js` without needing a data file.

**To feature a publication on the home page**, copy its `<li class="pub-item">`
block into `index.html`'s `<section id="selected-publications">`, and add
`data-selected="true"` to the copy in `publications.html` (that attribute is
just a marker for editors — it doesn't do anything automatically, since
there's no build step to sync the two lists; both copies need to be kept in
sync by hand). Remove a publication from the home page by deleting its
block from `index.html` (and the `data-selected` attribute in
`publications.html`, since it's no longer true).

**To replace the headshot**: swap `qi_headshot.jpg` for your own image (same
filename, or update the `src` in every page's sidebar `<img>` tag — six
places). **To replace the CV**: swap `CV_QiLi_202508.pdf` (same filename, or
update the sidebar `href` on all six pages).

Edit a file, commit, and push to `main` — GitHub Pages serves the updated
file directly. No build, no deploy pipeline; changes are live as soon as
GitHub Pages picks up the push (usually under a minute).

## Colors, fonts, layout

All of that lives in **`style.css`**, shared by every page — never in the
HTML files. The whole palette is defined once at the top as CSS custom
properties:

```css
:root {
  --color-accent: #0f766e;       /* links */
  --color-accent-hover: #115e59; /* links on hover */
  --color-ink: #333332;          /* headings, primary text */
  ...
}
```

Change a value there and it updates across all six pages at once. Content
edits in an HTML file should never need a matching edit in `style.css`, and
vice versa — that separation is the point of this setup.

## Behavior

**`script.js`** is also shared by every page, and is optional progressive
enhancement: the mobile menu toggle (all pages) and the Publications
search/filter (`publications.html` only — it no-ops harmlessly on pages
without a search box). Every page is fully readable and navigable with
JavaScript disabled; only those two interactions need it.

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

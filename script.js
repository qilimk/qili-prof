// Progressive enhancement only — the page is fully readable with this
// disabled. Two independent pieces: the mobile nav toggle, and the
// publications search/filter (driven entirely by the rendered HTML, via
// each .pub-item's data-tags attribute — no separate data file).

(function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.getElementById("primary-nav");
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();

(function () {
  const pubList = document.getElementById("pub-list");
  const pubSearch = document.getElementById("pub-search");
  const pubTagSelect = document.getElementById("pub-tag");
  const pubEmpty = document.getElementById("pub-empty");
  if (!pubList || !pubSearch || !pubTagSelect) return;

  const items = Array.from(pubList.querySelectorAll(".pub-item"));

  const allTags = new Set();
  items.forEach((li) => {
    (li.dataset.tags || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((t) => allTags.add(t));
  });
  Array.from(allTags)
    .sort()
    .forEach((tag) => {
      const opt = document.createElement("option");
      opt.value = tag;
      opt.textContent = tag;
      pubTagSelect.appendChild(opt);
    });

  function applyFilter() {
    const q = pubSearch.value.trim().toLowerCase();
    const tag = pubTagSelect.value;
    let visible = 0;
    items.forEach((li) => {
      const hay = li.textContent.toLowerCase();
      const tags = (li.dataset.tags || "").split(",").map((t) => t.trim());
      const show = (!q || hay.includes(q)) && (!tag || tags.includes(tag));
      li.hidden = !show;
      if (show) visible++;
    });
    if (pubEmpty) pubEmpty.hidden = visible !== 0;
  }

  pubSearch.addEventListener("input", applyFilter);
  pubTagSelect.addEventListener("change", applyFilter);
})();

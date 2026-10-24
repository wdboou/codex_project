# Bowen Song — academic homepage

A responsive, buildless academic homepage. Static files are in `dist/`; no package installation is required.

## Preview

Run `python3 -m http.server 5173 --directory dist`, then open http://localhost:5173.

## Content and sources

- Name: Bowen Song; GitHub: https://github.com/wdboou (provided by the owner).
- Google Scholar: https://scholar.google.com/citations?user=MvmgQFwAAAAJ&hl=en (provided by the owner).
- Citation count: 1,500+, supplied by the owner in October 2026. It is a manually maintained approximate figure; this site does not scrape Scholar.
- Contact email: wdboou@gmail.com, matched to the authenticated GitHub profile.
- Selected publication metadata: https://aclanthology.org/2025.acl-long.561/
- Corresponding-author attribution: https://aclanthology.org/2025.acl-long.561.pdf
- Research-theme copy is an editorial summary of that paper, not a claim about an exhaustive research program.

Scholar returned an access limit during preparation, so the page links to the full record instead of reconstructing a complete publication list. Current employer, job title, degrees, and a portrait are intentionally not asserted until the owner supplies or confirms them.

## Edit

- `dist/index.html`: biography, research themes, links, and selected paper.
- `dist/styles.css`: layout, colors, and responsive styling.
- `dist/app.js`: accessible citation-copy enhancement.
- `dist/publications.bib`: downloadable citation. Keep it in sync with the citation in HTML.

The HTML, anchor navigation, native citation disclosure, and download link work without JavaScript. There are no trackers, third-party scripts, external fonts, or background data requests.

Sites deployment configuration lives in `.openai/hosting.json`. The same `dist/` contents can also be served by any ordinary static host.

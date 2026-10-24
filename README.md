# Bowen Song — academic homepage

A responsive, buildless academic homepage. Static files are in `dist/`; no package installation is required.

## Preview

Run `python3 -m http.server 5173 --directory dist`, then open http://localhost:5173.

## Content and sources

- Name: Bowen Song; GitHub: https://github.com/wdboou (provided by the owner).
- Google Scholar: https://scholar.google.com/citations?user=MvmgQFwAAAAJ&hl=en (provided by the owner).
- Citation count: 1,500+, supplied by the owner in October 2026. It is a manually maintained approximate figure; this site does not scrape Scholar.
- Contact email: wdboou@gmail.com, matched to the authenticated GitHub profile.
- TraPO authorship was confirmed directly by the owner. ICLR 2026 publication metadata and corresponding-author attribution follow the final conference paper: https://openreview.net/forum?id=3K1y4KbWAx and https://openreview.net/pdf/9b472ed0671cf9a92c141bb68003a9dc4ee47ff9.pdf
- The TraPO author order follows the ICLR final paper; the earlier arXiv version and code README have a different author order.
- Official TraPO code: https://github.com/ShenzhiYang2000/TRAPO
- Divide-Then-Align publication metadata: https://aclanthology.org/2025.acl-long.561/
- Divide-Then-Align corresponding-author attribution: https://aclanthology.org/2025.acl-long.561.pdf
- Research-theme copy is an editorial summary of these papers, not a claim about an exhaustive research program.

Scholar returned an access limit during preparation, so the page links to the full record instead of reconstructing a complete publication list. Current employer, job title, degrees, and a portrait are intentionally not asserted until the owner supplies or confirms them.

## Edit

- `dist/index.html`: biography, research themes, links, and selected paper.
- `dist/styles.css`: layout, colors, and responsive styling.
- `dist/app.js`: accessible citation-copy enhancement.
- `dist/citations/*.bib`: individual paper citations. Keep them in sync with the corresponding citations in HTML.
- `dist/publications.bib`: combined bibliography, newest paper first.

The HTML, anchor navigation, native citation disclosure, and download link work without JavaScript. There are no trackers, third-party scripts, external fonts, or background data requests.

Sites deployment configuration lives in `.openai/hosting.json`. The same `dist/` contents can also be served by any ordinary static host.

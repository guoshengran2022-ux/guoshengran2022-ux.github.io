# Shengran Guo — academic homepage

Buildless GitHub Pages site. Open `index.html`, or run `python3 -m http.server 8765` and visit http://localhost:8765.

## Personal links and selected publications

Edit `assets/profile.js`. Email, LinkedIn, and Google Scholar are intentionally empty until the correct details are supplied. Their icons appear disabled until configured. GitHub is already linked.

Add publications to `profile.publications` in this format (replace all example values with verified information):

```js
{
  title: 'Paper title',
  authors: ['First Author', 'Shengran Guo', 'Last Author'],
  venue: 'Conference or journal',
  year: '2026',
  badge: 'Venue abbreviation',
  image: 'assets/paper-overview.png',
  imageAlt: 'Description of the paper figure',
  links: { PDF: 'https://…', Code: 'https://…' },
  abstract: 'Optional abstract',
  bibtex: 'Optional BibTeX entry'
}
```

The layout is inspired by the academic homepages at https://oyy2000.github.io/, https://weizhigao.github.io/, and https://justincao03.github.io/. Implementation is original; no other researchers' publication data or photos are included.

Deploy by committing `index.html` and `assets/` to the repository's GitHub Pages source branch.

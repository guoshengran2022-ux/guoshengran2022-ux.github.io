/* Add verified personal links and selected papers here. Empty links stay disabled.
   Paper fields: title, authors (array), venue, year, badge, image, imageAlt,
   links ({ PDF, Code, Website, DOI }), abstract, bibtex. */
const profile = {
  email: '',
  linkedin: '',
  scholar: '',
  publications: []
};

for (const key of ['email', 'linkedin', 'scholar']) {
  if (!profile[key]) continue;
  const placeholder = document.querySelector(`[data-contact="${key}"]`);
  const link = document.createElement('a');
  link.className = 'contact';
  link.href = key === 'email' ? `mailto:${profile[key]}` : profile[key];
  link.title = key === 'email' ? profile[key] : `View ${key === 'scholar' ? 'Google Scholar' : 'LinkedIn'} profile`;
  link.append(...placeholder.childNodes);
  placeholder.replaceWith(link);
}

const element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};
const list = document.getElementById('publication-list');
if (profile.publications.length) list.replaceChildren();
for (const paper of profile.publications) {
  const row = element('article', 'publication');
  const visual = element('div', 'paper-visual');
  if (paper.image) {
    const img = element('img');
    img.src = paper.image;
    img.alt = paper.imageAlt || `Overview of ${paper.title}`;
    img.loading = 'lazy';
    visual.append(img);
  }
  const content = element('div', 'paper-content');
  if (paper.badge) content.append(element('span', 'venue-badge', paper.badge));
  const title = element('h3', 'paper-title');
  const titleLink = Object.values(paper.links || {})[0];
  if (titleLink) {
    const a = element('a', '', paper.title);
    a.href = titleLink;
    title.append(a);
  } else title.textContent = paper.title;
  content.append(title);
  const authors = element('p', 'authors');
  paper.authors.forEach((name, i) => {
    if (i) authors.append(document.createTextNode(', '));
    authors.append(name === 'Shengran Guo' ? element('strong', '', name) : document.createTextNode(name));
  });
  content.append(authors, element('p', 'venue', [paper.venue, paper.year].filter(Boolean).join(', ')));
  const links = element('div', 'paper-links');
  for (const [label, url] of Object.entries(paper.links || {})) {
    if (!url) continue;
    const link = element('a', '', label);
    link.href = url;
    links.append(link);
  }
  content.append(links);
  for (const [label, value, tag] of [['Abstract', paper.abstract, 'p'], ['BibTeX', paper.bibtex, 'pre']]) {
    if (!value) continue;
    const details = element('details', 'paper-details');
    details.append(element('summary', '', label), element(tag, 'paper-abstract', value));
    content.append(details);
  }
  row.append(visual, content);
  list.append(row);
}

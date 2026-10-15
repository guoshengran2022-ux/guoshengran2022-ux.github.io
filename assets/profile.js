/* Add verified personal links and selected papers here. Empty links stay disabled.
   Paper fields: title, authors (array), venue, year, badge, image, imageAlt,
   links ({ PDF, Code, Website, DOI }), abstract, bibtex. */
const profile = {
  email: 'sguo27@ncsu.edu',
  linkedin: '',
  scholar: '',
  publications: [
  {
    "title": "Beyond Response Scoring: An AI-aware Cognitive Supervision Framework for Automated Mathematical Short Answer Grading",
    "authors": [
      "Shengran Guo",
      "Min Chi",
      "Feifei Qiao",
      "Varad Patwardhan"
    ],
    "venue": "Submitted to AAAI 2027",
    "year": "2026",
    "badge": "AAAI 2027 · Submission",
    "summary": "Combines cognitive supervision and AI-aware reliability weighting for automated mathematical short answer grading.",
    "image": "assets/paper-1.svg",
    "imageAlt": "Topic card: AICG — AI-aware mathematical grading",
    "bibtex": "@misc{guo2026aicg,\n  title = {Beyond Response Scoring: An AI-aware Cognitive Supervision Framework for Automated Mathematical Short Answer Grading},\n  author = {Shengran Guo and Min Chi and Feifei Qiao and Varad Patwardhan},\n  year = {2026},\n  note = {Submitted to AAAI 2027}\n}"
  },
  {
    "title": "Direct Hidden-State Alignment: Mapping and Controlling Preference Expression in LLMs",
    "authors": [
      "Fansheng Zhang",
      "Shengran Guo",
      "Zexiao Wang",
      "Liang Yuan",
      "Jiyuan Chen",
      "Ruikun Luo"
    ],
    "venue": "arXiv:2609.33298",
    "year": "2026",
    "badge": "arXiv",
    "summary": "Maps preference-relevant residual computation and controls behavioral expression through lightweight hidden-state interventions.",
    "links": {
      "PDF": "https://arxiv.org/pdf/2609.33298",
      "arXiv": "https://arxiv.org/abs/2609.33298"
    },
    "image": "assets/paper-2.svg",
    "imageAlt": "Topic card: DHSA — Preference alignment in LLMs",
    "bibtex": "@misc{zhang2026dhsa,\n  title = {Direct Hidden-State Alignment: Mapping and Controlling Preference Expression in LLMs},\n  author = {Fansheng Zhang and Shengran Guo and Zexiao Wang and Liang Yuan and Jiyuan Chen and Ruikun Luo},\n  year = {2026},\n  note = {arXiv:2609.33298}\n}"
  },
  {
    "title": "ConsultMind: Towards Automated Diagnostic Consultation via Uncertainty-Aware Reasoning",
    "authors": [
      "Xiao Sun",
      "ymyang",
      "Qiang Huang",
      "Jiang Zhong",
      "Li Jin",
      "Junnan Zhu",
      "Xinyi Jiang",
      "Haoyang Zeng",
      "Ruirui Chen",
      "Yining Wang",
      "Shengran Guo",
      "xinyu zhou",
      "Rong Tang",
      "Kaiwen Wei"
    ],
    "venue": "Submitted to ACL ARR, October 2026",
    "year": "2026",
    "badge": "ACL ARR · Submission",
    "summary": "Uses a Disorder–Symptom Bayesian Network and posterior uncertainty to guide adaptive inquiry and diagnostic decisions.",
    "image": "assets/paper-3.svg",
    "imageAlt": "Topic card: ConsultMind — Uncertainty-aware consultation",
    "bibtex": "@misc{sun2026consultmind,\n  title = {ConsultMind: Towards Automated Diagnostic Consultation via Uncertainty-Aware Reasoning},\n  author = {Xiao Sun and ymyang and Qiang Huang and Jiang Zhong and Li Jin and Junnan Zhu and Xinyi Jiang and Haoyang Zeng and Ruirui Chen and Yining Wang and Shengran Guo and xinyu zhou and Rong Tang and Kaiwen Wei},\n  year = {2026},\n  note = {Submitted to ACL ARR, October 2026}\n}"
  },
  {
    "title": "TRUST: Trace-Based Recovery of Unbiased Student Trajectories for Robust Pedagogical Policy Induction",
    "authors": [
      "Rajesh Debnath",
      "Shengran Guo",
      "Adittya Soukarjya Saha",
      "Md Mirajul Islam",
      "Tiffany Barnes",
      "Min Chi"
    ],
    "venue": "Submitted to LAK 2027",
    "year": "2026",
    "badge": "LAK 2027 · Submission",
    "summary": "Filters student trajectories whose interaction patterns conflict with observed learning outcomes to support robust policy induction and evaluation.",
    "image": "assets/paper-4.svg",
    "imageAlt": "Topic card: TRUST — Reliable pedagogical policy learning",
    "bibtex": "@misc{debnath2026trust,\n  title = {TRUST: Trace-Based Recovery of Unbiased Student Trajectories for Robust Pedagogical Policy Induction},\n  author = {Rajesh Debnath and Shengran Guo and Adittya Soukarjya Saha and Md Mirajul Islam and Tiffany Barnes and Min Chi},\n  year = {2026},\n  note = {Submitted to LAK 2027}\n}"
  },
  {
    "title": "Critical Contrast Hierarchical Apprenticeship Learning from Imperfect Demonstrations",
    "authors": [
      "Md Mirajul Islam",
      "Shengran Guo",
      "Xi Yang",
      "Min Chi"
    ],
    "venue": "Research manuscript",
    "year": "2026",
    "badge": "Manuscript",
    "summary": "Combines decision-level outcome attribution and contrastive criticality scoring for apprenticeship learning in healthcare and education.",
    "image": "assets/paper-5.svg",
    "imageAlt": "Topic card: CCHAL — Learning from imperfect demonstrations",
    "bibtex": "@misc{islam2026cchal,\n  title = {Critical Contrast Hierarchical Apprenticeship Learning from Imperfect Demonstrations},\n  author = {Md Mirajul Islam and Shengran Guo and Xi Yang and Min Chi},\n  year = {2026},\n  note = {Research manuscript}\n}"
  },
  {
    "title": "Application and Impact of Position Embedding in Natural Language Processing",
    "authors": [
      "Shengran Guo"
    ],
    "venue": "ICEIB 2024, pp. 246–250",
    "year": "2024",
    "badge": "ICEIB 2024",
    "summary": "",
    "image": "assets/paper-6.svg",
    "imageAlt": "Topic card: Position Embedding — Natural language processing",
    "bibtex": "@inproceedings{guo2024position,\n  title = {Application and Impact of Position Embedding in Natural Language Processing},\n  author = {Shengran Guo},\n  year = {2024},\n  booktitle = {ICEIB 2024},\n  pages = {246--250}\n}"
  }
]
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
  if (paper.badge) visual.prepend(element('span', 'venue-badge', paper.badge));
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
  if (paper.summary) content.append(element('p', 'paper-summary', paper.summary));
  for (const [label, value, tag] of [['Abstract', paper.abstract, 'p'], ['BIB', paper.bibtex, 'pre']]) {
    if (!value) continue;
    const details = element('details', 'paper-details');
    details.append(element('summary', '', label), element(tag, 'paper-abstract', value));
    content.append(details);
  }
  row.append(visual, content);
  list.append(row);
}

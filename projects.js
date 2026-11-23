/* ============================================================
   PROJECTS — edit this list to change the Projects page.
   Projects appear in the order listed here.

   Each project has:
     id        short name, letters/hyphens only (link: projects.html#nfl)
     hook      the playful one-line question shown on the card
     title     the plain project title
     context   small line above the title (course, client, tools)
     repo      GitHub link ("" if none)
     image     figure on the card
     gallery   figures in the overview: [{ src: "...", caption: "..." }]
     methods   short list of methods (shown as tags)
     summary   overview paragraphs (array of strings)
     findings  key results (array of strings)
   ============================================================ */
var PROJECTS = [
  {
    id: "nfl",
    hook: "Who really has the best hands in the NFL?",
    title: "Empirical Bayes estimates of NFL catch probability",
    context: "INFSCI 2595 midterm, University of Pittsburgh · R",
    repo: "https://github.com/vedantkan/NFL-players-Catch-Rate-and-associated-uncertrainity",
    image: "figures/projects/nfl-shrinkage.png",
    gallery: [
      { src: "figures/projects/nfl-shrinkage.png", caption: "Raw catch rate (x) against the Empirical Bayes estimate (y). Low-volume players (dark) are pulled toward the league average; high-volume players (yellow) stay on the 45° line." },
      { src: "figures/projects/nfl-prior.png", caption: "The league-wide Beta prior (red) fitted to catch rates of players with more than 24 targets." },
      { src: "figures/projects/nfl-scouting.png", caption: "Posterior mean against uncertainty. Circled in red: high-upside players whose true ability is still uncertain." }
    ],
    methods: ["Beta–Binomial model", "Empirical Bayes", "Maximum likelihood (BFGS)", "Shrinkage"],
    summary: [
      "A receiver who catches 3 of his 3 targets has a perfect catch rate. Nobody actually believes he's perfect. Raw catch rates are wildly noisy for players who rarely see the ball, so I used Empirical Bayes to let every player borrow strength from the rest of the league.",
      "Using real play-by-play data from nflfastR (849 players, 2018–2020 seasons), I fitted a Beta prior to the catch rates of players with more than 24 targets by maximum likelihood, then combined it with each player's own catches and targets. I compared the result with the two extremes: judging every player on his own data alone, and treating the whole league as one player."
    ],
    findings: [
      "Fitted league prior: Beta(15.8, 7.8), worth roughly 16 catches on 24 targets, with 90% of its mass between about 50% and 82%",
      "About 100 low-volume players had a “perfect” 100% catch rate and about 30 had 0%; the prior pulls them back toward reality",
      "Shrinkage fades as targets pile up: high-volume receivers keep estimates close to their raw rates",
      "Plotting posterior mean against uncertainty turns the model into a scouting shortlist of upside bets"
    ]
  },
  {
    id: "sp500",
    hook: "Can a model beat a coin flip on the S&P 500?",
    title: "Predicting 3-month stock direction for S&P 500 companies",
    context: "Applied regression project · R + Python",
    repo: "https://github.com/vedantkan/Predicting-S-P-500-Stock-Price",
    image: "figures/projects/sp500-paths.png",
    gallery: [
      { src: "figures/projects/sp500-paths.png", caption: "Every S&P 500 stock from January 2020 to December 2022, relative to its first price (log scale). The median barely moved; Tesla did not sit still." },
      { src: "figures/projects/sp500-apple-stl.png", caption: "Seasonal-trend decomposition for Apple: the smooth trend and the seasonal wiggle become separate model features." },
      { src: "figures/projects/sp500-models.png", caption: "Cross-validated accuracy of every model I tried, against a 50% coin flip. Bars show ±2 standard errors." }
    ],
    methods: ["Time-series decomposition (STL)", "PCA", "Hierarchical clustering", "Elastic net", "Neural nets, RF, GBM, SVM"],
    summary: [
      "The question was simple: if you bought a stock at the end of 2022, would it be up three months later? The data was not simple. It covered a pandemic crash, a tech boom and a tech bust.",
      "I pulled three years of daily closing prices for all 500 companies with tidyquant, decomposed each stock's weekly price into trend and seasonal components, and compressed them with PCA. Then I compared penalised logistic regressions with neural networks, random forests, gradient boosting and SVMs using cross-validation."
    ],
    findings: [
      "500 companies across 11 sectors: 378,000 daily prices from 2020–2022",
      "The first principal component explains over 70% of price variation, so most stocks move together",
      "Clustering the decomposed trends cleanly separated utilities and energy from the rest of the market",
      "Best model: about 72% accuracy on held-out data for the 3-month direction, against a roughly 50/50 baseline; 2020 was the hardest year to predict"
    ]
  },
  {
    id: "corrosion",
    hook: "Which recipe keeps the rust away?",
    title: "Optimizing coating constituents to minimize corrosion",
    context: "Machine learning project · R",
    repo: "https://github.com/vedantkan/Constitient-Optimization",
    image: "figures/projects/corrosion-models.png",
    gallery: [
      { src: "figures/projects/corrosion-models.png", caption: "Nearly 20 models compared on accuracy, log loss and ROC AUC under repeated cross-validation. The random forest with engineered features (bottom) wins on all three." },
      { src: "figures/projects/corrosion-bayes-coefs.png", caption: "Posterior coefficients (±2 SD) from the Bayesian logistic model, fitted with the Laplace approximation." },
      { src: "figures/projects/corrosion-surface.png", caption: "Predicted event probability across the recipe space. Note the sharp change along constituent x2." }
    ],
    methods: ["Bayesian logistic & linear regression", "Laplace approximation", "Model evidence", "Random forest", "Repeated cross-validation"],
    summary: [
      "Four constituents, five process settings, five machines, and one question: which coating recipe keeps corrosion down? The data held 1,252 coating runs, and the goal was a recommendation a manufacturer could act on.",
      "I engineered mixture-ratio features, then compared nearly 20 models: linear and generalized linear models, elastic net, neural networks, SVMs, XGBoost, naive Bayes and random forests. Alongside them I built Bayesian linear and logistic regressions with the Laplace approximation, using model evidence to choose between them and posterior intervals to show which inputs actually matter."
    ],
    findings: [
      "Random forest with engineered features was the best of nearly 20 models, at about 92% cross-validated accuracy",
      "Bayesian model comparison put essentially all posterior weight on the expanded-feature model",
      "Constituent x1 and the engineered mixture ratios were the most important inputs",
      "Predictions flip sharply once constituent x2 passes about 0.25–0.3, a concrete guideline for the recipe"
    ]
  }
];

/* ============================================================
   Rendering — no need to edit below this line.
   ============================================================ */
(function () {
  var list = document.getElementById('project-list');
  var dlg = document.getElementById('project-dialog');
  if (!list) return;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function tags(p) {
    return (p.methods || []).map(function (m) { return '<span class="tag">' + esc(m) + '</span>'; }).join('');
  }

  list.innerHTML = PROJECTS.map(function (p) {
    return '<a class="paper-row" href="#' + p.id + '" data-id="' + p.id + '">' +
      '<div class="paper-fig"><img src="' + esc(p.image) + '" alt="Figure from ' + esc(p.title) + '" loading="lazy"></div>' +
      '<div class="paper-text">' +
        '<p class="paper-venue">' + esc(p.context) + '</p>' +
        '<p class="paper-title">' + esc(p.hook) + '</p>' +
        '<p class="paper-authors">' + esc(p.title) + '</p>' +
        '<div class="tags">' + tags(p) + '</div>' +
        '<span class="paper-more">See how →</span>' +
      '</div></a>';
  }).join('');

  function open(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p || !dlg) return;
    document.getElementById('pj-venue').textContent = p.context;
    document.getElementById('pj-title').textContent = p.hook;
    document.getElementById('pj-sub').textContent = p.title;
    document.getElementById('pj-body').innerHTML =
      p.summary.map(function (s) { return '<p>' + esc(s) + '</p>'; }).join('') +
      (p.gallery || []).map(function (g) {
        return '<figure class="pj-fig"><img src="' + esc(g.src) + '" alt="" loading="lazy"><figcaption>' + esc(g.caption) + '</figcaption></figure>';
      }).join('') +
      (p.findings && p.findings.length ? '<h4>What I found</h4><ul>' + p.findings.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '') +
      (p.methods && p.methods.length ? '<h4>Methods</h4><div class="tags">' + tags(p) + '</div>' : '');
    document.getElementById('pj-actions').innerHTML = p.repo
      ? '<a class="pd-doi" href="' + esc(p.repo) + '" target="_blank" rel="noopener">View the code on GitHub ↗</a>'
      : '';
    dlg.querySelector('.pd-inner').scrollTop = 0;
    if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); }
  }
  function close() {
    if (dlg.open) { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  }

  list.addEventListener('click', function (e) {
    var a = e.target.closest('.paper-row'); if (!a) return;
    e.preventDefault();
    try { history.replaceState(null, '', '#' + a.dataset.id); } catch (err) {}
    open(a.dataset.id);
  });
  dlg.querySelector('.pd-close').addEventListener('click', close);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
  dlg.addEventListener('close', function () {
    if (location.hash) { try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {} }
  });
  window.addEventListener('hashchange', function () { open(location.hash.slice(1)); });
  if (location.hash) open(location.hash.slice(1));
})();

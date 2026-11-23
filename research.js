/* ============================================================
   RESEARCH PAPERS — edit this list to change the Research page.
   Papers appear in the order listed here.

   Each paper has:
     id        short name, letters/hyphens only (link: research.html#func)
     title, authors, venue, year
     doi       just the DOI, e.g. "10.1093/brain/awag210" ("" if none)
     image     path to the figure shown on the card, e.g. "figures/func.png"
     credit    small caption under the figure in the overview
     methods   short list of statistical methods (shown as tags)
     summary   overview paragraphs (array of strings)
     findings  key findings with numbers (array of strings)
   ============================================================ */
var PAPERS = [
  {
    id: "bci",
    title: "Clinically unresponsive patients with acute brain injury activate a brain–computer interface",
    authors: "Shen, Q., Eliseyev, A., <b>Kansara, V.</b>, et al.",
    venue: "Brain",
    year: 2026,
    doi: "10.1093/brain/awag210",
    image: "figures/bci.png",
    credit: "Fig. 6A–B: cumulative incidence of 12-month functional recovery by BCI control and by CMD status.",
    methods: ["Real-time EEG decoding", "Machine learning", "Time-to-event analysis", "Odds ratios"],
    summary: [
      "Some patients who appear unresponsive after acute brain injury still activate their brain to spoken commands (cognitive motor dissociation, CMD), but they have no way to communicate. We tested whether such patients could control a self-paced, EEG-based brain–computer interface (BCI) at the bedside within days of injury.",
      "Patients changed the speed and pitch of a tone by attempting to open and close their hand. We enrolled 41 clinically unresponsive ICU patients, along with 22 conscious ICU patients and 8 healthy volunteers, and followed the unresponsive patients for 12 months."
    ],
    findings: [
      "13 of 41 unresponsive patients (32%) achieved BCI control; 8 (20%) were CMD-positive",
      "Median response delay: 49.8 s in unresponsive patients vs 17.1 s in conscious patients and 15.5 s in healthy volunteers",
      "Recovered consciousness by discharge: 31% with BCI control vs 4% without (OR 21.2, 95% CI 2.3–930.7)",
      "Functional independence at 12 months: 46% vs 7% (OR 9.9, 95% CI 1.8–81.6); faster recovery with BCI control (HR 6.0, 95% CI 1.2–30.6)",
      "No patient who was both CMD-negative and unable to control the BCI recovered"
    ]
  },
  {
    id: "func",
    title: "Extension of the FUNC score for prediction of 12-month functional independence after primary intracerebral hemorrhage",
    authors: "Neves Briard, J., <b>Kansara, V.</b>, Shen, Q., et al.",
    venue: "Neurocritical Care",
    year: 2026,
    doi: "10.1007/s12028-026-02661-6",
    image: "figures/func.png",
    credit: "Fig. 2A–B: pooled ROC curve and calibration curve across multiple imputations.",
    methods: ["Multiple imputation (MICE)", "ROC / AUC", "Calibration & Brier score", "Decision curve analysis", "Trial simulation"],
    summary: [
      "The FUNC score predicts functional independence 90 days after intracerebral hemorrhage (ICH) from information available at admission. Recovery often continues well past 3 months, so we tested whether the score holds up for 12-month outcomes.",
      "In a prospective cohort of 535 patients, we handled missing outcomes with multiple imputation by chained equations, then evaluated discrimination, calibration and clinical utility. We also used a simulated clinical trial to estimate how much a FUNC-based sliding dichotomy outcome could cut the sample size a trial needs."
    ],
    findings: [
      "535 patients; 99 of 445 (22%) with known 12-month outcome were functionally independent",
      "Discrimination for 12-month independence: AUC 0.79 (95% CI 0.75–0.84), similar to the original 3-month validation",
      "Reasonable calibration (Brier score 0.15), with modest overestimation at low predicted probabilities",
      "Net clinical benefit across 5–50% threshold probabilities",
      "Sliding dichotomy improved trial efficiency by 27% (treatment OR 2.0) and 22% (OR 2.5) over a fixed dichotomy"
    ]
  },
  {
    id: "rehab",
    title: "Frequency of physical and occupational therapy in the ICU for patients with cognitive motor dissociation: a retrospective cohort study",
    authors: "Casertano, L., Shen, Q., <b>Kansara, V.</b>, et al.",
    venue: "Critical Care",
    year: 2026,
    doi: "10.1186/s13054-025-05767-z",
    image: "figures/rehab.png",
    credit: "Fig. 2B: change in GOS-E by CMD status and therapy frequency. © The Authors, CC BY-NC-ND 4.0.",
    methods: ["Ordinal regression", "Wilcoxon tests", "Longitudinal outcomes"],
    summary: [
      "Early physical and occupational therapy is a limited resource in the ICU, and it is unclear which unconscious patients benefit most. We asked whether patients with cognitive motor dissociation respond especially well to early, intensive therapy.",
      "We analysed 119 ICU patients with severe acute brain injury, recording when therapy started, how often patients received it, and any adverse events. Outcomes were followed out to 12 months, with investigators blinded to CMD status."
    ],
    findings: [
      "CMD detected in 16 of 119 patients (13%)",
      "No predefined therapy-related adverse events under the safety protocol; therapy began a median of 11 days after injury",
      "CMD patients on high-frequency therapy had the largest gain in GCS (OR 4.1, 95% CI 1.1–16.3)",
      "They also had larger GOS-E improvements at 6 and 12 months than all other groups (OR 10.7, 95% CI 2.5–48.8, p = 0.001)"
    ]
  },
  {
    id: "spindles",
    title: "Sleep spindles as a predictor of cognitive motor dissociation and recovery of consciousness after acute brain injury",
    authors: "Carroll, E. E., Shen, Q., <b>Kansara, V.</b>, et al.",
    venue: "Nature Medicine",
    year: 2025,
    doi: "10.1038/s41591-025-03578-x",
    image: "figures/spindles.png",
    credit: "Fig. 1e: per-patient timelines of sleep spindles (green), CMD (blue) and recovery of consciousness (red) over the first 30 days.",
    methods: ["Survival analysis", "Kaplan–Meier & log-rank", "Cox models", "ROC / AUC"],
    summary: [
      "Detecting CMD requires task-based EEG and machine learning, which is hard to run widely. Sleep spindles are cheap to see on routine overnight EEG and rely on the same thalamocortical circuits as consciousness, so we tested whether they could serve as a complementary marker.",
      "In a prospective cohort of 226 acutely brain-injured patients, we tracked when well-formed sleep spindles (WFSS), CMD and recovery of consciousness first appeared, and modelled time to recovery of consciousness and of 12-month independence."
    ],
    findings: [
      "WFSS in 71 of 226 patients (31%); CMD in 33 (15%)",
      "WFSS were more common with CMD (52% vs 28%) and preceded CMD detection in 14 of 17 patients with both",
      "Recovered consciousness: 41% with WFSS and CMD, 24% with WFSS only, 19% with CMD only, 14% with neither",
      "WFSS (HR 1.2) and CMD (HR 2.6) independently predicted time to 12-month independence",
      "Adding WFSS raised the 12-month prediction AUC from 0.79 to 0.89"
    ]
  },
  {
    id: "aphasia",
    title: "Impact of aphasia on brain activation to motor commands in patients with acute intracerebral hemorrhage",
    authors: "Jacobson, S. D., <b>Kansara, V.</b>, et al.",
    venue: "Neurocritical Care",
    year: 2025,
    doi: "10.1007/s12028-024-02086-z",
    image: "figures/aphasia.png",
    credit: "Fig. 1: aphasia type (outer ring) and brain activation within each type (inner ring, striped).",
    methods: ["Support vector machines", "Permutation testing", "Logistic regression"],
    summary: [
      "EEG tests for hidden consciousness depend on patients understanding spoken commands. An undetected language impairment could make the test come back negative even when the patient is aware.",
      "We studied conscious ICU patients with intracerebral hemorrhage, who can be formally tested for aphasia. Each patient completed full aphasia testing and the EEG motor-command paradigm, which was analysed with a linear-kernel SVM and permutation testing."
    ],
    findings: [
      "50 of 61 enrolled patients completed both assessments; 36 (72%) had aphasia",
      "Impaired comprehension made brain activation about four times less likely (OR 0.23, 95% CI 0.05–0.89, p = 0.04)",
      "Brain activation independently predicted 12-month independence after adjusting for the FUNC score (OR 2.4, 95% CI 1.2–5.0)",
      "Hidden receptive aphasia should be considered when interpreting a negative CMD test"
    ]
  }
];

/* ============================================================
   Rendering — no need to edit below this line.
   ============================================================ */
(function () {
  var list = document.getElementById('paper-list');
  var dlg = document.getElementById('paper-dialog');
  if (!list) return;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function fig(p) {
    return p.image ? '<img src="' + esc(p.image) + '" alt="Figure from ' + esc(p.title) + '" loading="lazy">' : '';
  }
  function tags(p) {
    return (p.methods || []).map(function (m) { return '<span class="tag">' + esc(m) + '</span>'; }).join('');
  }

  list.innerHTML = PAPERS.map(function (p) {
    return '<a class="paper-row" href="#' + p.id + '" data-id="' + p.id + '">' +
      '<div class="paper-fig">' + fig(p) + '</div>' +
      '<div class="paper-text">' +
        '<p class="paper-venue"><em>' + esc(p.venue) + '</em> · ' + p.year + '</p>' +
        '<p class="paper-title">' + esc(p.title) + '</p>' +
        '<p class="paper-authors">' + p.authors + '</p>' +
        '<div class="tags">' + tags(p) + '</div>' +
        '<span class="paper-more">Read overview →</span>' +
      '</div></a>';
  }).join('');

  function open(id) {
    var p = PAPERS.filter(function (x) { return x.id === id; })[0];
    if (!p || !dlg) return;
    document.getElementById('pd-fig').innerHTML = fig(p) + (p.credit ? '<p class="pd-note">' + esc(p.credit) + '</p>' : '');
    document.getElementById('pd-venue').innerHTML = '<em>' + esc(p.venue) + '</em> · ' + p.year;
    document.getElementById('pd-title').textContent = p.title;
    document.getElementById('pd-authors').innerHTML = p.authors;
    document.getElementById('pd-body').innerHTML =
      p.summary.map(function (s) { return '<p>' + esc(s) + '</p>'; }).join('') +
      (p.findings && p.findings.length ? '<h4>Key findings</h4><ul>' + p.findings.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '') +
      (p.methods && p.methods.length ? '<h4>Methods</h4><div class="tags">' + tags(p) + '</div>' : '');
    document.getElementById('pd-actions').innerHTML = p.doi
      ? '<a class="pd-doi" href="https://doi.org/' + esc(p.doi) + '" target="_blank" rel="noopener">Read the paper ↗</a><span class="pd-doi-text">doi:' + esc(p.doi) + '</span>'
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

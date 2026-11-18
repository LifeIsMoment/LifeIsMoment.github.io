// Regression test: the theme button must never select the <html> root.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const js = readFileSync('assets/js/jy-site.js','utf8');
assert.ok(js.includes("document.querySelector('button[data-theme]')"), 'theme control must be scoped to a button');
assert.ok(!js.includes("document.querySelector('[data-theme]')"), 'unscoped selector would destroy document content');
for(const p of ["index.html","about.html","research.html","publications.html","projects.html","open-problems.html","timeline.html","contact.html"]) {
  const html=readFileSync(p,'utf8');
  assert.ok(html.includes('<main id="main">'), p+': main content absent');
  assert.ok(html.includes('/assets/js/jy-site.js?v=20261118-fix1'), p+': new JS not referenced');
  assert.ok(html.includes('data-theme'), p+': theme toggle absent');
}
console.log('Portfolio smoke checks passed');

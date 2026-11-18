// Portfolio regression checks: HTML, note sources, metadata, navigation and non-destructive theme toggle.
import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const js=readFileSync('assets/js/jy-site.js','utf8');
assert.ok(js.includes("document.querySelector('button[data-theme]')"), 'theme button selector missing');
assert.ok(!js.includes("document.querySelector('[data-theme]')"), 'unscoped selector would erase the page');
const htmlPages=["index.html","about.html","research.html","publications.html","projects.html","open-problems.html","timeline.html","contact.html","notes.html","resources.html","cv.html","notes/anomaly-calibration.html","notes/checkpoint-integrity.html","notes/llm-test-selection.html","notes/evidence-grounded-rag.html","notes/manufacturing-evidence.html"];
const navPages=["/about.html","/research.html","/publications.html","/projects.html","/notes.html","/resources.html","/open-problems.html","/contact.html"];
for(const path of htmlPages){
  assert.ok(existsSync(path), 'missing page: '+path);
  const html=readFileSync(path,'utf8');
  assert.ok(html.includes('<main id="main">'), path+': main content missing');
  assert.ok(html.includes('</main>'), path+': main closing tag missing');
  assert.ok(html.includes('</html>'), path+': HTML closing tag missing');
  assert.ok(html.includes('/assets/js/jy-site.js?v=20261118-researchv2'), path+': script version mismatched');
  assert.ok(html.includes('/assets/css/jy-site.css?v=20261118-researchv2'), path+': CSS version mismatched');
  assert.ok(html.includes('button[data-theme]') || html.includes('data-theme aria-label'), path+': theme control missing');
  for(const url of navPages) assert.ok(html.includes('href="'+url+'"'), path+': navigation link absent '+url);
}
const markdown=["content/notes/anomaly-calibration.md","content/notes/checkpoint-integrity.md","content/notes/llm-test-selection.md","content/notes/evidence-grounded-rag.md","content/notes/manufacturing-evidence.md"];
for(const file of markdown) assert.ok(existsSync(file), 'note source missing '+file);
assert.ok(readFileSync('publications.html','utf8').includes('BibTeX'), 'BibTeX links missing');
for(const resource of ['assets/bib/ksci-summer-2026.bib','assets/bib/agent-harness-2026.bib']) assert.ok(existsSync(resource),'citation file missing');
for(const url of navPages){const local=url.slice(1); assert.ok(existsSync(local), 'nav destination missing '+url);}
assert.ok(!readFileSync('resources.html','utf8').includes('patent granted'), 'invalid patent status');
console.log('Research portfolio smoke checks passed: '+htmlPages.length+' HTML pages, '+markdown.length+' Markdown sources.');

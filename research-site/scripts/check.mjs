import { existsSync,readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
const root=resolve(import.meta.dirname,'..','dist');
const required=['index.html','about.html','research.html','publications.html','projects.html','notes.html','resources.html','open-problems.html','timeline.html','cv.html','contact.html','notes/anomaly-calibration.html','notes/checkpoint-integrity.html','notes/llm-test-selection.html','notes/evidence-grounded-rag.html','notes/manufacturing-evidence.html','sitemap.xml','robots.txt','assets/images/jaeseong-profile.webp'];
for(const p of required) assert.ok(existsSync(resolve(root,p)),'Build output missing '+p);
for(const p of required.filter(x=>x.endsWith('.html'))){
 const html=readFileSync(resolve(root,p),'utf8');
 assert.ok(html.includes('<main')&&html.includes('</main>'),'Broken markup '+p);
 assert.ok(html.includes('data-site="astro-academic"'),'Not rendered with Astro '+p);
 assert.ok(html.includes('<title>'),'Missing title '+p);
 assert.ok(!html.includes('document.querySelector(\'[data-theme]\')'),'Unsafe theme JS '+p);
}
const home=readFileSync(resolve(root,'index.html'),'utf8');
assert.ok(home.includes('/assets/images/jaeseong-profile.webp'),'Profile image missing');
assert.ok(home.includes('href="/publications.html"'),'Navigation missing');
const pubs=readFileSync(resolve(root,'publications.html'),'utf8');
assert.ok(pubs.includes('게재 가능 결정')&&pubs.includes('진행 중')&&pubs.includes('9791143821027'),'Publication status missing');
const problem=readFileSync(resolve(root,'open-problems.html'),'utf8');
assert.ok(problem.includes('OP-01'),'Open questions missing');
console.log('Astro academic build verified: '+required.length+' required output paths');

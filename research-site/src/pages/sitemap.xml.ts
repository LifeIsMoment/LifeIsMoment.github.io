
export function GET(){
 const entries=['','about.html','research.html','publications.html','projects.html',
 'notes.html','resources.html','open-problems.html','timeline.html','cv.html','contact.html',
 'notes/anomaly-calibration.html','notes/checkpoint-integrity.html','notes/llm-test-selection.html',
 'notes/evidence-grounded-rag.html','notes/manufacturing-evidence.html'];
 const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
 +entries.map(p=>'  <url><loc>https://lifeismoment.github.io/'+p+'</loc></url>').join('\n')
 +'\n</urlset>';
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}

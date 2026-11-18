import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const base=process.env.SITE_BASE_URL || 'https://lifeismoment.github.io';
const out=resolve('qa-artifacts');
await mkdir(out,{recursive:true});
const checks=[];
const faults=[];
let browser;
function add(name,ok,details={}) {
  const entry={name,ok,...details};
  checks.push(entry);
  console.log((ok?'PASS':'FAIL')+' '+name+JSON.stringify(details));
  if(!ok) faults.push(entry);
}
const routes=[
 {path:'/',label:'home'},
 {path:'/about.html',label:'about'},
 {path:'/research.html',label:'research'},
 {path:'/publications.html',label:'publications'},
 {path:'/projects.html',label:'projects'},
 {path:'/notes.html',label:'notes'},
 {path:'/resources.html',label:'resources'},
 {path:'/open-problems.html',label:'open-problems'},
 {path:'/timeline.html',label:'timeline'},
 {path:'/cv.html',label:'cv'},
 {path:'/contact.html',label:'contact'},
 {path:'/notes/anomaly-calibration.html',label:'note-anomaly'},
 {path:'/notes/checkpoint-integrity.html',label:'note-checkpoint'},
 {path:'/notes/llm-test-selection.html',label:'note-llm'},
 {path:'/notes/evidence-grounded-rag.html',label:'note-rag'},
 {path:'/notes/manufacturing-evidence.html',label:'note-manufacturing'}
];
try {
 browser=await chromium.launch({headless:true,args:['--disable-dev-shm-usage']});
 const ctx=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1,locale:'ko-KR',colorScheme:'light'});
 const desktop=await ctx.newPage();
 const consoleErrors=[];
 desktop.on('pageerror',e=>consoleErrors.push({type:'pageerror',message:String(e.message).slice(0,300)}));
 desktop.on('console',m=>{if(m.type()==='error')consoleErrors.push({type:'console',message:m.text().slice(0,300)})});
 desktop.on('requestfailed',req=>{if(req.url().startsWith(base))consoleErrors.push({type:'requestfailed',message:req.url()+' '+(req.failure()?.errorText||'')})});
 for(const r of routes) {
   try{
     const response=await desktop.goto(base+r.path,{waitUntil:'domcontentloaded',timeout:45000});
     await desktop.locator('main').waitFor({timeout:15000});
     const info=await desktop.evaluate(()=>{
       const main=document.querySelector('main');
       const body=document.body;
       const hero=document.querySelector('h1');
       const visibleStyle=window.getComputedStyle(body);
       return{
         title:document.title,
         dataSite:document.documentElement.getAttribute('data-site'),
         mainChars:main?.innerText?.trim()?.length||0,
         h1:hero?.innerText?.trim()||'',
         bodyColor:visibleStyle.color,
         cssSheets:document.styleSheets.length,
         brokenImgs:[...document.images].filter(im=>im.complete&&im.naturalWidth===0).map(im=>im.getAttribute('src')),
         scrollWidth:document.documentElement.scrollWidth,
         windowWidth:window.innerWidth
       };
     });
     add('route:'+r.label,Boolean(response&&response.status()<400&&info.mainChars>40),{status:response?.status(),...info});
     add('astro:'+r.label,info.dataSite==='astro-academic',{dataSite:info.dataSite});
     add('overflow:'+r.label,info.scrollWidth<=info.windowWidth+2,{scrollWidth:info.scrollWidth,windowWidth:info.windowWidth});
     if(['home','publications','notes','cv','open-problems'].includes(r.label)){
       await desktop.screenshot({path:out+'/desktop-'+r.label+'.png',fullPage:true,animations:'disabled'});
     }
   }catch(e){
     add('route:'+r.label,false,{error:String(e).slice(0,600)});
   }
 }
 // Functional checks
 try{
   await desktop.goto(base+'/publications.html',{waitUntil:'domcontentloaded'});
   const working=desktop.locator('[data-kind-filter="working"]');
   await working.click({timeout:10000});
   const visible=await desktop.locator('.pub-item:visible').count();
   add('publication filter working',visible===3,{visible});
 }catch(e){add('publication filter working',false,{error:String(e)})}
 try{
   await desktop.goto(base+'/notes.html',{waitUntil:'domcontentloaded'});
   const articleLinks=await desktop.locator('a[href^="/notes/"]').count();
   add('note links available',articleLinks>=5,{articleLinks});
 }catch(e){add('note links available',false,{error:String(e)})}
 await desktop.close();
 await ctx.close();
 const mobileContext=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,hasTouch:true,isMobile:true,locale:'ko-KR',colorScheme:'light'});
 const mobile=await mobileContext.newPage();
 for(const path of ['/', '/publications.html','/notes.html']){
   const label=path==='/'?'home':path.includes('publications')?'publications':'notes';
   try{
     const response=await mobile.goto(base+path,{waitUntil:'domcontentloaded',timeout:45000});
     const info=await mobile.evaluate(()=>({bodyChars:document.querySelector('main')?.innerText?.trim().length||0,scrollWidth:document.documentElement.scrollWidth,width:innerWidth}));
     add('mobile:'+label,Boolean(response&&response.status()<400&&info.bodyChars>30&&info.scrollWidth<=info.width+2),{status:response?.status(),...info});
     await mobile.screenshot({path:out+'/mobile-'+label+'.png',fullPage:true,animations:'disabled'});
   }catch(e){add('mobile:'+label,false,{error:String(e).slice(0,600)})}
 }
 try{
   await mobile.goto(base+'/',{waitUntil:'domcontentloaded'});
   const menu=mobile.locator('.mobile-nav summary');
   await menu.click({timeout:9000});
   const opened=await mobile.locator('.mobile-nav').evaluate(el=>el.hasAttribute('open'));
   const visibleLinks=await mobile.locator('.mobile-links a:visible').count();
   add('mobile menu',opened&&visibleLinks>=7,{opened,visibleLinks});
 }catch(e){add('mobile menu',false,{error:String(e).slice(0,600)})}
 await mobileContext.close();
 add('browser Javascript errors',consoleErrors.filter(x=>x.type==='pageerror').length===0,{errors:consoleErrors});
 const summary={base,checkedAt:new Date().toISOString(),checks,failures:faults,consoleErrors,pass:!faults.length};
 await writeFile(out+'/qa-report.json',JSON.stringify(summary,null,2),'utf8');
 await writeFile(out+'/qa-summary.md',
  '# Deployed research site browser QA\n\n'+
  '- URL: '+base+'\n- Checked: '+summary.checkedAt+'\n'+
  '- Result: '+(summary.pass?'PASS':'FAIL')+'\n\n'+
  checks.map(x=>'- '+(x.ok?'PASS':'FAIL')+' '+x.name+'\n').join('')+
  '\n'+(faults.length?'## Failures\n\n'+faults.map(x=>'- '+JSON.stringify(x)+'\n').join(''):'No failures.\n'), 'utf8');
 console.log('RESULT '+JSON.stringify({passed:checks.length-faults.length,failed:faults.length,shots:8,base}));
 if(faults.length)process.exitCode=1;
}finally{await browser?.close()}

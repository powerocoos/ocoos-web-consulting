/* Ocoos Web Consulting - site-wide scripts. Each block guards itself so it only acts on its own page type. */
/* ---- Blog list ---- */
document.addEventListener('DOMContentLoaded',function(){try{
var g=document.querySelector('.blog-basic-grid'); if(!g)return;
var h=document.querySelector('main .page-section h1'); if(!h)return;
h.closest('.page-section').classList.add('ocb-banner');
if(!document.querySelector('.ocb-sub')){var p=document.createElement('p');p.className='ocb-sub';p.textContent='Web design, SEO and Google Ads tips for Ocala and Gainesville businesses.';h.insertAdjacentElement('afterend',p)}
}catch(e){}});
/* ---- Blog post ---- */
(function(){function go(){try{var c=document.querySelector('.blog-item-content'); if(!c||document.getElementById('ocb-progress'))return;
var b=document.createElement('div');b.id='ocb-progress';document.body.appendChild(b);
var art=document.querySelector('.blog-item-wrapper')||c;
function up(){var r=art.getBoundingClientRect(),h=r.height-innerHeight;var p=h>0?Math.min(1,Math.max(0,-r.top/h)):0;b.style.width=(p*100)+'%'}
addEventListener('scroll',up,{passive:true});addEventListener('resize',up);up();
var d=document.createElement('div');d.className='ocb-cta';
d.innerHTML='<h3>Need help with your website or Google Ads?</h3><p>Ocoos Web Consulting builds, repairs and promotes websites for Ocala and Gainesville businesses. Talk to a real person today.</p><div class="row"><a class="ocb-btn l" href="tel:+13523278554">Call (352) 327-8554</a><a class="ocb-btn g" href="/contact">Get a free consultation</a></div>';
c.appendChild(d)}catch(e){}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();})();

/* Digital Advertising page */
if(document.querySelector('.oda')){
(function(){
  var root=document.documentElement; root.classList.add('oda-js');
  var ds=document.querySelectorAll('.oda #faq details');
  ds.forEach(function(d){d.addEventListener('toggle',function(){if(d.open)ds.forEach(function(o){if(o!==d)o.open=false})})});
  var rv=document.querySelectorAll('.oda .rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    rv.forEach(function(el){io.observe(el)});
  }else{rv.forEach(function(el){el.classList.add('in')})}
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('.oda [data-ev]'); if(!a)return;
    try{window.gtag&&gtag('event',a.getAttribute('data-ev'),{event_category:'da_page'})}catch(x){}
    try{(window.dataLayer=window.dataLayer||[]).push({event:a.getAttribute('data-ev')})}catch(x){}
  });
})();
}
(function(){
if(!document.querySelector('.occ'))return;
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('.occ [data-ev]'); if(!a)return;
  try{window.gtag&&gtag('event',a.getAttribute('data-ev'),{event_category:'contact_page'})}catch(x){}
  try{(window.dataLayer=window.dataLayer||[]).push({event:a.getAttribute('data-ev')})}catch(x){}
});
})();


/* ===== Header navigation upgrade ===== */
(function(){
  try{
    var h=document.getElementById('header');
    if(h){
      var on=function(){h.classList.toggle('oc-scrolled',(window.pageYOffset||document.documentElement.scrollTop)>8)};
      window.addEventListener('scroll',on,{passive:true});on();
    }
    var S=function(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'};
    var M={
      '/website-development-ocala-florida':[S('<rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 21h8M12 18v3"></path>'),'Fast, clear sites built to convert'],
      '/seo-ocala-florida':[S('<circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path>'),'Get found by customers on Google'],
      '/digital-advertising':[S('<path d="M3 11v2a1 1 0 001 1h3l5 4V6L7 10H4a1 1 0 00-1 1z"></path><path d="M16 8a5 5 0 010 8"></path>'),'Google Ads that bring in calls'],
      '/branding-graphic-design-ocala-florida':[S('<path d="M12 3a9 9 0 100 18 2 2 0 002-2c0-1-1-1.5-1-2.5S14 15 15 15h2a4 4 0 004-4c0-4-4-8-9-8z"></path><circle cx="7.5" cy="11" r="1"></circle><circle cx="11" cy="7.5" r="1"></circle>'),'Logos and visuals people remember']
    };
    document.querySelectorAll('.header-nav-folder-item a').forEach(function(a){
      if(a.getAttribute('data-oc'))return;
      var m=M[(a.getAttribute('href')||'').replace(/\/$/,'')];
      var c=a.querySelector('.header-nav-folder-item-content');
      if(!m||!c)return;
      a.setAttribute('data-oc','1');
      var i=document.createElement('span');i.className='oc-nav-ico';i.innerHTML=m[0];
      var d=document.createElement('span');d.className='oc-nav-desc';d.textContent=m[1];
      c.appendChild(d);a.insertBefore(i,c);
    });
  }catch(e){}
})();


/* ===== Website design landing page: tag the form section as the #oc-quote anchor ===== */
(function(){
  function go(){try{
    if(!document.getElementById('oda-w'))return;
    var f=document.querySelector('main .page-section form');
    var s=f&&f.closest('.page-section'); if(!s||s.id==='oc-quote')return;
    s.id='oc-quote'; s.classList.add('oc-quote-band');
  }catch(e){}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();

var hd=document.getElementById('hd'),t=document.getElementById('t'),tm;
addEventListener('scroll',function(){hd.classList.toggle('s',scrollY>30)},{passive:true});
document.getElementById('bg').onclick=function(){document.body.classList.toggle('open')};
document.querySelectorAll('a[href="#"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();document.body.classList.remove('open');if(a.classList.contains('soon')){t.classList.add('show');clearTimeout(tm);tm=setTimeout(function(){t.classList.remove('show')},2200)}else{scrollTo({top:0})}})});
var io=new IntersectionObserver(function(es){es.forEach(function(e,i){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('in')},(i%4)*90);io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')})});

/* Resource filter tabs */
document.querySelectorAll('.tab').forEach(function(tb){tb.addEventListener('click',function(){
document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('on')});tb.classList.add('on');
var c=tb.dataset.cat;document.querySelectorAll('[data-cat].card').forEach(function(el){el.classList.toggle('hide',c!=='all'&&el.dataset.cat!==c)})})});
/* Forms: front-end only. Connect to a backend or form service (Formspree, Netlify Forms, etc.) */
document.querySelectorAll('form[data-form]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();
var o=f.querySelector('.ok');if(o)o.textContent='Thank you! We have received your message.';f.reset()})});

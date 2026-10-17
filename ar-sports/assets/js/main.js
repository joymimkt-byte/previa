(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',function(){var a=nav.classList.toggle('aberto');btn.setAttribute('aria-expanded',a);document.body.style.overflow=a?'hidden':'';});}
  document.querySelectorAll('.drop>a').forEach(function(a){
    a.addEventListener('click',function(e){if(window.innerWidth<=960){e.preventDefault();a.parentElement.classList.toggle('aberto');}});
  });
  document.querySelectorAll('[data-carrossel]').forEach(function(w){
    var c=w.querySelector('.carrossel');
    w.querySelectorAll('.setas button').forEach(function(b,i){b.addEventListener('click',function(){c.scrollBy({left:(i?1:-1)*c.clientWidth*0.8,behavior:'smooth'});});});
  });
})();
document.querySelectorAll('.video[data-yt]').forEach(function(v){
  v.addEventListener('click',function(){var f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+v.dataset.yt+'?autoplay=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;f.title=v.dataset.title||'Depoimento em vídeo';v.innerHTML='';v.appendChild(f);},{once:true});
});

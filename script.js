"use strict";
const button = document.querySelector('.menu-button');
const nav = document.querySelector('#navigation');
const narrow = window.matchMedia('(max-width: 960px)');
function resetMenu(){button.hidden=!narrow.matches;nav.classList.toggle('is-collapsed',narrow.matches);button.setAttribute('aria-expanded',String(!narrow.matches));}
resetMenu();narrow.addEventListener('change',resetMenu);
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-collapsed',!open);});
nav.addEventListener('click',(event)=>{if(event.target.closest('a') && narrow.matches) resetMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape' && narrow.matches && button.getAttribute('aria-expanded')==='true'){resetMenu();button.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){nav.querySelectorAll('a[href^="#"]').forEach(a=>{const active=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -60% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}

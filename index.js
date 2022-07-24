let bg = document.querySelector('.bg')
let moon = document.querySelector('.moon');
let mountain = document.querySelector('.mountain');
let road = document.querySelector('.road');
let header_text = document.querySelector('.header-text')
window.addEventListener('scroll', ()=>{
  let scrollY = window.scrollY;
  bg.style.top = scrollY *0.5 + 'px';
  moon.style.left = - scrollY *0.5 + 'px';
  mountain.style.top = - scrollY *0.15 + 'px';
  road.style.top = scrollY *0.15 + 'px';
  header_text.style.top = scrollY*1 + 'px';

})
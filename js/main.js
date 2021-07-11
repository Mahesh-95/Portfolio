const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-item');
const point = document.querySelector('.cursor-point');

window.addEventListener('mousemove', (e)=>{
    mouseCursor.style.top = e.pageY+'px';
    mouseCursor.style.left = e.pageX+'px';
    point.style.top = e.pageY+'px';
    point.style.left = e.pageX+'px';
});

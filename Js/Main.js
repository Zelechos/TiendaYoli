'use strict'

document.addEventListener("mousemove",parallax);

function parallax(Evento){
    this.querySelectorAll('.layer').forEach(layer=>{
        const speed = layer.getAttribute('data-speed') 
        const x = (window.innerWidth - Evento.pageX*speed)/85
        const y = (window.innerHeight - Evento.pageY*speed)/85
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

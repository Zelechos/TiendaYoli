document.addEventListener("mousemove",parallax);


document.addEventListener("mouseenter",h);

function parallax(Evento){
    this.querySelectorAll('.layer').forEach(layer=>{
    const speed = layer.getAttribute('data-speed') 
    const x = (window.innerWidth - Evento.pageX*speed)/110
    const y = (window.innerHeight - Evento.pageY*speed)/110
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

function h(){
    console.log("hola");
}
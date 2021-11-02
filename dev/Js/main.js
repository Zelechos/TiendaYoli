'use strict'
window.addEventListener('load', () =>{
    //Animacion parallax de la imagenes de las ropas 
    document.addEventListener("mousemove", Parallax);

    function Parallax(Evento){
        this.querySelectorAll('.layer').forEach(layer=>{
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - Evento.pageX*speed)/85;
            const y = (window.innerHeight - Evento.pageY*speed)/85;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    //Modulo utilizando jquery para el funcionamiento del toggle
    $(document).ready(()=>{
        $('.toggle').click(()=>{
            $('ul').toggleClass('active');
        });

        $('.logo').click(()=>{
            $('ul').toggleClass('active');
        });
    });
    
});

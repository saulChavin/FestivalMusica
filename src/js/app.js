document.addEventListener('DOMContentLoaded',function(){
    scrollNav();
    navegacionFija();
})

function navegacionFija(){
    const barra= document.querySelector('.header');


    //Registrar el intersection Observer
    // observer revisa si un elemento esta visible o no en la ventana del Navegador
    const observer = new IntersectionObserver(function(entries){//entries no da la informacion del elemento a observar
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo')
        }
    });

    //Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));

}
function scrollNav(){
    const enlaces=document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();
            const seccion= document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior:'smooth'
            })

        });
    });
}
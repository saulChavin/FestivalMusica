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
document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();

});

function crearGaleria(){
    const galeria= document.querySelector('.galeria-imagenes');
    for(let i=1 ; i<=12 ; i++){
        const imagen= document.createElement('IMG'); //genero la imagen
        imagen.src =`build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId=i; //permite crear atributos personalizados 
        //añadir la funcion de mostrar  imagen 
        imagen.onclick=mostrarImagen; //agrega un evento
        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id= parseInt(e.target.dataset.imagenId);

    //genera la imagen 
    const imagen= document.createElement('IMG');
    imagen.src= `build/img/grande/${id}.webp`;

    const overlay=document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cuando se da click se cierra la imagen
    overlay.onclick=function(){
        overlay.remove();
    }

    //botton para cerrar la imagen
    const cerrarImagen= document.createElement('P');
    cerrarImagen.textContent='X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

    //cuando se preciona se cierra la imagen
    cerrarImagen.onclick= function(){
        overlay.remove();
    }


    //mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');


}

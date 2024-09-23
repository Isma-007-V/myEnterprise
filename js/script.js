let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
const btnLanzarModalG = document.querySelector('#lanzar-modal-galery');
const modalG = document.querySelector('.modal__close__galery');
const contModalG = document.querySelector('.contenedor-modal-galery');


let contador = 0;

boton.addEventListener("click", function(){
    if(contador == 0){
        enlaces.className = ("enlaces dos")
        contador = 1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador=0;
    }
});

/* funcion para slider de imagen */
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


btnLanzarModalG.addEventListener('click', (e) =>{
    contModalG.classList.add('mostrar');
  });
  
  modalG.addEventListener('click', (e) => {
    contModalG.classList.remove('mostrar');
  })
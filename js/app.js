const btnLanzarModal = document.querySelector('#lanzar-modal');
const btnLanzarModalVideo = document.querySelector('#lanzar-modal-video');

const btnOcultarModal = document.querySelector('#ocultar-modal');


const modal = document.querySelector('.modal__close');
const modalVideo = document.querySelector('.modal__close__video');

const contModal = document.querySelector('.contenedor-modal');
const contModalVideo = document.querySelector('.contenedor-modal-video');





btnLanzarModal.addEventListener('click', (e) => {
    
    contModal.classList.add('mostrar');
});

modal.addEventListener('click', (e) => {

  contModal.classList.remove('mostrar')
});

btnLanzarModalVideo.addEventListener('click', (e) =>{
  contModalVideo.classList.add('mostrar');
});

modalVideo.addEventListener('click', (e) => {
  contModalVideo.classList.remove('mostrar');
})





const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_vnzjvvm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
          btn.value = 'Send Email';
          swal("Click on either the button or outside the modal.")
            .then((value) => {
              this.reset();
            });
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

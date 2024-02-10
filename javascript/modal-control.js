 let modal_wrapper = document.querySelector('.modal__wrapper');
 let modaController = document.querySelector('.avatar')

 modaController.addEventListener('click', function(){
     modal_wrapper.classList.toggle('open');
     document.querySelector('body').style.overflow = 'hidden';
 })
 modal_wrapper.addEventListener('click', function(){
     modal_wrapper.classList.remove('open');
     document.querySelector('body').style.overflow = '';
 })
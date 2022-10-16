const logoMenu=document.querySelector('.hamburguesa');
const menu=document.querySelector('.contenedor-navegacion');


logoMenu.addEventListener('click',toggleMenu);

function toggleMenu(){
menu.classList.toggle('inactive');


}


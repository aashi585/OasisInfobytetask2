let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');
}
window.onscroll= () =>{
  menu.classList.toggle('bx-x');
navbar.classList.toggle('active');  
}
let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
ScrollReveal({ //reset: true,
    distance : '120px',
    duration : 2000,
    delay : 280,
 });
 ScrollReveal().reveal('.content, .heading, .home-img, .about-content', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .about-img, .contact-form, .courses-container', { origin: 'bottom' });
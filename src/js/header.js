




const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-header');
const navLinks = document.querySelectorAll('.nav-header a');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});
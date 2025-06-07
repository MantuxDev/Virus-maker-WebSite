function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('show');
    document.getElementById('hamburger').classList.remove('active');
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY>50){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});

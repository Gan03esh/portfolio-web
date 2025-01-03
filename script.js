/*===============toggle icon navbar==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*===============Scroll section active link==========*/
let sections = document.querySelectorAll('sections');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });

        };
    });
    /*===============sticky navbar==========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*===============remove toggle icon and navbar when click navbar link(scroll)==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*========scroll reveal======*/
ScrollReveal({
     reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.Skills li', { origin: 'right' });
ScrollReveal().reveal('.Skills h1', { origin: 'top' });

/*==============typed js===============*/
const typed = new Typed('.multiple-text', {
    strings: [' FrontEnd-Developer', 'BackEnd Developer', 'Full-Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

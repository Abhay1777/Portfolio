const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover-active'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover-active'));
});

const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {

    header.classList.toggle('sticky', window.scrollY > 80);

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const words = ["Full Stack Developer.", "IT Student."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeTarget = document.querySelector('.typing-text');

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {

        typeTarget.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {

        typeTarget.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {

        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if(typeTarget) setTimeout(typeEffect, 1000);
});

const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const defaultReveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');


    });
}, revealOptions);

revealElements.forEach(el => {
    defaultReveal.observe(el);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);
});

const contactForm = document.getElementById('contactForm');
const formError = document.getElementById('form-error');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {

        if (window.location.protocol === 'file:') {
            e.preventDefault();
            if (formError) {
                formError.innerHTML = "<strong>Local Block Detected:</strong> FormSubmit blocked this because you are opening a local file (file:///). To send the message correctly, you MUST open this page through Live Server or host it online.";
                formError.style.display = 'block';
            } else {
                alert("Please use Live Server to send emails.");
            }
        }
    });
}

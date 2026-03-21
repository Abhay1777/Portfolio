/* =========================================
   CUSTOM CURSOR
   ========================================= */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add slight delay to outline for smooth trailing effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Add hover effect to links and buttons
const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover-active'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover-active'));
});

/* =========================================
   STICKY NAVBAR & ACTIVE LINK
   ========================================= */
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    // Sticky Header
    header.classList.toggle('sticky', window.scrollY > 80);

    // Active Link Scroll Highlight
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

/* =========================================
   MOBILE MENU TOGGLE
   ========================================= */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu on click
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* =========================================
   DYNAMIC TYPING EFFECT
   ========================================= */
const words = ["Full Stack Developer.", "IT Student.", "Digital Artist."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeTarget = document.querySelector('.typing-text');

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove char
        typeTarget.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add char
        typeTarget.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Speed logic
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    if(typeTarget) setTimeout(typeEffect, 1000);
});

/* =========================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================= */
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const defaultReveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed
        // observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    defaultReveal.observe(el);
});

// Trigger initial reveal for elements in view on load
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

/* =========================================
   CONTACT FORM HANDLER (API VERIFICATION)
   ========================================= */
const contactForm = document.getElementById('contactForm');
const formError = document.getElementById('form-error');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // FormSubmit security blocks file:/// URLs
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

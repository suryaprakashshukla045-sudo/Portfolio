window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);

});


// ==========================
// Typing Animation
// ==========================

const typingText = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "UI Designer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ==========================
// Scroll Reveal Animation
// ==========================

const revealElements =
    document.querySelectorAll(
        ".about-card,.project-card,.skill,.contact-form"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }
    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ==========================
// Navbar Background
// ==========================

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(15,23,42,.9)";

        header.style.boxShadow =
            "0 0 20px rgba(0,0,0,.3)";

    } else {

        header.style.background =
            "rgba(15,23,42,.5)";

        header.style.boxShadow = "none";
    }

});


// ==========================
// Active Menu Highlight
// ==========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn =
    document.getElementById("menu-btn");

const navMenu =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


// ==========================
// Contact Form Demo
// ==========================

const form =
    document.querySelector(
        ".contact-form"
    );

form.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Message Sent Successfully 🚀"
        );

        form.reset();

    }
);


// ==========================
// Mouse Glow Effect
// ==========================

const body =
    document.querySelector("body");

body.addEventListener(
    "mousemove",
    (e) => {

        let x = e.clientX;
        let y = e.clientY;

        body.style.backgroundPosition =
            `${x / 50}px ${y / 50}px`;

    }
);


// ==========================
// Project Card Hover Sound
// (Optional)
// ==========================

// Future Upgrade


// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(
    scrollBtn
);

scrollBtn.style.position =
    "fixed";

scrollBtn.style.right =
    "20px";

scrollBtn.style.bottom =
    "20px";

scrollBtn.style.width =
    "50px";

scrollBtn.style.height =
    "50px";

scrollBtn.style.border =
    "none";

scrollBtn.style.borderRadius =
    "50%";

scrollBtn.style.background =
    "cyan";

scrollBtn.style.color =
    "black";

scrollBtn.style.fontSize =
    "22px";

scrollBtn.style.cursor =
    "pointer";

scrollBtn.style.display =
    "none";

scrollBtn.style.zIndex =
    "999";

window.addEventListener(
    "scroll",
    () => {

        if (
            document.documentElement
                .scrollTop > 300
        ) {

            scrollBtn.style.display =
                "block";

        } else {

            scrollBtn.style.display =
                "none";

        }

    }
);

scrollBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
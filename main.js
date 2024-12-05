
// Handle hover sounds for buttons
const hoverElements = [
    document.getElementById('readMoreBtn'),
    document.getElementById('hireBtn'),
    document.getElementById('contactBtn'),
    document.getElementById('pcBuilderBtn'),
    document.getElementById('pcTechnicianBtn'),
    document.getElementById('mamayotayBtn'),
    document.getElementById('sendMessageBtn')
];

hoverElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        document.getElementById('hoverSound').play();
    });
});

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#99d1b1" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#38a584", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3.5, direction: "none", random: false, out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

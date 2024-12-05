const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Select all social icons
const socialIcons = document.querySelectorAll(".social-icon");

// Add click event listeners to each social icon
socialIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default behavior of <a> tag
        const link = icon.getAttribute("data-link"); // Get the link from the data-link attribute
        if (link) {
            window.open(link, "_blank"); // Open the link in a new tab
        }
    });
});

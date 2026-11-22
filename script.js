console.log("My portfolio website is running!");

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
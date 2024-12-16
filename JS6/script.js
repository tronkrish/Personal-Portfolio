// JavaScript to toggle the mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Loading Screen

let preload = document.querySelector(".loading-screen")
let body = document.querySelector("body")
let minTime = 2000;

window.addEventListener("load",()=>
{
    this.setTimeout(()=>
    {
        preload.style.display = "none"
        body.style.display = "block"
    },minTime)
})

const roles = ["Frontend Developer", "MERN Stack Developer", "Web Designer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 150; // Typing speed in milliseconds
const deletingSpeed = 100; // Deleting speed in milliseconds
const delayBetweenRoles = 1500; // Delay before switching roles
const roleElement = document.getElementById("role");

function typeRole() {
    if (charIndex < roles[index].length) {
        roleElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(deleteRole, delayBetweenRoles);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, deletingSpeed);
    } else {
        index = (index + 1) % roles.length; // Move to the next role
        setTimeout(typeRole, typingSpeed);
    }
}

// Start the animation
typeRole();
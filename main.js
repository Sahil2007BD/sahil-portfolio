const text = "Future Software Developer";
let index = 0;

function type() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return; // stop if element doesn't exist

    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}

type();


document.addEventListener("DOMContentLoaded", () => {

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if(toggle && nav){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

});
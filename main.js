// ---------------- TYPING EFFECT ----------------

document.addEventListener("DOMContentLoaded", () => {

const text = "Future Software Developer";
let index = 0;
const typingElement = document.getElementById("typing");

function type(){
if(!typingElement) return;

if(index < text.length){
typingElement.textContent += text.charAt(index);
index++;
setTimeout(type,70);
}
}

type();


// ---------------- MOBILE MENU ----------------

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");
menuToggle.classList.toggle("active");

});

}



// ---------------- DARK MODE ----------------

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){
themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeToggle.textContent="☀️";
}else{
themeToggle.textContent="🌙";
}

});
}


// ---------------- NAVBAR SCROLL EFFECT ----------------

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");
if(!navbar) return;

if(window.scrollY > 50){
navbar.style.background="rgba(255,255,255,0.6)";
}else{
navbar.style.background="rgba(255,255,255,0.25)";
}

});


// ---------------- SCROLL ANIMATION ----------------

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".page-wrapper").forEach(el => {
el.classList.add("fade-in");
observer.observe(el);
});

});

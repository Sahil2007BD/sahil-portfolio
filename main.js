document.addEventListener("DOMContentLoaded", () => {
// ---------------- TYPING EFFECT ----------------

const texts = [
"Future Software Developer",
"Web Developer",
"CSE Student"
];

let textIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");
let isDeleting = false;

function typeEffect(){

if(!typingElement) return;

let currentText = texts[textIndex];

if(isDeleting){
typingElement.textContent = currentText.substring(0,charIndex--);
}else{
typingElement.textContent = currentText.substring(0,charIndex++);
}

let speed = isDeleting ? 40 : 80;

if(!isDeleting && charIndex === currentText.length){
speed = 1500;
isDeleting = true;
}

if(isDeleting && charIndex === 0){
isDeleting = false;
textIndex++;
if(textIndex >= texts.length){
textIndex = 0;
}
speed = 500;
}

setTimeout(typeEffect, speed);

}

typeEffect();


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

const toggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
toggle.textContent="☀️";
}

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent="☀️";
localStorage.setItem("theme","dark");
}else{
toggle.textContent="🌙";
localStorage.setItem("theme","light");
}

});


// ---------------- NAVBAR SCROLL EFFECT ----------------

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");
if(!navbar) return;

if(window.scrollY > 50){

if(document.body.classList.contains("dark")){
navbar.style.background="rgba(15,23,42,0.9)";
}else{
navbar.style.background="rgba(255,255,255,0.6)";
}

}else{

if(document.body.classList.contains("dark")){
navbar.style.background="rgba(15,23,42,0.7)";
}else{
navbar.style.background="rgba(255,255,255,0.25)";
}

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

// ---------------- PAGE TRANSITION ----------------

// ---------------- PAGE TRANSITION ----------------

document.body.classList.add("fade-in");

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

const target = this.getAttribute("href");

if(target && target.endsWith(".html")){

e.preventDefault();

document.body.classList.add("fade-out");

setTimeout(() => {
window.location = target;
}, 15);

}

});

});


// ---------------- INTRO ANIMATION ----------------

// ---------------- INTRO ANIMATION (20 MIN RULE) ----------------

// ---------------- INTRO ANIMATION (20 MIN RULE) ----------------

// ---------------- INTRO ANIMATION (20 MIN RULE) ----------------

const loader = document.getElementById("intro-loader");

const lastVisit = localStorage.getItem("introTime");
const now = Date.now();
const twentyMinutes = 20 * 60 * 1000;

function showPage(){
document.body.classList.add("loaded");
}

if(!lastVisit || (now - lastVisit) > twentyMinutes){

setTimeout(() => {

if(loader){
loader.classList.add("hide");
}

showPage();

},800);

localStorage.setItem("introTime", now);

}else{

if(loader){
loader.style.display = "none";
}

showPage();

}
// MOUSE GLOW EFFECT

const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove",(e)=>{

mouseX = e.clientX + window.scrollX;
mouseY = e.clientY + window.scrollY;

});

function animateGlow(){

glowX += (mouseX - glowX) * 0.08;
glowY += (mouseY - glowY) * 0.08;

glow.style.left = glowX + "px";
glow.style.top = glowY + "px";

requestAnimationFrame(animateGlow);

}

animateGlow();

// CARD 3D HOVER EFFECT

const cards = document.querySelectorAll(".card-1, .card-2");

cards.forEach(card => {

card.addEventListener("mousemove", (e)=>{

const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateX = (y - centerY) / 10;
const rotateY = (centerX - x) / 10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

});

card.addEventListener("mouseleave", ()=>{
card.style.transform = "rotateX(0) rotateY(0) scale(1)";
});

});

// PARTICLE BACKGROUND
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speedX:(Math.random()-0.5)*0.5,
speedY:(Math.random()-0.5)*0.5
});
}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.speedX;
p.y+=p.speedY;

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fillStyle="rgba(59,108,255,0.5)";
ctx.fill();

});

requestAnimationFrame(animateParticles);
}

animateParticles();













});
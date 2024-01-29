const btn = document.getElementById("toggle");

const nav = document.getElementById("nav");

btn.addEventListener("click", toggleActive);

function toggleActive() {
    nav.classList.toggle("active");
}
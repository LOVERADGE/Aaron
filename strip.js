// Show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
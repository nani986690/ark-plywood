// YEAR
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("mobileMenu").style.display = "none";
// MOBILE MENU TOGGLE
document.getElementById("ham").onclick = () => {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

// Close sidebar when link is clicked
document.querySelectorAll(".sidebar-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileMenu").style.display = "none";
  });
});

// HERO SLIDER
const slides = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.getElementById("dots");

slides.forEach((s, i) => {
  const d = document.createElement("div");
  d.className = "dot" + (i === 0 ? " active" : "");
  d.onclick = () => goSlide(i);
  dotsContainer.appendChild(d);
});

const dots = Array.from(document.querySelectorAll(".dot"));
let index = 0;

function show() {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
}

function goSlide(i) {
  index = i;
  show();
  restart();
}

function next() {
  index = (index + 1) % slides.length;
  show();
}

// auto-advance every 4000ms (4s) — infinite loop
let timer = setInterval(next, 4000);
function restart() {
  clearInterval(timer);
  timer = setInterval(next, 4000);
}

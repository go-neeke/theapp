// Smooth scroll for anchor links
function smoothTo(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mnav = document.getElementById("mnav");

function closeMenu() {
  if (!mnav) return;
  mnav.classList.remove("show");
  mnav.setAttribute("aria-hidden", "true");
  if (hamburger) hamburger.setAttribute("aria-expanded", "false");
}

if (hamburger && mnav) {
  hamburger.addEventListener("click", () => {
    const isOpen = mnav.classList.toggle("show");
    mnav.setAttribute("aria-hidden", String(!isOpen));
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // close when click a link
  mnav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    closeMenu();
  });
}

// Apply smooth scrolling to all internal anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    closeMenu();
    history.replaceState(null, "", href);
    smoothTo(href);
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-in");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Contact form demo
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("문의가 접수되었습니다.\n빠르게 연락드릴게요!");
    form.reset();
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());


/* ===== Hero Slider Logic ===== */
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  current = index;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

setInterval(() => {
  const next = (current + 1) % slides.length;
  showSlide(next);
}, 5000);

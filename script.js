// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// scroll fade-in
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

fades.forEach(el => observer.observe(el));

// contact form (임시)
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("문의 감사합니다! 곧 연락드릴게요 🙂");
});

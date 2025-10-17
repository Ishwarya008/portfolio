// Smooth Scroll to Sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
  this.reset();
});

// 🌙 Dark Mode Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ⌨️ Typing Animation Text
const roles = ["Web Developer", "Designer", "Computer Science Student"];
let roleIndex = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
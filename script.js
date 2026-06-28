const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const newsletterForm = document.querySelector(".newsletter-form");
const footerNewsletterForm = document.querySelector(".footer-newsletter-form");

function updateHeaderBackground() {
  if (window.scrollY > 80) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeaderBackground);
window.addEventListener("load", updateHeaderBackground);

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuToggle.textContent = "×";
    menuToggle.setAttribute("aria-label", "Close menu");
  } else {
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

function handleSubscription(event) {
  event.preventDefault();
  alert("Thank you for subscribing to ModuSole!");
  event.target.reset();
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", handleSubscription);
}

if (footerNewsletterForm) {
  footerNewsletterForm.addEventListener("submit", handleSubscription);
}
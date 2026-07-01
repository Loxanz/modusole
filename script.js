const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const newsletterForm = document.querySelector(".newsletter-form");
const footerNewsletterForm = document.querySelector(".footer-newsletter-form");
const contactForm = document.getElementById("contactForm");

const googleFormModal = document.getElementById("googleFormModal");
const googleFormTitle = document.getElementById("googleFormTitle");
const googleFormFrame = document.getElementById("googleFormFrame");
const closeGoogleFormButton = document.getElementById("closeGoogleForm");
const openGoogleFormButtons = document.querySelectorAll("[data-open-google-form]");

let lastFocusedElement = null;

function updateHeaderBackground() {
  if (window.scrollY > 80) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeaderBackground, { passive: true });
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

function handleContactSubmit(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We will get back to you soon.");
  event.target.reset();
}

if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit);
}

function openGoogleForm(event) {
  const button = event.currentTarget;
  const heading = button.getAttribute("data-form-heading") || "ModuSole Order Form";

  lastFocusedElement = document.activeElement;
  googleFormTitle.textContent = heading;

  if (googleFormFrame && !googleFormFrame.src && googleFormFrame.dataset.src) {
    googleFormFrame.src = googleFormFrame.dataset.src;
  }

  googleFormModal.classList.add("active");
  googleFormModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (closeGoogleFormButton) {
    closeGoogleFormButton.focus();
  }
}

function closeGoogleForm() {
  googleFormModal.classList.remove("active");
  googleFormModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

openGoogleFormButtons.forEach((button) => {
  button.addEventListener("click", openGoogleForm);
});

if (closeGoogleFormButton) {
  closeGoogleFormButton.addEventListener("click", closeGoogleForm);
}
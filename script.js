// Contact Form Validation Script
document.addEventListener("DOMContentLoaded", 
    function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      document.getElementById("formMessage").style.display = "block";
      contactForm.reset();
    } else {
      alert("⚠️ Please fill out all fields correctly.");
    }
  });
});

// Contact Form Validation Script
document.addEventListener("DOMContentLoaded", 
    function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      document.getElementById("formMessage").style.display = "block";
      contactForm.reset();
    } else {
      alert("⚠️ Please fill out all fields correctly.");
    }
  });
});

window.onscroll = function () {
  document.getElementById("topBtn").style.display =
    window.scrollY > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


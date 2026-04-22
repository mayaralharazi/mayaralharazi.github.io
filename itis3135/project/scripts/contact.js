const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields before submitting the form.";
    formMessage.style.color = "#c0392b";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#c0392b";
    return;
  }

  formMessage.textContent = "Your message was sent successfully.";
  formMessage.style.color = "#1e3a8a";

  contactForm.reset();
});

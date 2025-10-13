document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("Username");
  const passwordInput = document.getElementById("Password");
  const toggle = document.getElementById("togglePassword");

  // Validation du formulaire
  form.addEventListener("submit", function(e) {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
      e.preventDefault();
      alert("⚠️ Please fill in both fields.");
      return;
    }

    alert("✅ Login successful (simulation)");
  });

  // Bouton pour afficher / masquer le mot de passe
  toggle.addEventListener("click", function() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });
});

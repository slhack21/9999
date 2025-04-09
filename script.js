document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const sideMenu = document.getElementById("side-menu");
  const loginLink = document.getElementById("login-link");

  menuToggle?.addEventListener("click", () => sideMenu.classList.add("active"));
  closeMenu?.addEventListener("click", () => sideMenu.classList.remove("active"));

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginLink.textContent = "Déconnexion";
      loginLink.href = "#";
      loginLink.onclick = () => firebase.auth().signOut().then(() => location.reload());
    } else {
      loginLink.textContent = "Connexion";
      loginLink.href = "login.html";
    }
  });
});

function toggleDarkMode() {
  const icon = document.getElementById("theme-icon");
  document.body.classList.toggle("dark-mode");
  if (icon) {
    icon.src = document.body.classList.contains("dark-mode") ? "sun.png" : "moon.png";
  }
}
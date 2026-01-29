document.addEventListener("DOMContentLoaded", () => {
  const modeBtn = document.getElementById("modeBtn");

  // appliquer le thème sauvegardé
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  function updateModeButton() {
    if (!modeBtn) return;
    modeBtn.textContent = document.body.classList.contains("dark-mode")
      ? "🌞 Mode clair"
      : "🌙 Mode sombre";
  }

  updateModeButton();

  if (modeBtn) {
    modeBtn.addEventListener("click", () => {
      // animation
      document.body.classList.add("theme-transition");

      document.body.classList.toggle("dark-mode");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
      );

      updateModeButton();

      setTimeout(() => {
        document.body.classList.remove("theme-transition");
      }, 500);
    });
  }
});

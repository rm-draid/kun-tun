document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }

  document.getElementById("toggleButton").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkModeEnabled = document.body.classList.contains("dark-mode");
    localStorage.setItem(
      "darkMode",
      isDarkModeEnabled ? "enabled" : "disabled"
    );
  });
});

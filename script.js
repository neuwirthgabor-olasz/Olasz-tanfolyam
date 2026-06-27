document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("themeBtn");
  if (!button) return;

  function setTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    button.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  button.addEventListener("click", function () {
    const currentIsDark = document.body.classList.contains("dark");
    setTheme(currentIsDark ? "light" : "dark");
  });
});

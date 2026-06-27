document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("darkModeBtn");

  if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("dark");
  }

  if (button) {
    button.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      localStorage.setItem("darkmode", document.body.classList.contains("dark"));
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("themeBtn");

    const dark = localStorage.getItem("theme") !== "light";

    if (!dark) {
        document.body.classList.add("light");
        button.textContent = "🌙";
    } else {
        button.textContent = "☀️";
    }

    button.addEventListener("click", function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme","light");
            button.textContent="🌙";

        } else {

            localStorage.setItem("theme","dark");
            button.textContent="☀️";

        }

    });

});

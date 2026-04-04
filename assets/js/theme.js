const root = document.documentElement;

const theme = localStorage.getItem("theme");
const font = localStorage.getItem("font");

if (theme) root.setAttribute("data-theme", theme);
if (font) root.style.setProperty("--font-size", font);

function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
}

function setFont(size) {
    root.style.setProperty("--font-size", size);
    localStorage.setItem("font", size);
}
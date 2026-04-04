const root = document.documentElement;

const theme = localStorage.getItem("theme");
const font = localStorage.getItem("font");

if (theme) root.setAttribute("data-theme", theme);
else root.setAttribute("data-theme", "light");
if (font) root.style.setProperty("--font-size", font);

function toggleTheme() {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    console.log("Current theme:", current, "Next theme:", next);
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    
    // Force CSS update
    const computedStyle = getComputedStyle(root);
    const bgColor = computedStyle.getPropertyValue('--bg');
    const textColor = computedStyle.getPropertyValue('--text');
    console.log("CSS variables - BG:", bgColor, "Text:", textColor);
}

function setFont(size) {
    console.log("set font " + size)
    root.style.setProperty("--font-size", size);
    localStorage.setItem("font", size);
}
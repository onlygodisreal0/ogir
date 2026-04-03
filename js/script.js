// Theme switching
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Font size adjustment
const fontIncrease = document.getElementById('font-increase');
const fontDecrease = document.getElementById('font-decrease');
const fontSizeDisplay = document.getElementById('font-size-display');
const root = document.documentElement;

// Check for saved font size preference
const savedFontSize = localStorage.getItem('fontSize') || '16';
root.style.setProperty('--font-size-base', savedFontSize + 'px');
fontSizeDisplay.textContent = savedFontSize + 'px';

fontIncrease.addEventListener('click', () => {
    const currentSize = parseInt(root.style.getPropertyValue('--font-size-base'));
    const newSize = Math.min(currentSize + 2, 24);
    
    root.style.setProperty('--font-size-base', newSize + 'px');
    fontSizeDisplay.textContent = newSize + 'px';
    localStorage.setItem('fontSize', newSize);
});

fontDecrease.addEventListener('click', () => {
    const currentSize = parseInt(root.style.getPropertyValue('--font-size-base'));
    const newSize = Math.max(currentSize - 2, 12);
    
    root.style.setProperty('--font-size-base', newSize + 'px');
    fontSizeDisplay.textContent = newSize + 'px';
    localStorage.setItem('fontSize', newSize);
});

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

function getCurrentFontSize() {
    const computedStyle = getComputedStyle(root);
    const currentSize = computedStyle.getPropertyValue('--font-size-base');
    
    if (currentSize && currentSize !== '') {
        return parseInt(currentSize);
    }
    
    // Fallback: try to get from inline style
    const inlineSize = root.style.getPropertyValue('--font-size-base');
    if (inlineSize && inlineSize !== '') {
        return parseInt(inlineSize);
    }
    
    // Ultimate fallback: return default size
    return 16;
}

fontIncrease.addEventListener('click', () => {
    const currentSize = getCurrentFontSize();
    const newSize = Math.min(currentSize + 2, 24);
    
    root.style.setProperty('--font-size-base', newSize + 'px');
    fontSizeDisplay.textContent = newSize + 'px';
    localStorage.setItem('fontSize', newSize);
});

fontDecrease.addEventListener('click', () => {
    const currentSize = getCurrentFontSize();
    const newSize = Math.max(currentSize - 2, 12);
    
    root.style.setProperty('--font-size-base', newSize + 'px');
    fontSizeDisplay.textContent = newSize + 'px';
    localStorage.setItem('fontSize', newSize);
});

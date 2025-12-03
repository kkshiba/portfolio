const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeKey = 'portfolioTheme';

/**
 * Sets the theme class on the body and updates the toggle switch state.
 * @param {string} theme - 'dark' or 'light'.
 */
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        toggleButton.checked = true;
    } else {
        body.classList.remove('dark');
        toggleButton.checked = false;
    }
    localStorage.setItem(themeKey, theme);
}

// Check localStorage for previous theme preference on load.
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem(themeKey) || 'light'; 
    setTheme(savedTheme);
});

// Handle the switch change event.
toggleButton.addEventListener('change', () => {
    const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(newTheme);
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const rulesButton = document.getElementById('rules-button');
    const settingsButton = document.getElementById('settings-button');
    const themeSelect = document.getElementById('theme-select');

    rulesButton.addEventListener('click', () => {
        document.getElementById('rules-popup').classList.add('active');
    });

    settingsButton.addEventListener('click', () => {
        document.getElementById('settings-popup').classList.add('active');
    });

    document.querySelectorAll('.close').forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.classList.remove('active');
            });
        });
    });

    themeSelect.addEventListener('change', () => {
        const body = document.body;
        if (themeSelect.value === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    });

    // Set initial theme based on the default value
    themeSelect.dispatchEvent(new Event('change'));
});

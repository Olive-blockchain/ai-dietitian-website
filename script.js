document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Theme toggle with persistence
const toggleTheme = () => {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        if (icon) icon.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (icon) icon.textContent = '☀️';
    }
};

const applySavedTheme = () => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const icon = document.getElementById('theme-icon');
    if (saved === 'dark' || (!saved && prefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
        if (icon) icon.textContent = '☀️';
    } else if (icon) {
        icon.textContent = '🌙';
    }
};

// Update theme if system preference changes and no user choice is stored
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.getItem('theme')) {
        applySavedTheme();
    }
});

// Keep theme consistent across tabs
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') applySavedTheme();
});

// Attach toggle to button in header
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('open');
    });
}

// Apply theme on page load
applySavedTheme();

// FAQ Accordion
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});
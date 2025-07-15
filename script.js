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
const nav = document.querySelector('nav');
if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    
    // Close mobile nav when clicking on a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
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
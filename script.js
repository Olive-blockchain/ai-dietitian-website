document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light Mode Toggle (Placeholder - integrate with your settings)
// For demonstration, we'll use a simple button click to toggle
// In a real app, this would be driven by user settings and persisted.

const toggleTheme = () => {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
};

// Example: Add a button in your HTML to call toggleTheme()
// <button onclick="toggleTheme()">Toggle Dark Mode</button>

// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('nav ul');
if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});

/* -----------------------
   Health Check & Status
--------------------------*/
const statusEl = document.getElementById('server-status');
if (statusEl) {
    fetch('/health') // Adjust base URL if API hosted elsewhere
        .then(res => res.json())
        .then(data => {
            statusEl.textContent = data.status || 'online';
            statusEl.style.color = (data.status === 'healthy' || data.status === 'online') ? '#4CAF50' : '#EF4444';
        })
        .catch(() => {
            statusEl.textContent = 'offline';
            statusEl.style.color = '#EF4444';
        });
}
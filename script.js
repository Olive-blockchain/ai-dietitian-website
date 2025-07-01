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

// FAQ Accordion
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});
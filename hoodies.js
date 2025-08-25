const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
const pref = localStorage.getItem('theme');
if (pref) html.setAttribute('data-theme', pref);


toggle.addEventListener('click', () => {
const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
html.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
toggle.textContent = next === 'dark' ? '🌙' : '☀️';
});


document.getElementById('year').textContent = new Date().getFullYear();
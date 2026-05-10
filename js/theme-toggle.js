function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);

  if (theme === 'light') {
    root.style.setProperty('--bg-color', '#faf3f2');
    root.style.setProperty('--card-bg', '#fff7f7');
    root.style.setProperty('--text-color', '#1f1f1f');
    root.style.setProperty('--link-color', '#c0392b');
    root.style.setProperty('--link-hover', '#e74c3c');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.14)');
    root.style.setProperty('--accent-color', '#c0392b');
    root.style.setProperty('--button-bg', '#c0392b');
    root.style.setProperty('--hover-bg', '#f3d3d1');
    root.style.setProperty('--active-bg', '#c0392b');
    root.style.setProperty('--active-color', '#f9f1f0');
    root.style.setProperty('--input-text', '#1f1f1f');
    root.style.setProperty('--border-color', 'rgba(192, 57, 43, 0.2)');
    root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.92)');
    root.style.setProperty('--nav-shadow', '0 0 20px rgba(192, 57, 43, 0.08)');
    root.style.setProperty('--nav-border', 'rgba(192, 57, 43, 0.15)');
  } else {
    root.style.setProperty('--bg-color', '#070707');
    root.style.setProperty('--card-bg', '#131313');
    root.style.setProperty('--text-color', '#f2f2f2');
    root.style.setProperty('--link-color', '#ff4d4d');
    root.style.setProperty('--link-hover', '#ff8c8c');
    root.style.setProperty('--shadow', 'rgba(255, 0, 0, 0.18)');
    root.style.setProperty('--accent-color', '#ff3b3b');
    root.style.setProperty('--button-bg', '#ff4d4d');
    root.style.setProperty('--hover-bg', '#2d0c0c');
    root.style.setProperty('--active-bg', '#ff4d4d');
    root.style.setProperty('--active-color', '#101010');
    root.style.setProperty('--input-text', '#f0f0f0');
    root.style.setProperty('--border-color', 'rgba(255, 77, 77, 0.18)');
    root.style.setProperty('--nav-bg', 'rgba(7, 7, 7, 0.95)');
    root.style.setProperty('--nav-shadow', '0 0 20px rgba(255, 0, 0, 0.12)');
    root.style.setProperty('--nav-border', 'rgba(255, 77, 77, 0.2)');
  }
}

function toggleTheme() {
  const currentTheme = (localStorage.getItem('theme') || 'dark').toLowerCase();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

window.addEventListener('load', () => {
  const savedTheme = (localStorage.getItem('theme') || 'dark').toLowerCase();
  applyTheme(savedTheme);
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburgerButton || !mobileMenu) return;
  hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});

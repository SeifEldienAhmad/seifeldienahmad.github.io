function applyTheme(theme) {
  const root = document.documentElement;

  // إزالة أي كلاس قديم
  root.classList.remove('light', 'dark');
  root.classList.add(theme);

  // تعيين القيم حسب الثيم
  if (theme === 'light') {
    root.style.setProperty('--bg-color', '#f9f9f9');
    root.style.setProperty('--card-bg', '#ffffff');
    root.style.setProperty('--text-color', '#111');
    root.style.setProperty('--link-color', '#3366cc');
    root.style.setProperty('--link-hover', '#1a53b0');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.2)');
  } else {
    root.style.setProperty('--bg-color', '#121212');
    root.style.setProperty('--card-bg', '#1e1e1e');
    root.style.setProperty('--text-color', '#e0e0e0');
    root.style.setProperty('--link-color', '#82aaff');
    root.style.setProperty('--link-hover', '#c3f0ff');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.5)');
  }
}

function toggleTheme() {
  const currentTheme = (localStorage.getItem('theme') || 'dark').toLowerCase();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  console.log('Current Theme:', currentTheme);
  console.log('New Theme:', newTheme);

  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);

  if (typeof reloadDisqus === 'function') {
    reloadDisqus(); // لو موجودة
  }
}

window.onload = () => {
  const savedTheme = (localStorage.getItem('theme') || 'dark').toLowerCase();
  applyTheme(savedTheme);

  if (typeof reloadDisqus === 'function') {
    reloadDisqus(); // لو موجودة
  }
};

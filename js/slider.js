let currentIndex = 0;

function slide(direction) {
  const slider = document.getElementById('slider');
  const slides = slider.children.length;
  const slideWidth = 270; // عرض كل كارت + الهامش

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = slides - 1;
  if (currentIndex >= slides) currentIndex = 0;

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === 'light') {
    root.style.setProperty('--bg-color', '#f5f5f5');
    root.style.setProperty('--card-bg', '#ffffff');
    root.style.setProperty('--text-color', '#111111');
    root.style.setProperty('--accent-color', '#3366cc');
    root.style.setProperty('--slide-bg', '#ffffff');
    root.style.setProperty('--link-color', '#3366cc');
    root.style.setProperty('--link-hover', '#000000');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)');
  } else {
    root.style.setProperty('--bg-color', '#121212');
    root.style.setProperty('--card-bg', '#1e1e1e');
    root.style.setProperty('--text-color', '#e0e0e0');
    root.style.setProperty('--accent-color', '#82aaff');
    root.style.setProperty('--slide-bg', '#2b2b2b');
    root.style.setProperty('--link-color', '#82aaff');
    root.style.setProperty('--link-hover', '#ffffff');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.3)');
  }
}

function toggleDarkMode() {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function closeModal() {
  document.getElementById('imgModal').style.display = "none";
}

window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  // تفعيل المودال عند الضغط على أي صورة
  document.querySelectorAll('.project-slide img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.getElementById('imgModal');
      const modalImg = document.getElementById('modalImg');
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });
};

// تحريك السلايدر لأي عنصر حسب الـ ID
function slide(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.project-slide');
  const slideWidth = slides[0].offsetWidth + 20; // عرض الكارت + الهامش الجانبي

  // تخزين مؤشر لكل سلايدر بشكل منفصل
  if (!slide.indices) slide.indices = {};
  if (!(sliderId in slide.indices)) slide.indices[sliderId] = 0;

  // تحديث المؤشر بناءً على الاتجاه
  slide.indices[sliderId] += direction;

  // التعامل مع الحواف (loop)
  if (slide.indices[sliderId] < 0) {
    slide.indices[sliderId] = slides.length - 1;
  } else if (slide.indices[sliderId] >= slides.length) {
    slide.indices[sliderId] = 0;
  }

  // تحريك السلايدر
  slider.style.transform = `translateX(-${slide.indices[sliderId] * slideWidth}px)`;
  updateIndicators(sliderId); // تحديث المؤشرات
}

function createIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.project-slide');
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = 'indicators';

  slides.forEach((_, index) => {
    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    indicator.dataset.index = index;
    indicator.onclick = () => goToSlide(sliderId, index);
    indicatorsContainer.appendChild(indicator);
  });

  // إضافة المؤشرات بعد السلايدر
  slider.parentElement.appendChild(indicatorsContainer);
  updateIndicators(sliderId);
}

// تحديث حالة المؤشرات لتطابق السلايد الحالي
function updateIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.project-slide');
  const indicators = slider.parentElement.querySelectorAll('.indicator');
  const currentIndex = slide.indices ? slide.indices[sliderId] : 0;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

// الانتقال مباشرة إلى سلايد معين عبر المؤشر
function goToSlide(sliderId, index) {
  if (!slide.indices) slide.indices = {};
  slide.indices[sliderId] = index;
  slide(sliderId, 0); // التحديث بدون تغيير الاتجاه
}

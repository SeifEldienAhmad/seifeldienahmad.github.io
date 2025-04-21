// تحريك السلايدر لأي عنصر حسب الـ ID
function slide(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const slides = slider.children.length;
  const slideWidth = 270; // عرض الكارت + أي هامش يمين/يسار

  // تخزين مؤشر لكل سلايدر بشكل منفصل
  if (!slide.indices) slide.indices = {};
  if (!(sliderId in slide.indices)) slide.indices[sliderId] = 0;

  // تحديث المؤشر بناءً على الاتجاه
  slide.indices[sliderId] += direction;

  // التعامل مع الحواف (loop)
  if (slide.indices[sliderId] < 0) {
    slide.indices[sliderId] = slides - 1;
  } else if (slide.indices[sliderId] >= slides) {
    slide.indices[sliderId] = 0;
  }

  // تحريك السلايدر
  slider.style.transform = `translateX(-${slide.indices[sliderId] * slideWidth}px)`;
}

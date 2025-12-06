let slideWidth;

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider1');
  const slides = slider.querySelectorAll('.project-slide');
  const totalRealSlides = slides.length;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalRealSlides - 1].cloneNode(true);

  slider.insertBefore(lastClone, slides[0]);
  slider.appendChild(firstClone);

  const updatedSlides = slider.querySelectorAll('.project-slide');
  slideWidth = updatedSlides[0].offsetWidth + 20;

  slider.style.transform = `translateX(-${slideWidth}px)`;

  createIndicators('slider1');
});

function slide(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.project-slide');
  const totalSlides = slides.length;

  if (!slide.indices) slide.indices = {};
  if (!(sliderId in slide.indices)) slide.indices[sliderId] = 1;

  let newIndex = slide.indices[sliderId] + direction;

  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;

  slide.indices[sliderId] = newIndex;

  slider.addEventListener('transitionend', function handleTransitionEnd() {
    slider.removeEventListener('transitionend', handleTransitionEnd);

    if (newIndex === 0) {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${(totalSlides - 2) * slideWidth}px)`;
      slide.indices[sliderId] = totalSlides - 2;
    } else if (newIndex === totalSlides - 1) {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${slideWidth}px)`;
      slide.indices[sliderId] = 1;
    }

    updateIndicators(sliderId);
  });
}

function createIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.project-slide');
  const totalRealSlides = slides.length - 2;
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = 'indicators';

  for (let i = 0; i < totalRealSlides; i++) {
    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    indicator.dataset.index = i;
    indicator.onclick = () => goToSlide(sliderId, i + 1);
    indicatorsContainer.appendChild(indicator);
  }

  slider.parentElement.appendChild(indicatorsContainer);
  updateIndicators(sliderId);
}

function updateIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const indicators = slider.parentElement.querySelectorAll('.indicator');
  const currentIndex = slide.indices ? slide.indices[sliderId] - 1 : 0;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

function goToSlide(sliderId, targetIndex) {
  if (!slide.indices) slide.indices = {};
  const currentIndex = slide.indices[sliderId];
  const direction = targetIndex > currentIndex ? 1 : -1;
  const steps = Math.abs(targetIndex - currentIndex);

  for (let i = 0; i < steps; i++) {
    setTimeout(() => slide(sliderId, direction), i * 500);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider2');
  const slides = slider.querySelectorAll('.project-slide');
  const totalRealSlides = slides.length;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalRealSlides - 1].cloneNode(true);

  slider.insertBefore(lastClone, slides[0]);
  slider.appendChild(firstClone);

  const updatedSlides = slider.querySelectorAll('.project-slide');
  slideWidth = updatedSlides[0].offsetWidth + 20;

  slider.style.transform = `translateX(-${slideWidth}px)`;

  createIndicators('slider2');
});

function slide(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.project-slide');
  const totalSlides = slides.length;

  if (!slide.indices) slide.indices = {};
  if (!(sliderId in slide.indices)) slide.indices[sliderId] = 1;

  let newIndex = slide.indices[sliderId] + direction;

  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${newIndex * slideWidth}px)`;

  slide.indices[sliderId] = newIndex;

  slider.addEventListener('transitionend', function handleTransitionEnd() {
    slider.removeEventListener('transitionend', handleTransitionEnd);

    if (newIndex === 0) {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${(totalSlides - 2) * slideWidth}px)`;
      slide.indices[sliderId] = totalSlides - 2;
    } else if (newIndex === totalSlides - 1) {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${slideWidth}px)`;
      slide.indices[sliderId] = 1;
    }

    updateIndicators(sliderId);
  });
}

function createIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.project-slide');
  const totalRealSlides = slides.length - 2;
  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = 'indicators';

  for (let i = 0; i < totalRealSlides; i++) {
    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    indicator.dataset.index = i;
    indicator.onclick = () => goToSlide(sliderId, i + 1);
    indicatorsContainer.appendChild(indicator);
  }

  slider.parentElement.appendChild(indicatorsContainer);
  updateIndicators(sliderId);
}

function updateIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const indicators = slider.parentElement.querySelectorAll('.indicator');
  const currentIndex = slide.indices ? slide.indices[sliderId] - 1 : 0;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

function goToSlide(sliderId, targetIndex) {
  if (!slide.indices) slide.indices = {};
  const currentIndex = slide.indices[sliderId];
  const direction = targetIndex > currentIndex ? 1 : -1;
  const steps = Math.abs(targetIndex - currentIndex);

  for (let i = 0; i < steps; i++) {
    setTimeout(() => slide(sliderId, direction), i * 500);
  }
}

const sliderState = {};

function initializeSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  const slides = slider.querySelectorAll('.project-slide');
  if (!slides.length) return;

  const totalRealSlides = slides.length;
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalRealSlides - 1].cloneNode(true);

  slider.insertBefore(lastClone, slides[0]);
  slider.appendChild(firstClone);

  const updatedSlides = slider.querySelectorAll('.project-slide');
  const slideWidth = updatedSlides[0].offsetWidth + 20;

  sliderState[sliderId] = {
    index: 1,
    slideWidth,
    totalSlides: updatedSlides.length,
    realSlides: totalRealSlides,
  };

  slider.style.transform = `translateX(-${slideWidth}px)`;
  createIndicators(sliderId);
}

function updateSliderWidth(sliderId) {
  const slider = document.getElementById(sliderId);
  const state = sliderState[sliderId];
  if (!slider || !state) return;

  const slide = slider.querySelector('.project-slide');
  if (!slide) return;

  state.slideWidth = slide.offsetWidth + 20;
  slider.style.transition = 'none';
  slider.style.transform = `translateX(-${state.index * state.slideWidth}px)`;
}

function slide(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  const state = sliderState[sliderId];
  if (!slider || !state) return;

  state.index += direction;

  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${state.index * state.slideWidth}px)`;

  const handleTransitionEnd = () => {
    slider.removeEventListener('transitionend', handleTransitionEnd);

    if (state.index === 0) {
      state.index = state.totalSlides - 2;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${state.index * state.slideWidth}px)`;
    } else if (state.index === state.totalSlides - 1) {
      state.index = 1;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${state.slideWidth}px)`;
    }

    updateIndicators(sliderId);
  };

  slider.addEventListener('transitionend', handleTransitionEnd);
}

function createIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const state = sliderState[sliderId];
  if (!slider || !state) return;

  const indicatorsContainer = document.createElement('div');
  indicatorsContainer.className = 'indicators';

  for (let i = 0; i < state.realSlides; i++) {
    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    indicator.dataset.index = i + 1;
    indicator.onclick = () => goToSlide(sliderId, i + 1);
    indicatorsContainer.appendChild(indicator);
  }

  slider.parentElement.appendChild(indicatorsContainer);
  updateIndicators(sliderId);
}

function updateIndicators(sliderId) {
  const slider = document.getElementById(sliderId);
  const state = sliderState[sliderId];
  if (!slider || !state) return;

  const indicators = slider.parentElement.querySelectorAll('.indicator');
  const activeIndex = state.index - 1;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === activeIndex);
  });
}

function goToSlide(sliderId, targetIndex) {
  const slider = document.getElementById(sliderId);
  const state = sliderState[sliderId];
  if (!slider || !state) return;

  state.index = targetIndex;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${state.index * state.slideWidth}px)`;
  updateIndicators(sliderId);
}

function openModal(imageElement) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  if (!modal || !modalImg || !imageElement) return;

  modalImg.src = imageElement.src;
  modalImg.alt = imageElement.alt || 'Project screenshot';
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('imgModal');
  if (!modal) return;
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSlider('slider1');
  initializeSlider('slider2');

  document.addEventListener('click', (event) => {
    const image = event.target.closest('.project-slide img');
    if (image) {
      openModal(image);
    }
  });

  window.addEventListener('resize', () => {
    updateSliderWidth('slider1');
    updateSliderWidth('slider2');
  });
});

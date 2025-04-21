// سلايدر
const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
let scrollAmount = 0;
const slideWidth = 270;

nextBtn.addEventListener('click', () => {
  scrollAmount += slideWidth;
  sliderWrapper.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= slideWidth;
  if (scrollAmount < 0) scrollAmount = 0;
  sliderWrapper.style.transform = `translateX(-${scrollAmount}px)`;
});

// تكبير الصور
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const slides = document.querySelectorAll(".project-slide img");
const closeBtn = document.querySelector(".close");

slides.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

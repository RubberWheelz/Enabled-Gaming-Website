document.addEventListener('DOMContentLoaded', () => {
  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndexCarousel = 0;

  function updateCurrentArticleIndicator() {
    const indicator = document.querySelector('.current-article-indicator');
    if (indicator) { // Check if the indicator element exists
      indicator.textContent = `${currentIndexCarousel + 1} / ${carouselItems.length}`;
    }
  }
  function showCarouselItem(index) {
    const shiftPercentage = index * 100;
    carousel.style.transform = `translateX(-${shiftPercentage}%)`;
    updateCurrentArticleIndicator();
  }
  function nextSlideCarousel() {
    currentIndexCarousel = (currentIndexCarousel + 1) % carouselItems.length;
    showCarouselItem(currentIndexCarousel);
  }
  function prevSlideCarousel() {
    currentIndexCarousel = (currentIndexCarousel - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndexCarousel);
  }
   const nextButton = document.querySelector('.carousel-container .carousel-navigation button:last-child');
  const prevButton = document.querySelector('.carousel-container .carousel-navigation button:first-child');

  if (nextButton) {
    nextButton.addEventListener('click', nextSlideCarousel);
  }
  if (prevButton) {
    prevButton.addEventListener('click', prevSlideCarousel);
  }
  showCarouselItem(currentIndexCarousel);
  setInterval(nextSlideCarousel, 5000);
});
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  let slideIndex = 0;

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    const offset = slideIndex * -100;
    slider.style.transform = `translateX(${offset}%)`;
  };
  document.querySelector('.right-arrow').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
  });
  document.querySelector('.left-arrow').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
  });
  showSlide(slideIndex);
});
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };
  backToTopBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
});

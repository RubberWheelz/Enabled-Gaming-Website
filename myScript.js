document.addEventListener('DOMContentLoaded', () => {
  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndexCarousel = 0;

  // Current Article Indicator Update Function
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

  // Next and Previous Slide Functionality for Carousel
  function nextSlideCarousel() {
    currentIndexCarousel = (currentIndexCarousel + 1) % carouselItems.length;
    showCarouselItem(currentIndexCarousel);
  }

  function prevSlideCarousel() {
    currentIndexCarousel = (currentIndexCarousel - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndexCarousel);
  }

  // Adding Event Listeners to Navigation Buttons
  const nextButton = document.querySelector('.carousel-container .carousel-navigation button:last-child');
  const prevButton = document.querySelector('.carousel-container .carousel-navigation button:first-child');

  if (nextButton) {
    nextButton.addEventListener('click', nextSlideCarousel);
  }
  if (prevButton) {
    prevButton.addEventListener('click', prevSlideCarousel);
  }

  // Initialize Carousel to Show First Item and Set Interval for Auto-slide
  showCarouselItem(currentIndexCarousel); // Initialize with the first item
  setInterval(nextSlideCarousel, 5000); // Change slide every 5 seconds
});

let currentIndexSlider = 0;

function showSliderItem(index) {
  const slider = document.querySelector('.slider');
  const sliderWidth = document.querySelector('.slider-container').offsetWidth; // Ensure this targets the container's width
  slider.style.transform = `translateX(-${index * sliderWidth}px)`;
}

function nextSlideSlider() {
  const sliderItems = document.querySelectorAll('.slider-item');
  currentIndexSlider = (currentIndexSlider + 1) % sliderItems.length;
  showSliderItem(currentIndexSlider);
}

function prevSlideSlider() {
  const sliderItems = document.querySelectorAll('.slider-item');
  currentIndexSlider = (currentIndexSlider - 1 + sliderItems.length) % sliderItems.length; // Corrected logic for moving backwards
  showSliderItem(currentIndexSlider);
}

// Get the button:
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
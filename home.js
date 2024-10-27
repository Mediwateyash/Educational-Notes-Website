const carousel = document.querySelector('.carousel');
const totalImages = document.querySelectorAll('.carousel-item').length; // Get the number of images
let index = 0; // Start at the first image

function slideImages() {
  index++;
  if (index >= totalImages) {
    index = 0; // Reset to the first image
  }
  carousel.style.transform = `translateX(-${index * 100}%)`; // Move the carousel
}

// Automatically slide every 3 seconds
setInterval(slideImages, 3000);
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

function showSlide(index) {
    carouselItems[currentIndex].classList.remove('active'); // Hide current slide
    currentIndex = (index + carouselItems.length) % carouselItems.length; // Wrap around
    carouselItems[currentIndex].classList.add('active'); // Show new slide
}

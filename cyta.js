let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');

// Show slide based on index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Event listeners for navigation
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Initialize carousel
showSlide(currentSlide);

//ended up hardcoding the carousel u are welcome to build upon or from scratch or whatever idk
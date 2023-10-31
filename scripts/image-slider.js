const imageSlider = document.querySelector('.image-slider');
let currentIndex = 0;
const autoChangeInterval = 5000;

function updateSliderPosition() {
    const translateX = -currentIndex * 100;
    imageSlider.style.transform = `translate(${translateX}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % imageSlider.children.length;
    updateSliderPosition();
}

function startAutoChangeTimer() {
    setInterval(nextSlide, autoChangeInterval);
}

startAutoChangeTimer();
const imageSlider = document.getElementById('slider');
const slide = document.getElementsByClassName('my-slide');
const dot = document.getElementsByClassName('dot');
let currentIndex = 0;
let timeoutId = null;

showSlides();

function currentSlide(index) {
    currentIndex = index;
    showSlides();
}

function plusSlide(step) {
    if (step < 0) {
        currentIndex -= 2;

        if (currentIndex < 0) {
            currentIndex = slide.length - 1;
        }
    }

    showSlides();
}

function showSlides() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
        dot[i].classList.remove('active');
    }

    currentIndex++;
    if (currentIndex > slide.length) {
        currentIndex = 1;
    }
    slide[currentIndex - 1].style.display = "flex";
    dot[currentIndex - 1].classList.add('active');

    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 5000);
}
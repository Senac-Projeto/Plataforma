const items = document.querySelector('.carousel-items');
const dots = document.querySelectorAll('.dot');
const totalItems = document.querySelectorAll('.carousel-item').length;
let index = 0;
let interval;

function updateCarousel() {
    items.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
}

function goToSlide(i) {
    index = i;
    updateCarousel();
}

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.getAttribute('data-index')));
        resetAutoplay();
    });
});

function startAutoplay() {
    interval = setInterval(nextSlide, 5000);
}

function resetAutoplay() {
    clearInterval(interval);
    startAutoplay();
}

startAutoplay();
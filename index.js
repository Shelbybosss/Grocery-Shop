document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.menu-item');
    const itemWidth = items[0].offsetWidth;
    const totalWidth = itemWidth * items.length;

    carousel.style.width = `${totalWidth}px`;

    let scrollPosition = 0;
    const scrollStep = 1;

    function scrollCarousel() {
        scrollPosition += scrollStep;
        if (scrollPosition >= itemWidth) {
            scrollPosition = 0;
            carousel.appendChild(carousel.firstElementChild);
        }
        carousel.style.transform = `translateX(-${scrollPosition}px)`;
        requestAnimationFrame(scrollCarousel);
    }

    scrollCarousel();
});

let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.client-review-box');

function nextReview() {
    reviews[currentReviewIndex].style.display = 'none';
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    reviews[currentReviewIndex].style.display = 'flex';
}

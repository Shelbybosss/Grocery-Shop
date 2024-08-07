function selectItem(item) {
    document.getElementById('selected-item').innerText = 'Selected item: ' + item;
}




let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.client-review-box');

function nextReview() {
    reviews[currentReviewIndex].style.display = 'none';
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    reviews[currentReviewIndex].style.display = 'flex';
}


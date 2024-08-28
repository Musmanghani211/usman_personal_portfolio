document.addEventListener("DOMContentLoaded", function () {
  // Add any JavaScript you need for interactivity
  console.log("JavaScript loaded");
});

document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('review-form');
  const reviewsContainer = document.querySelector('.reviews-row');

  reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Code to send the review data to the server using fetch or XMLHttpRequest
    // Replace the below code with your actual server request
    const newReview = `
      <div class="review-box">
        <h3>${name}</h3>
        <div class="stars">${'★'.repeat(rating)}</div>
        <p>${review}</p>
      </div>
    `;

    reviewsContainer.insertAdjacentHTML('beforeend', newReview);

    // Reset form after submission
    reviewForm.reset();
  });
});
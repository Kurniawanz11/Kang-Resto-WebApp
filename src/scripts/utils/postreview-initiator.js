import restaurantDbSource from '../data/restaurantsdb-source';
import UrlParser from '../routes/url-parser';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');
  const reviewContainer = document.querySelector('.restaurant-detail__review');

  const dataInput = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReview.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReviews = `
  <div class="review-container">
    <i class="fa fa-user-circle customer-avatar font-secondary"></i>
    <div class="customer-name">
        <h4 class="customer-name">${dataInput.name}</h4>
        <span class="customer-review-date">${date}</span>
        <p class="customer-review"> 
        ${dataInput.review}
      </p>
     </div>
  </div>
  `;

  await restaurantDbSource.postReview(dataInput);
  reviewContainer.innerHTML += newReviews;
  inputReviewName.value = '';
  inputReview.value = '';
};

export default PostReview;

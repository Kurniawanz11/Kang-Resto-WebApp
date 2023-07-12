import TheRestaurantDbSource from '../../data/restaurantsdb-source';
import UrlParser from '../../routes/url-parser';
import PostReview from '../../utils/postreview-initiator';
import { createRestaurantDetailTemplate, Spinner } from '../templates/template-creator';
import { initSwalError } from '../../utils/swal-initiator';
import LikeButtonInitiator from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <section id="restaurant-detailPage">Detail Restaurant</section>
    <div id="loading"></div>
    <div class="form-review">
          <form>
            <div class="form-container">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName">
            </div>
            <div class="form-container">
              <label for="inputReview" class="form-label">Review</label>
              <input name="inputReview" type="text" class="form-control" id="inputReview">
            </div>
            <button id="submit-review" type="submit" class="btn">Submit</button>
          </form>
        </div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant-detailPage');
    const loading = document.querySelector('#loading');

    // change main display to spinner
    restaurantContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const restaurant = await TheRestaurantDbSource.detailRestaurants(url.id);
      console.log(restaurant);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: url.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });

      // post review
      const submitReview = document.getElementById('submit-review');
      submitReview.addEventListener('click', (event) => {
        event.preventDefault();
        PostReview();
      });

      restaurantContainer.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      console.error(err);

      restaurantContainer.style.display = 'block';
      loading.style.display = 'none';
      restaurantContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Detail;

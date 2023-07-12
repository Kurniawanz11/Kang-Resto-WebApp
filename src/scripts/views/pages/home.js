import TheRestaurantDbSource from '../../data/restaurantsdb-source';
import { createRestaurantItemTemplate, Spinner } from '../templates/template-creator';
import { initSwalError } from '../../utils/swal-initiator';

const Home = {
  async render() {
    return ` 
    <h2 tabindex="0" class="main-content__title">Explore Restaurant</h2>
    <section id="explore-restaurant"></section>
    <div id="loading"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const loading = document.querySelector('#loading');
    const restaurantsContainer = document.querySelector('#explore-restaurant');

    // change main display to spinner
    restaurantsContainer.style.display = 'none';
    loading.innerHTML = Spinner();

    try {
      const restaurants = await TheRestaurantDbSource.homePage();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        console.log(restaurant);
      });
      console.log(restaurants);
      // change spinner display to main
      loading.style.display = 'none';
      restaurantsContainer.style.display = 'grid';
    } catch (err) {
      console.error(err);

      restaurantsContainer.style.display = 'block';
      loading.style.display = 'none';
      restaurantsContainer.innerHTML = `Error: ${err.message}`;
      initSwalError(err.message);
    }
  },
};

export default Home;

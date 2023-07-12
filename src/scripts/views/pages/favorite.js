import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="list">
    <h1 class="list-label">Daftar Favorite</h1>
      <div id="restaurant" class="restaurant-favorite"></div>
    <div>
          `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    const emptyRestaurant = document.querySelector('.list-label');

    // if data empty
    if (restaurants.length === 0) {
      emptyRestaurant.innerHTML = `
      <section class="empty-container">
        <section class="empty-img"></section>
        <section class="empty-page">
            <h1>Empty Page</h1>
           <p class="message">
           Empty favorite Resto. Put one, by clicking heart button in the detail page.
           </p>
           <a href="/" class="btn">Go to Homepage</a></section></section>
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;

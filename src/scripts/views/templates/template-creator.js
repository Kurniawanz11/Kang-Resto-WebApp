import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class = "restaurant-wrapper">
<div class = "restaurant-detail">
  <!-- card left -->
  <div class = "product-imgs">
    <div class = "img-display">
      <div class = "img-showcase">
        <img class="lazyload" src = "${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}">
      </div>
    </div>
    </div>
    <div class="content-right">
    <p class = "product-title">${restaurant.name}</p>
    <div class="content-overview">
    <p class = "product-rating">Rating: <i title="ratings" class="fa fa-star"></i> 
    ${restaurant.rating}
    <p class = "product-city">Kota: <span>${restaurant.city}</span></p>
    <p class = "product-address">Alamat: <span>${restaurant.address}</span></p>
    <p class="product-desc">Deskripsi: </p>
    <p>${restaurant.description}</p>
    </p>
    </div>
  </div>
  
  </div>
  <div class = "social-links">
  <p>Share At: </p>
  <a href = "#">
    <i class = "fab fa-facebook-f"></i>
  </a>
  <a href = "#">
    <i class = "fab fa-twitter"></i>
  </a>
  <a href = "#">
    <i class = "fab fa-instagram"></i>
  </a>
  <a href = "#">
    <i class = "fab fa-whatsapp"></i>
  </a>
  <a href = "#">
    <i class = "fab fa-pinterest"></i>
  </a>
</div>
  <div class="restaurant-detail__menu-list">
  <div class="menu-title">List Menu</div>
  <div class="foods">
    <div class="menu-foods">Foods</div>
    <ul class="restaurant-detail__foods">
      ${restaurant.menus.foods.map((food) => `
        <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>
      `).join('')}
    </ul>
  </div>
  <div class="drinks">
    <div class="menu-drinks">Drinks</div>
    <ul class="restaurant-detail__drinks">
      ${restaurant.menus.drinks.map((drink) => `
        <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>
      `).join('')}
    </ul>
  </div>
</div>

  <div class="customer-review">
    <div class="customer-reviews">Review Customer</div>
    <div class="restaurant-detail__review">
      ${restaurant.customerReviews.map((customer) => `
         <div class="review-container">
         <i class="fa fa-user-circle customer-avatar font-secondary"></i>
       <div class="customer-name">
        <h4>${customer.name}</h4>
        <span class="customer-review-date">${customer.date}</span>
        <p class="customer-review">${customer.review}</p>
        </div>
     </div>
  `).join('')}
   </div>
  </div>
</div>
</div>

`;

const createRestaurantItemTemplate = (restaurant) => `
  <div tabindex="0" class="card">
        <div class="img-container">
          <img tabindex="0" class="card-image lazyload" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}"/>
          <span tabindex="0" class="card-rating" aria-label="ratings">
            <i title="ratings" class="fa fa-star"></i>
            <span>${restaurant.rating}</span>
          </span>
          <span tabindex="0" class="card-city" aria-label="city">
          <i title="city" class="fas fa-city"></i>
          <span>${restaurant.city}</span>
        </span>
        </div>

        <div tabindex="0" class="card-content">
        <p class="card-content-title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></p>
          <p class="card-description">${restaurant.description}</p>
        </div>
      </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const Spinner = () => `
  <div class="loader"></div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  Spinner,
};

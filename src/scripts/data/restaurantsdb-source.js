import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async homePage() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async searchRestaurants(search) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(search));
      return response.json();
    } catch (err) {
      return {};
    }
  }

  static async postReview(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    return response.json();
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant);
    return responseJson.restaurant;
  }
}

export default TheRestaurantDbSource;

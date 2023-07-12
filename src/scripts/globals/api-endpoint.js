import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}/list`,
  SEARCH: (search) => `${CONFIG.BASE_URL}search?q=${search}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;

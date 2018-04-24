import axios from 'axios';
import config from 'settings';

export default class Giphy {
  get(filterBy, limit = 20) {
    return axios.get(`${config.GIPHY_URI}/search`, {
      params: {
        q: filterBy,
        limit,
        api_key: config.GIPHY_KEY,
      },
    });
  }

  getTrendingTopic(limit = 10) {
    return axios.get(`${config.GIPHY_URI}/trending`, {
      params: {
        limit,
        api_key: config.GIPHY_KEY,
      },
    });
  }
}

// Package dependencies
import Axios from 'axios';

// Config
import Config from '../utils/config';

export default {
  /**
   * Returns all the existing achievements.
   */
  getAchievements: () => Axios.get(`${Config.API_URL}/achievements`),
};

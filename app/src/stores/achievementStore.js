// Package dependencies
import { extendObservable } from 'mobx';

class AchievementStore {
  constructor() {
    extendObservable(this, {
      achievements: [],
      error: false,
    });
  }

  /**
   * Loads the achievements into the store.
   */
  loadAchievements = (achievements) => (this.achievements = achievements);

  /**
   * Sets an error as true or false.
   */
  setError = (error) => (this.error = !!error);

  /**
   * Returns all achievements.
   */
  getAllAchievements = () => this.achievements;
}

export default new AchievementStore();

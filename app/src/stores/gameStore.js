import { extendObservable } from 'mobx';

class GameStore {
  constructor() {
    extendObservable(this, {
      games: [],
      error: false,
    });
  }

  /**
   * Loads the games into the store.
   */
  loadGames = (games) => (this.games = games);

  /**
   * Sets an error as true or false.
   */
  setError = (error) => (this.error = !!error);

  /**
   * Returns all games.
   */
  getAllGames = () => this.games;

  /**
   * Returns all the games who are supposed to be shown in recommended.
   */
  getRecommended = () => {
    return this.games.filter((game) => game.parentComponent.indexOf('recommended') > -1);
  };
}

export default new GameStore();
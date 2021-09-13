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
  getRecommended = () =>
    this.games
      .map((game) => {
        return {
          ...game,
          category: game.categories.filter((category) => category.name === 'recommended')[0],
        };
      })
      .filter((game) => game.category);

  /**
   * Returns all the games who are supposed to be shown in new games.
   */
  getNewGames = () =>
    this.games
      .map((game) => {
        return {
          ...game,
          category: game.categories.filter((category) => category.name === 'new games')[0],
        };
      })
      .filter((game) => game.category);
}

export default new GameStore();

// Package dependencies
import React, { Component } from 'react';

// Components
import Spinner from '../../components/Spinner';
import Game from '../../components/Game';
import SelectableComponent from '../../components/SelectableComponent';

// Services
import GameService from '../../services/gameService';

// Config
import Config from '../../utils/config';

// Theme
import './style.scss';

export default class Recommended extends Component {
  state = { games: [], loading: true, loadingError: false };

  async componentDidMount() {
    try {
      await this.getGames();
    } catch (error) {
      this.setState({ loadingError: true });
    }

    setTimeout(() => this.setState({ loading: false }), Config.SPINNER_TIME);
  }

  /**
   * Loads all the games that belong in recommended.
   */
  getGames = () => GameService.getGames().then(({ data: games }) => this.setState({ games }));

  render() {
    const { loading, loadingError, games } = this.state;

    return (
      <div className="recommended-container">
        {/* Loading */}
        {loading && <Spinner />}

        {/* Error */}
        {!loading && loadingError && <div>Something went wrong</div>}

        {/* Games */}
        {!loading &&
          games.map((game, i) => (
            <SelectableComponent key={i}>
              <Game key={i} data={game} />
            </SelectableComponent>
          ))}
        {!loading && games.map((game, i) => <Game key={i} data={game} />)}
      </div>
    );
  }
}

// Package dependencies
import React, { Component } from 'react';

// Containers
import Recommended from './containers/recommended';
import NewGames from './containers/new-games';

// Components
import Spinner from './components/Spinner';

// Services
import GameService from './services/gameService';

// Stores
import GameStore from './stores/gameStore';

// Config
import Config from './utils/config';

class App extends Component {
  state = { loading: true };

  async componentDidMount() {
    try {
      const { data: games } = await GameService.getGames();
      GameStore.loadGames(games);
      GameStore.setError(false);
    } catch (error) {
      GameStore.setError(true);
    }

    // Give the loading a few seconds even if it's faster for user experience
    setTimeout(() => this.setState({ loading: false }), Config.SPINNER_TIME);
  }

  render() {
    return (
      <React.Fragment>
        {/* Loading */}
        {this.state.loading && <Spinner />}

        {/* Containers */}
        {!this.state.loading && (
          <div className="container" style={{ paddingTop: '2em' }}>
            <div className="row">
              <div className="twelve columns">
                <Recommended />
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <NewGames />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;

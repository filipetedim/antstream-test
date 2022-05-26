// Package dependencies
import React, { Component } from 'react';

// Containers
import Recommended from './containers/recommended';
import AllGames from './containers/all-games';
import Trending from './containers/trending';
import NewGames from './containers/new-games';
import Achievements from './containers/achievements';

// Components
import Spinner from './components/Spinner';

// Services
import GameService from './services/gameService';
import AchievementService from './services/achievementService';

// Stores
import GameStore from './stores/gameStore';
import AchievementStore from './stores/achievementStore';
import InputStore from './stores/inputStore';

// Config
import Config from './utils/config';

class App extends Component {
  state = {loading: true};

  async componentDidMount() {
    // Load data
    try {
      const { data: games } = await GameService.getGames();
      GameStore.loadGames(games);
      GameStore.setError(false);
    } catch (error) {
      GameStore.setError(true);
    }

    try {
      const { data: achievements } = await AchievementService.getAchievements();
      AchievementStore.loadAchievements(achievements);
      AchievementStore.setError(false);
    } catch (error) {
      AchievementStore.setError(true);
    }

    // Register on key down events
    InputStore.addEventListeners(document);

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
              <div className="six columns">
                <NewGames />
              </div>
              <div className="six columns">
                <Achievements />
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <Trending />
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <AllGames />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;

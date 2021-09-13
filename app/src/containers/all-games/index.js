// Package dependencies
import React, { Component } from 'react';
import { observer } from 'mobx-react';

// Components
import Game from '../../components/Game';
import SelectableComponent from '../../components/SelectableComponent';

// Stores
import GameStore from '../../stores/gameStore';

// Theme
import './style.scss';

class AllGames extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <div className="all-games-header">All Games</div>

        {/* Error */}
        {GameStore.error && (
          <div className="all-games-error">Something went wrong loading all games</div>
        )}

        {/* All Games */}
        <div className="all-games-container">
          {GameStore.getAllGames().map((game, i) => (
            <SelectableComponent key={i}>
              <Game
                key={i}
                style={{
                  backgroundImage: `url("${game.image}")`,
                }}
              />
            </SelectableComponent>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default observer(AllGames);

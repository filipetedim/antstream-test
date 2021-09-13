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

class NewGames extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <div className="new-games-header">New Games</div>

        {/* Error */}
        {GameStore.error && (
          <div className="new-games-error">Something went wrong loading new games</div>
        )}

        {/* New Games */}
        <div className="new-games-container">
          {GameStore.getNewGames().map((game, i) => (
            <SelectableComponent key={i}>
              <Game key={i} data={game} />
            </SelectableComponent>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default observer(NewGames);

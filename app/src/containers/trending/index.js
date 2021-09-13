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

class Trending extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <div className="trending-header">Trending Games</div>

        {/* Error */}
        {GameStore.error && (
          <div className="trending-error">Something went wrong loading trending games</div>
        )}

        {/* Trending Games */}
        <div className="trending-container">
          {GameStore.getTrendingGames().map((game, i) => (
            <SelectableComponent
              key={i}
              style={{
                minHeight: `${game.category.height * 6}em`,
                minWidth: `${game.category.width * 6}em`,
                maxHeight: `${game.category.height * 6}em`,
                maxWidth: `${game.category.width * 6}em`,
              }}
            >
              <Game
                key={i}
                style={{
                  backgroundImage: `url("${game.category.image}")`,
                  minHeight: `${game.category.height * 6}em`,
                  minWidth: `${game.category.width * 6}em`,
                  maxHeight: `${game.category.height * 6}em`,
                  maxWidth: `${game.category.width * 6}em`,
                }}
              />
            </SelectableComponent>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default observer(Trending);

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

class Recommended extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <div className="recommended-header">Recommended Games</div>

        {/* Error */}
        {GameStore.error && (
          <div className="recommended-error">Something went wrong loading recommended games</div>
        )}

        {/* Recommended Games */}
        <div className="recommended-container" right="false" left="false" up="false">
          {GameStore.getRecommended().map((game, i) => (
            <SelectableComponent key={i} name={game.name}>
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

export default observer(Recommended);

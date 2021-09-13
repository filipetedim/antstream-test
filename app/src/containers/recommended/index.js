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
        <div className="recommended-container">
          {GameStore.getRecommended().map((game, i) => (
            <SelectableComponent key={i}>
              <Game key={i} data={game} />
            </SelectableComponent>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default observer(Recommended);

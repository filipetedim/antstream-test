// Package dependencies
import React, { Component } from 'react';
import { observer } from 'mobx-react';

// Components
import Achievement from '../../components/Achievement';
import SelectableComponent from '../../components/SelectableComponent';

// Stores
import AchievementStore from '../../stores/achievementStore';

// Theme
import './style.scss';

class Achievements extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <div className="achievements-header">Achievements</div>

        {/* Error */}
        {AchievementStore.error && (
          <div className="achievements-error">Something went wrong loading recommended games</div>
        )}

        {/* Achievements */}
        <div className="achievements-container container">
          {AchievementStore.getAllAchievements().map((achievement, i) => (
            <SelectableComponent key={i} style={{ width: '100%' }}>
              <Achievement key={i} data={achievement} />
            </SelectableComponent>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default observer(Achievements);

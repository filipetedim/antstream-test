// Package dependencies
import React, { Component } from 'react';
import { observer } from 'mobx-react';

// Stores
import InputStore from '../../stores/inputStore';

// Theme
import './style.scss';

class SelectableComponent extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  componentDidMount() {
    InputStore.addComponent(this.elementRef);
  }

  render() {
    return (
      <div
        ref={this.elementRef}
        onClick={() => InputStore.selectComponent(this.elementRef)}
        className="selectable-component-container"
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}

export default observer(SelectableComponent);

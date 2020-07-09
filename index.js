import React, { Component } from 'react';
import { render } from 'react-dom';
import TestBadge from './TestBadge';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <TestBadge />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

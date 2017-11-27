import React, { Component } from 'react';
import { Root } from 'react-tooltip';

import Content from './Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content /> {/* The only reason this is in a different component is to closer match reality */}
        <Root />
      </div>
    );
  }
}

export default App;

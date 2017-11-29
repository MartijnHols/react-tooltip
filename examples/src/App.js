import React, { Component } from 'react';
import { Root } from 'react-tooltip';

import Examples from './Examples';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Examples />

        {/* We need *one* root on the page where the tooltip will be inserted. */}
        <Root />
      </div>
    );
  }
}

export default App;

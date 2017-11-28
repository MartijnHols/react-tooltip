import React from 'react';

import StaticString from './components/StaticString';
import StateBased from './components/StateBased';
import FunctionBased from './components/FunctionBased';
import AdditionRemoval from './components/AdditionRemoval';

const Content = () => (
  <div>
    <h1>Tooltip example</h1>

    <p>
      <StaticString />
    </p>
    <p>
      <StateBased />
    </p>
    <p>
      <FunctionBased />
    </p>
    <p>
      <AdditionRemoval />
    </p>
  </div>
);

export default Content;

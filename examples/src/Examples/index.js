import React from 'react';

import StaticString from './StaticString';
import Directions from './Directions';
import ReactNode from './ReactNode';
import StateBased from './StateBased';
import FunctionBased from './FunctionBased';
import AdditionRemoval from './AdditionRemoval';

const Examples = () => (
  <div>
    <h1>Tooltip example</h1>

    <p>
      <StaticString />
    </p>
    <p>
      <Directions />
    </p>
    <p>
      <ReactNode />
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

export default Examples;

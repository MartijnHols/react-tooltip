import React from 'react';
import Tooltip from 'react-tooltip';

import Wrapper from '../helpers/Wrapper';

const FunctionBased = ({ prop }) => (
  <Wrapper>
    This is a piece of text with a function-based tooltip{' '}
    <Tooltip
      tooltip={() => (
        <div>
          You opened this tooltip at <b>{`${new Date()}`}</b>.
        </div>
      )}
    >
      <u>here</u>
    </Tooltip>.
  </Wrapper>
);

export default FunctionBased;

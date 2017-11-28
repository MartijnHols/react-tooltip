import React from 'react';
import Tooltip from 'react-tooltip';

import Wrapper from '../helpers/Wrapper';

const StaticString = ({ prop }) => (
  <Wrapper>
    This is a piece of text with a static tooltip{' '}
    <Tooltip
      tooltip="A regular string based tooltip."
    >
      <u>here</u>
    </Tooltip>.
  </Wrapper>
);

export default StaticString;

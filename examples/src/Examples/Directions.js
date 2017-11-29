import React from 'react';
import Tooltip from 'react-tooltip';

import Wrapper from '../helpers/Wrapper';

const StaticString = ({ prop }) => (
  <Wrapper>
    The default is <Tooltip tooltip="Something interesting" renderer="u">top</Tooltip>, but you can also put it <Tooltip tooltip="Something interesting" renderer="u" left>left</Tooltip>, <Tooltip tooltip="Something interesting" renderer="u" right>right</Tooltip> or <Tooltip tooltip="Something interesting" renderer="u" bottom>bottom</Tooltip>.
  </Wrapper>
);

export default StaticString;

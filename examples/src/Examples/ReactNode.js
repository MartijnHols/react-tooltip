import React from 'react';
import Tooltip from 'react-tooltip';

import Wrapper from '../helpers/Wrapper';

const ReactNode = ({ prop }) => (
  <Wrapper>
    {/* Div is optional, can also use a Fragment or anything you like */}
    This static tooltip has JSX <Tooltip tooltip={(
      <div>
        Look mommy I can be <b>bold</b>!
      </div>
    )}><u>here</u></Tooltip>.
  </Wrapper>
);

export default ReactNode;

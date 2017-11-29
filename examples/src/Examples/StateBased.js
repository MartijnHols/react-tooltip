import React from 'react';
import Tooltip from 'react-tooltip';

import Wrapper from '../helpers/Wrapper';

class StateBased extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    };
  }
  timer = null;
  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Wrapper>
        This is a piece of text with a state-based tooltip{' '}
        <Tooltip
          tooltip={(
            <div>
              You have been on the page for <b>{this.state.seconds}</b> seconds.
            </div>
          )}
        >
          <u>here</u>
        </Tooltip>.
      </Wrapper>
    );
  }
}

export default StateBased;

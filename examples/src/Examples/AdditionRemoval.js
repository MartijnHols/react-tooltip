import React from 'react';
import Tooltip from 'react-tooltip';

import Wrapper from '../helpers/Wrapper';

class AdditionRemoval extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <Wrapper>
        Tooltip disappears when element disappears, and automatically works for new elements*:
        <div>
          <div style={{ width: 300, display: 'inline-block' }}>
            <div style={{ width: '50%', float: 'left', minHeight: 1 }}>
              {!this.state.active && (
                <Tooltip
                  renderer="button"
                  type="button"
                  onClick={this.handleToggle}
                  tooltip="I am currently inactive."
                >
                  Activate
                </Tooltip>
              )}
            </div>
            <div style={{ width: '50%', float: 'left' }}>
              {this.state.active && (
                <Tooltip
                  renderer="button"
                  type="button"
                  onClick={this.handleToggle}
                  tooltip="I am very active. Please stop me."
                >
                  Deactivate
                </Tooltip>
              )}
            </div>
          </div>
        </div>
        * without having to manually rebuild.
      </Wrapper>
    );
  }
}

export default AdditionRemoval;

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { id } from './Root';

class TooltipPortal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    target: PropTypes.shape({
      getBoundingClientRect: PropTypes.func.isRequired,
    }).isRequired,
  };

  /** The element where the tooltip should be mounted. */
  root = null;
  constructor() {
    super();
    this.root = document.getElementById(id);
    if (!this.root) {
      throw new Error('Could not find tooltip Root.');
    }
  }

  getPositioning(target) {
    const rect = target.getBoundingClientRect();

    // TODO: Implement alternative positioning
    return {
      top: rect.top,
      left: rect.left + rect.width / 2,
    };
  }

  render() {
    const { children, target } = this.props;

    const positioning = this.getPositioning(target);

    return ReactDOM.createPortal((
      <div className="tooltip" style={{ ...positioning }}>
        {children}
      </div>
    ), this.root);
  }
}

export default TooltipPortal;

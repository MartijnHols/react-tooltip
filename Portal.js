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
    left: PropTypes.bool,
    right: PropTypes.bool,
    bottom: PropTypes.bool,
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

  getPositioning(target, position = 'top') {
    const rect = target.getBoundingClientRect();

    switch (position) {
      case 'left':
        return {
          top: rect.top + rect.height / 2,
          left: rect.left,
        };
      case 'right':
        return {
          top: rect.top + rect.height / 2,
          left: rect.left + rect.width,
        };
      case 'bottom':
        return {
          top: rect.top + rect.height,
          left: rect.left + rect.width / 2,
        };
      default:
        return {
          top: rect.top,
          left: rect.left + rect.width / 2,
        };
    }
  }

  render() {
    const { children, target, left, right, bottom } = this.props;

    const position = left ? 'left' : (right ? 'right' : (bottom ? 'bottom' : 'top'));
    const positioning = this.getPositioning(target, position);

    return ReactDOM.createPortal((
      <div className={`tooltip ${position}`} style={{ ...positioning }}>
        {children}
      </div>
    ), this.root);
  }
}

export default TooltipPortal;

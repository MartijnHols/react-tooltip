import React from 'react';
import PropTypes from 'prop-types';

import Portal from './Portal';

import './styles.css';

class Tooltip extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    tooltip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    renderer: PropTypes.string,
    className: PropTypes.string,
  };
  static defaultProps = {
    renderer: 'span',
  };

  constructor() {
    super();
    this.state = {
      open: false,
      target: null,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    e.persist();
    this.setState({
      open: true,
      target: e.currentTarget,
    });
  }
  handleMouseLeave(e) {
    this.setState({
      open: false,
      target: null,
    });
  }

  render() {
    const { children, tooltip, renderer: Renderer, className, ...others } = this.props;

    return (
      <Renderer
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={`tooltip-origin ${className || ''}`}
        {...others}
      >
        {this.state.open && (
          <Portal target={this.state.target}>
            {typeof tooltip === 'function' ? tooltip() : tooltip}
          </Portal>
        )}
        {children}
      </Renderer>
    );
  }
}

export default Tooltip;

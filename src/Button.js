import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
};

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {

  }

  render() {
    console.log('this.props: ', this.props);
    const { color, onClick, className } = this.props;
    return (
       <button type="button"  className={className} >Click Me!</button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

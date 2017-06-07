import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    var buttonColor =this.props.color;
     Array.from(document.getElementsByClassName('button-submit')).forEach(
       function(element, index, array) {
        element.style.backgroundColor=buttonColor;
      }
    );
  }

  render() {
    const {onClick, className, color,  children } = this.props;
    return (
       <button type="button" onClick={onClick} className={className} >{children}</button>
    );
  }
}

Button.propTypes = propTypes;

export default Button;

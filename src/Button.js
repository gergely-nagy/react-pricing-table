import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};


class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    var buttonColor =this.props.color;
     Array.from(document.getElementsByClassName('button-submit')).forEach(
       function(element) {
        element.style.backgroundColor=buttonColor;
      }
    );
  }

  render() {
    const {onClick, className, children } = this.props;
    return (
       <button type="button" onClick={onClick} className={className} >{children}</button>
    );
  }
}

Button.propTypes = propTypes;

export default Button;

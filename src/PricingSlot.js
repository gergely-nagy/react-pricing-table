import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const propTypes = {
  highlighted: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  priceText: PropTypes.string,
  buttonClass:PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.node,
  highlightColor: PropTypes.string,
  shouldDisplayButton: PropTypes.bool
};

const defaultProps = {
  highlighted: false,
  highlightColor: "#f44336",
  shouldDisplayButton: true
};

class PricingSlot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.highlighted ? document.getElementById("highlighted-header").style.backgroundColor=this.props.highlightColor : null;
  }

  render() {
    const {highlighted, highlightColor,buttonClass,buttonText, shouldDisplayButton} = this.props;
    return (
      <div className="Grid-cell">
        <ul className="price basic-border">
          <li id={(highlighted ? "highlighted" : "basic") + "-header"} className={(highlighted ? "highlighted" : "basic") + "-header"}>{this.props.title}</li>
          <li className="tag">{this.props.priceText}</li>
          {this.props.children}
          {shouldDisplayButton && <li className="grey">
            <Button onClick={this.props.onClick} color={highlightColor} className={buttonClass ? buttonClass : "button-submit"}>{buttonText}</Button>
          </li>}
        </ul>
      </div>
    )
  }
}

PricingSlot.propTypes = propTypes;
PricingSlot.defaultProps = defaultProps;

export default PricingSlot;

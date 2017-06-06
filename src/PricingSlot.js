import './grid.css'
import './index.css'
import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const propTypes = {
  highlighted: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  priceText: PropTypes.string,
  buttonText: PropTypes.string,
};

const defaultProps = {
  highlighted: false,
};

class PricingSlot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

      this.hello = this.hello.bind(this);
  }

  componentDidMount() {}


  hello(){console.log('hello')}
  renderTable() {}

  render() {
    return (
      <div className="Grid-cell">
        <ul className="price basic-border">
          <li className="basic-header">{this.props.title}</li>
          <li className="tag">{this.props.priceText}</li>
          <li><b>11GB</b> Storage</li>
          <li>10 Emails</li>
          <li>10 Domains</li>
          <li>1GB Bandwidth</li>
          <li className="grey">
            <Button onClick={this.hello} className="button-submit">{this.props.buttonText}</Button>
          </li>
        </ul>
      </div>
    )
  }
}

PricingSlot.propTypes = propTypes;
PricingSlot.defaultProps = defaultProps;

export default PricingSlot;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  strikethrough: PropTypes.bool,
  children: PropTypes.node
};

const defaultProps = {
  strikethrough: false,
};

class PricingDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {strikethrough} = this.props;
    return (
      <div>
        <li className={strikethrough ? "text-line-through" : ""}>{this.props.children}</li>
      </div>
    )
  }
}

PricingDetail.propTypes = propTypes;
PricingDetail.defaultProps = defaultProps;

export default PricingDetail;

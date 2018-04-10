import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  highlightColor: PropTypes.string,
  children: PropTypes.node
};

const defaultProps = {
  highlightColor: '#f44336',
};

class PricingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       highlightColor: this.props.highlightColor
     })
    );
    return (
      <div className="react-pricing-table">
        <div className="Grid">
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

PricingTable.propTypes = propTypes;
PricingTable.defaultProps = defaultProps;

export default PricingTable;

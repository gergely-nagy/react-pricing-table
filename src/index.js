import './grid.css'
import './index.css'
import React from 'react';
import Button from './Button';

class PricingTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {}

  renderTable() {}

  render() {
    return (
      <div className="react-pricing-table">
        <div className="Grid">
          <div className="Grid-cell">
            <ul className="price basic-border">
              <li className="basic-header">GROUP</li>
              <li className="tag">$13/month*</li>
              <li><b>11GB</b> Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <Button className="button-submit">TRY IT FREE</Button>
              </li>
            </ul>
          </div>
          <div className="Grid-cell">
            <ul className="price highlighted-border">
              <li className="highlighted-header">TEAM</li>
              <li className="tag">$27/month*</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <Button className="button-submit">SIGN UP</Button>
              </li>
            </ul>
          </div>
          <div className="Grid-cell">
            <ul className="price basic-border">
              <li className="basic-header">AGENCY</li>
              <li className="tag">$54/month*</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <Button className="button-submit">SIGN UP</Button>
              </li>
            </ul>
          </div>
          <div className="Grid-cell">
            <ul className="price basic-border">
              <li className="basic-header">ENTERPRISE</li>
              <li className="tag">$100/month</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <Button className="button-submit">LEARN MORE</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export {PricingTable};

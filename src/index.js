import './grid.css'
import './index.css'
import React from 'react';
import Button from './Button';

class MyComponent extends React.Component {
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
              <li className="grey">$13/month*</li>
              <li>11GB Storage</li>
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
              <li className="grey">$27/month*</li>
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
              <li className="grey">$54/month*</li>
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
              <li className="grey">$100/month</li>
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

export default MyComponent;

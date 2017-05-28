import './index.css'
import './skeleton.css'
import React from 'react';

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
        <div className="row">
          <div className="three columns">
            <ul className="price">
              <li className="header">Basic</li>
              <li className="grey">$ 9.99 / year</li>
              <li>11GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <a href="#" className="button">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="three columns">
            <ul className="price">
              <li className="header">Basic</li>
              <li className="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <a href="#" className="button">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="three columns">
            <ul className="price">
              <li className="header">Basic</li>
              <li className="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <a href="#" className="button">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="three columns">
            <ul className="price">
              <li className="header">Basic</li>
              <li className="grey">$ 9.99 / year</li>
              <li>10GB Storage</li>
              <li>10 Emails</li>
              <li>10 Domains</li>
              <li>1GB Bandwidth</li>
              <li className="grey">
                <a href="#" className="button">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MyComponent;

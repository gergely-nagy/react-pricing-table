import React from 'react';

import {PricingTable} from '../src/index';
import {PricingSlot} from '../src/index';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        console.log('test');
    }

    submit(){ console.log('submit clicked'); }

    render() {
        return (
            <PricingTable highlightColor='#f44336'>
              <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='enterprise' priceText='$27/month'>

              </PricingSlot>
            </PricingTable>
        )
    }
}

export default Example;

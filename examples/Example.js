import React from 'react';

import {PricingTable, PricingSlot, PricingDetail} from '../src/index';

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
            <PricingTable  highlightColor='#f44336'>
              <PricingSlot highlighted onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
                <PricingDetail tooltipText='This is a tooltip for users'>up to 10 users</PricingDetail>
                <PricingDetail tooltipText='This is a tooltip for projects'>2 projects</PricingDetail>
              </PricingSlot>
              <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='STARTER' priceText='$15/month'>
                <PricingDetail tooltipText='This is a tooltip for users'>up to 10 users</PricingDetail>
                <PricingDetail tooltipText='This is a tooltip for projects'>2 projects</PricingDetail>
              </PricingSlot>
              <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                <PricingDetail tooltipText='This is a tooltip for users'>up to 10 users</PricingDetail>
                <PricingDetail tooltipText='This is a tooltip for projects'>2 projects</PricingDetail>
              </PricingSlot>
              <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
                <PricingDetail tooltipText='This is a tooltip for users'>up to 10 users</PricingDetail>
                <PricingDetail tooltipText='This is a tooltip for projects'>2 projects</PricingDetail>
              </PricingSlot>
            </PricingTable>
        )
    }
}

export default Example;

import React from 'react';
import ReactDOM from 'react-dom';
import {PricingTable} from '../src/index';

describe('<index />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PricingTable />, div);
    });
});

import React from 'react';
import ReactDOM from 'react-dom';
import {PricingSlot} from '../src/index';
import { shallow } from 'enzyme';

describe('PricingSlot', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PricingSlot />, div);
    });


});

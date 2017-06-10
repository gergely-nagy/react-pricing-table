import React from 'react';
import ReactDOM from 'react-dom';
import {PricingDetail} from '../src/index';
import { shallow } from 'enzyme';

describe('PricingDetail', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PricingDetail />, div);
    });


});

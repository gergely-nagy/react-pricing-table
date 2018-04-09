import React from 'react';
import ReactDOM from 'react-dom';
import {PricingSlot} from '../src/index';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('PricingSlot', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PricingSlot />, div);
    });


});

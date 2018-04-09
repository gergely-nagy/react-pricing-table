import React from 'react';
import ReactDOM from 'react-dom';
import {PricingDetail} from '../src/index';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('PricingDetail', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PricingDetail />, div);
    });


});

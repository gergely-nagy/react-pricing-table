import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/Button';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
    it('should renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
    });

    it('should render children', () => {
      const wrapper = shallow(<Button>Hello world</Button>);
      expect(wrapper.text()).toBe('Hello world');
    });

      describe('onClick', () => {
        it('calls props.onClick if it exists', () => {
         const onClick = jasmine.createSpy('onClick');
         const wrapper = mount( < Button onClick = {
             onClick
           } > Testing Click < /Button>);

           wrapper.find('button').simulate('click'); expect(onClick).toHaveBeenCalled();
         });

    });
});

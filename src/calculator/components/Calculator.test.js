import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';
import { btnLists } from '../actions';

describe('Calculator Component >>> ', () => {

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Calculator btnLists={btnLists}
                                  submitHandler={(val) => val}
                                  currentVal='9'
                                  memoryVal='1'
                                  error=''
                                  debug
                              />);
    expect(component).toMatchSnapshot();
  });

  it('should be click the first button on the calculator make sure value is 9', () => {
    const component = mount(<Calculator btnLists={btnLists}
                                submitHandler={(val) => console.log("You clicked button value is ", val)}
                                currentVal='9'
                                memoryVal='1'
                                error=''
                            />);
    component
      .find('button').first()
      .simulate('click');

    expect(component).toMatchSnapshot();
    component.unmount();
  });

});

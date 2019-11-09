import React from 'react';
import { Button } from 'react-native';
import { shallow } from 'enzyme';
import BloodListScreen from '../BloodListScreen';

describe('BloodListScreen', () => {
  it('renders without crashing', () => {
    shallow(<BloodListScreen />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<BloodListScreen />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handle navigate press', () => {
    const navigateSpy = jest.fn();
    const navigation = { navigate: navigateSpy };
    const wrapper = shallow(<BloodListScreen navigation={navigation} />);

    wrapper
      .find(Button)
      .at(0)
      .props()
      .onPress();

    expect(navigateSpy).toBeCalledWith('BloodResult');
  });
});

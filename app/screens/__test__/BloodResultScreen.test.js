import React from 'react';
import { Button } from 'react-native';
import { shallow } from 'enzyme';
import BloodResultScreen from '../BloodResultScreen';

describe('BloodResultScreen', () => {
  it('renders without crashing', () => {
    shallow(<BloodResultScreen />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<BloodResultScreen />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handle navigate press', () => {
    const goBackSpy = jest.fn();
    const navigation = { goBack: goBackSpy };
    const wrapper = shallow(<BloodResultScreen navigation={navigation} />);

    wrapper
      .find(Button)
      .at(0)
      .props()
      .onPress();

    expect(goBackSpy).toHaveBeenCalled();
  });
});

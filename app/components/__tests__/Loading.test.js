import React from 'react';
import { ActivityIndicator } from 'react-native';
import { shallow } from 'enzyme';
import Loading from '../Loading';
import { theme } from '../../theme';

describe('Loading', () => {
  it('renders without crashing', () => {
    shallow(<Loading />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('color', () => {
    it("defaults to theme's primary", () => {
      const wrapper = shallow(<Loading />);
      const colorProp = wrapper.find(ActivityIndicator).props().color;

      expect(colorProp).toBe(theme.primary);
    });

    it('accepts custom color', () => {
      const wrapper = shallow(<Loading color={'black'} />);
      const colorProp = wrapper.find(ActivityIndicator).props().color;

      expect(colorProp).toBe('black');
    });
  });

  describe('size', () => {
    it('defaults to large', () => {
      const wrapper = shallow(<Loading />);
      const sizeProp = wrapper.find(ActivityIndicator).props().size;

      expect(sizeProp).toBe('large');
    });

    it('accepts custom size', () => {
      const wrapper = shallow(<Loading size={'small'} />);
      const sizeProp = wrapper.find(ActivityIndicator).props().size;

      expect(sizeProp).toBe('small');
    });
  });
});

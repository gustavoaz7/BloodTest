import React from 'react';
import { shallow } from 'enzyme';
import NavigationBottomResultIcon from '../NavigationBottomResultIcon';
import { theme } from '../../../theme';

describe('NavigationBottomResultIcon', () => {
  it('renders without crashing', () => {
    shallow(<NavigationBottomResultIcon />);
  });

  it('accepts `tintColor`', () => {
    const wrapper = shallow(<NavigationBottomResultIcon tintColor={theme.primary} />);
    expect(wrapper.prop('color')).toBe(theme.primary);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<NavigationBottomResultIcon tintColor={theme.primary} />);
    expect(wrapper).toMatchSnapshot();
  });
});

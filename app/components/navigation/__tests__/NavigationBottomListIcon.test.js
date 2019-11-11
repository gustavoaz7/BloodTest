import React from 'react';
import { shallow } from 'enzyme';
import NavigationBottomListIcon from '../NavigationBottomListIcon';
import { theme } from '../../../theme';

describe('NavigationBottomListIcon', () => {
  it('renders without crashing', () => {
    shallow(<NavigationBottomListIcon />);
  });

  it('accepts `tintColor`', () => {
    const wrapper = shallow(<NavigationBottomListIcon tintColor={theme.primary} />);
    expect(wrapper.prop('color')).toBe(theme.primary);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<NavigationBottomListIcon tintColor={theme.primary} />);
    expect(wrapper).toMatchSnapshot();
  });
});

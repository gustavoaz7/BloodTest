import React from 'react';
import { shallow } from 'enzyme';
import NavigationHeaderImage, { HeaderImage } from '../NavigationHeaderImage';

const logo = require('../../../../assets/logo.png');

describe('NavigationHeaderImage', () => {
  it('renders without crashing', () => {
    shallow(<NavigationHeaderImage />);
  });

  it('renders logo', () => {
    const wrapper = shallow(<NavigationHeaderImage />);
    expect(wrapper.find(HeaderImage).props().source).toEqual(logo);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<NavigationHeaderImage />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';
import { testsMock } from '../../mocks/tests';

describe('ListItem', () => {
  const item = testsMock[0];

  it('renders without crashing', () => {
    shallow(<ListItem item={item} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<ListItem item={item} />);
    expect(wrapper).toMatchSnapshot();
  });
});

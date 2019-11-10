import React from 'react';
import { shallow } from 'enzyme';
import ResultDiagram from '../ResultDiagram';
import { testsMock } from '../../mocks/tests';

describe('ListItem', () => {
  const { result } = testsMock[0];

  it('renders without crashing', () => {
    shallow(<ResultDiagram result={result} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<ResultDiagram result={result} />);
    expect(wrapper).toMatchSnapshot();
  });
});

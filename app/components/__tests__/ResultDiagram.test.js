import React from 'react';
import { shallow } from 'enzyme';
import ResultDiagram from '../ResultDiagram';
import DiagramLabel from '../DiagramLabel';
import { testsMock } from '../../mocks/tests';

describe('ResultDiagram', () => {
  const { result } = testsMock[0];

  it('renders without crashing', () => {
    shallow(<ResultDiagram result={result} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<ResultDiagram result={result} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows labels', () => {
    const wrapper = shallow(<ResultDiagram result={result} />);
    expect(wrapper.find(DiagramLabel)).toHaveLength(result.length);
  });
});

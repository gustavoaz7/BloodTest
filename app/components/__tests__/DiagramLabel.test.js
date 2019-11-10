import React from 'react';
import { shallow } from 'enzyme';
import DiagramLabel from '../DiagramLabel';
import { testsMock } from '../../mocks/tests';

describe('DiagramLabel', () => {
  const result = testsMock[0].result[0];
  it('renders without crashing', () => {
    shallow(<DiagramLabel result={result} />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<DiagramLabel result={result} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('accepts custom style', () => {
    const style = { backgroundColor: 'black' };
    const wrapper = shallow(<DiagramLabel style={style} result={result} />);

    expect(wrapper.props().style).toEqual(style);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import BloodResultItem, { Samples, Name, Email, SampleValue } from '../BloodResultItem';
import { resultsMock } from '../../mocks/results';
import { theme } from '../../theme';

// eslint-disable-next-line react/prop-types
function Wrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

describe('BloodResultItem', () => {
  const result = resultsMock[0];
  const options = { wrappingComponent: Wrapper };

  it('renders without crashing', () => {
    shallow(<BloodResultItem item={result} />, options);
  });

  it('renders profile correctly', () => {
    const wrapper = shallow(<BloodResultItem item={result} />, options)
      .dive()
      .dive();

    expect(wrapper.find(Name).text()).toBe(result.name);
    expect(wrapper.find(Email).text()).toBe(result.email);
  });

  it('renders provided samples correctly', () => {
    const item = {
      ...result,
      samples: [
        {
          time: 'morning',
          value: 0.51,
        },
        {
          time: 'afternoon',
          value: 0.36,
        },
        {
          time: 'evening',
          value: 0.14,
        },
      ],
    };
    const wrapper = shallow(<BloodResultItem item={item} />, options)
      .dive()
      .dive();

    const samples = wrapper.find(Samples);
    expect(samples.children()).toHaveLength(item.samples.length);

    const icons = samples.find(Feather);
    expect(icons.at(0).prop('name')).toBe('sunrise');
    expect(icons.at(1).prop('name')).toBe('sunset');
    expect(icons.at(2).prop('name')).toBe('moon');

    wrapper
      .find(SampleValue)
      .forEach((value, index) => expect(value.text()).toEqual(`${item.samples[index].value}`));
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<BloodResultItem item={result} />, options)
      .dive()
      .dive();
    expect(wrapper).toMatchSnapshot();
  });
});

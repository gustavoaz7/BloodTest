import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import BloodResultScreen from '../BloodResultScreen';
import { resultsMock } from '../../mocks/results';

describe('BloodResultScreen', () => {
  const testsResponse = { data: resultsMock };

  it('renders without crashing', () => {
    shallow(<BloodResultScreen />);
  });

  it('loads sorted blood tests', async () => {
    const mock = jest.fn(() => testsResponse);
    axios.get = mock;
    const wrapper = shallow(<BloodResultScreen />);

    await Promise.resolve();

    expect(mock).toHaveBeenCalled();
    expect(wrapper.state('results')).toEqual(resultsMock);
  });

  describe('matches snapshot', () => {
    it('loading state', () => {
      const wrapper = shallow(<BloodResultScreen />);

      expect(wrapper).toMatchSnapshot('loading');
    });

    it('error state', async () => {
      const mock = jest.fn(() => {
        throw new Error('error');
      });
      axios.get = mock;
      const wrapper = shallow(<BloodResultScreen />);
      await Promise.resolve();

      expect(wrapper).toMatchSnapshot('error');
    });

    it('success state', async () => {
      const mock = jest.fn(() => testsResponse);
      axios.get = mock;
      const wrapper = shallow(<BloodResultScreen />);
      await Promise.resolve();

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

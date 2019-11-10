import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import BloodListScreen from '../BloodListScreen';
import { testsMock } from '../../mocks/tests';

const sortedTestsMock = [testsMock[2], testsMock[0], testsMock[1]];

describe('BloodListScreen', () => {
  const testsResponse = { data: testsMock };

  it('renders without crashing', () => {
    shallow(<BloodListScreen />);
  });

  it('sorts blood tests correctly', () => {
    expect(BloodListScreen.prototype.sortTests(testsMock)).toEqual(sortedTestsMock);
  });

  it('loads sorted blood tests', async () => {
    const mock = jest.fn(() => testsResponse);
    axios.get = mock;
    const wrapper = shallow(<BloodListScreen />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'sortTests');

    await Promise.resolve();

    expect(mock).toHaveBeenCalled();
    expect(instance.sortTests).toHaveBeenCalled();
    expect(wrapper.state('tests')).toEqual(sortedTestsMock);
  });

  describe('matches snapshot', () => {
    it('loading state', () => {
      const wrapper = shallow(<BloodListScreen />);

      expect(wrapper).toMatchSnapshot('loading');
    });

    it('error state', async () => {
      const mock = jest.fn(() => {
        throw new Error('error');
      });
      axios.get = mock;
      const wrapper = shallow(<BloodListScreen />);
      await Promise.resolve();

      expect(wrapper).toMatchSnapshot('error');
    });

    it('success state', async () => {
      const mock = jest.fn(() => testsResponse);
      axios.get = mock;
      const wrapper = shallow(<BloodListScreen />);
      await Promise.resolve();

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

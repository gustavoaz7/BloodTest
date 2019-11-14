import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import BloodListScreen, { FlatListUI } from '../BloodListScreen';
import { testsMock } from '../../mocks/tests';
import { flushPromises } from '../../utils/tests';

const sortedTestsMock = [testsMock[2], testsMock[0], testsMock[1]];

describe('BloodListScreen', () => {
  const testsResponse = { data: testsMock };
  const axiosMock = jest.fn().mockImplementation(() => Promise.resolve(testsResponse));

  beforeEach(() => {
    axiosMock.mockClear();
    axios.get = axiosMock;
  });

  it('renders without crashing', () => {
    shallow(<BloodListScreen />);
  });

  it('sorts blood tests correctly', () => {
    expect(BloodListScreen.prototype.sortTests(testsMock)).toEqual(sortedTestsMock);
  });

  it('loads sorted blood tests when mouting', async () => {
    const wrapper = shallow(<BloodListScreen />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'sortTests');

    await flushPromises();

    expect(axiosMock).toHaveBeenCalled();
    expect(instance.sortTests).toHaveBeenCalled();
    expect(wrapper.state('tests')).toEqual(sortedTestsMock);
  });

  it('loads sorted blood tests on `pull to refresh` ', async () => {
    const wrapper = shallow(<BloodListScreen />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'loadTests');

    wrapper.update();
    instance.forceUpdate();

    await flushPromises();

    wrapper
      .find(FlatListUI)
      .props()
      .onRefresh();

    await flushPromises();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('matches snapshot', () => {
    it('loading state', () => {
      const wrapper = shallow(<BloodListScreen />);

      expect(wrapper).toMatchSnapshot('loading');
    });

    it('error state', async () => {
      const mock = jest.fn().mockImplementation(() => {
        throw new Error('error');
      });
      axios.get = mock;
      const wrapper = shallow(<BloodListScreen />);
      await flushPromises();

      expect(wrapper).toMatchSnapshot('error');
    });

    it('success state', async () => {
      const wrapper = shallow(<BloodListScreen />);
      await flushPromises();

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

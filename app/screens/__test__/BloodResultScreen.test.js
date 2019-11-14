import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import BloodResultScreen from '../BloodResultScreen';
import { resultsMock } from '../../mocks/results';
import { flushPromises } from '../../utils/tests';

describe('BloodResultScreen', () => {
  const resultResponse = { data: resultsMock };
  const axiosMock = jest.fn().mockImplementation(() => Promise.resolve(resultResponse));

  beforeEach(() => {
    axiosMock.mockClear();
    axios.get = axiosMock;
  });

  it('renders without crashing', () => {
    shallow(<BloodResultScreen />);
  });

  it('loads sorted blood tests', async () => {
    const wrapper = shallow(<BloodResultScreen />);

    await flushPromises();

    expect(axiosMock).toHaveBeenCalled();
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
      await flushPromises();

      expect(wrapper).toMatchSnapshot('error');
    });

    it('success state', async () => {
      const wrapper = shallow(<BloodResultScreen />);
      await flushPromises();

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import BloodResultsScreen, { FlatListUI } from '../BloodResultsScreen';
import {
  LOAD_BLOOD_RESULTS_FULFILLED_STATE as fulfilledState,
  LOAD_BLOOD_RESULTS_PENDING_STATE as pendingState,
  LOAD_BLOOD_RESULTS_REJECTED_STATE as rejectedState,
} from '../../redux/BloodResults/test.data';

describe('BloodResultScreen', () => {
  const noop = () => {};

  describe('renders without crashing', () => {
    it('pending state', () => {
      shallow(<BloodResultsScreen {...pendingState} loadBloodResults={noop} />);
    });
    it('fulfilled state', () => {
      shallow(<BloodResultsScreen {...fulfilledState} loadBloodResults={noop} />);
    });
    it('rejected state', () => {
      shallow(<BloodResultsScreen {...rejectedState} loadBloodResults={noop} />);
    });
  });
  it('loads tests when mouting', async () => {
    const spy = jest.fn();
    shallow(<BloodResultsScreen {...fulfilledState} loadBloodResults={spy} />);

    expect(spy).toHaveBeenCalled();
  });

  it('reloads tests on `pull to refresh` ', async () => {
    const spy = jest.fn();
    const wrapper = shallow(<BloodResultsScreen {...fulfilledState} loadBloodResults={spy} />);

    spy.mockClear();

    wrapper
      .find(FlatListUI)
      .props()
      .onRefresh();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('matches snapshot', () => {
    it('pending state', () => {
      const wrapper = shallow(<BloodResultsScreen {...pendingState} loadBloodResults={noop} />);

      expect(wrapper).toMatchSnapshot('pending');
    });

    it('rejected state', async () => {
      const wrapper = shallow(<BloodResultsScreen {...rejectedState} loadBloodResults={noop} />);

      expect(wrapper).toMatchSnapshot('rejected');
    });

    it('success state', async () => {
      const wrapper = shallow(<BloodResultsScreen {...fulfilledState} loadBloodResults={noop} />);

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

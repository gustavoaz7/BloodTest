import React from 'react';
import { shallow } from 'enzyme';
import BloodListScreen, { FlatListUI } from '../BloodListScreen';
import {
  LOAD_BLOOD_LIST_FULFILLED_STATE as fulfilledState,
  LOAD_BLOOD_LIST_PENDING_STATE as pendingState,
  LOAD_BLOOD_LIST_REJECTED_STATE as rejectedState,
} from '../../redux/BloodList/test.data';

describe('BloodListScreen', () => {
  const noop = () => {};

  describe('renders without crashing', () => {
    it('pending state', () => {
      shallow(<BloodListScreen {...pendingState} loadBloodList={noop} />);
    });
    it('fulfilled state', () => {
      shallow(<BloodListScreen {...fulfilledState} loadBloodList={noop} />);
    });
    it('rejected state', () => {
      shallow(<BloodListScreen {...rejectedState} loadBloodList={noop} />);
    });
  });

  it('loads tests when mouting', async () => {
    const spy = jest.fn();
    shallow(<BloodListScreen {...fulfilledState} loadBloodList={spy} />);

    expect(spy).toHaveBeenCalled();
  });

  it('reloads tests on `pull to refresh` ', async () => {
    const spy = jest.fn();
    const wrapper = shallow(<BloodListScreen {...fulfilledState} loadBloodList={spy} />);

    spy.mockClear();

    wrapper
      .find(FlatListUI)
      .props()
      .onRefresh();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('matches snapshot', () => {
    it('pending state', () => {
      const wrapper = shallow(<BloodListScreen {...pendingState} loadBloodList={noop} />);

      expect(wrapper).toMatchSnapshot('pending');
    });

    it('rejected state', async () => {
      const wrapper = shallow(<BloodListScreen {...rejectedState} loadBloodList={noop} />);

      expect(wrapper).toMatchSnapshot('rejected');
    });

    it('success state', async () => {
      const wrapper = shallow(<BloodListScreen {...fulfilledState} loadBloodList={noop} />);

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

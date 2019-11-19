import React from 'react';
import { shallow } from 'enzyme';
import BloodResultsScreen, { FlatListUI } from '../BloodResultsScreen';
import {
  LOAD_BLOOD_RESULTS_FULFILLED_STATE as fulfilledState,
  LOAD_BLOOD_RESULTS_PENDING_STATE as pendingState,
  LOAD_BLOOD_RESULTS_REJECTED_STATE as rejectedState,
} from '../../redux/BloodResults/test.data';
import { SCREENS } from '../../constants';
import { stackNavigationProps } from '../../utils/tests';

describe('BloodResultScreen', () => {
  const noop = () => {};
  const props = {
    loadBloodResults: noop,
    navigation: stackNavigationProps,
    ...fulfilledState,
  };

  describe('renders without crashing', () => {
    it('pending state', () => {
      shallow(<BloodResultsScreen {...props} {...pendingState} />);
    });
    it('fulfilled state', () => {
      shallow(<BloodResultsScreen {...props} />);
    });
    it('rejected state', () => {
      shallow(<BloodResultsScreen {...props} {...rejectedState} />);
    });
  });
  it('loads tests when mouting', async () => {
    const spy = jest.fn();
    shallow(<BloodResultsScreen {...props} loadBloodResults={spy} />);

    expect(spy).toHaveBeenCalled();
  });

  it('reloads tests on `pull to refresh` ', async () => {
    const spy = jest.fn();
    const wrapper = shallow(<BloodResultsScreen {...props} loadBloodResults={spy} />);

    spy.mockClear();

    wrapper
      .find(FlatListUI)
      .props()
      .onRefresh();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`navigates to ${SCREENS.TEMPLATE} on 'navigateTemplate' call`, () => {
    const navigateSpy = jest.fn();
    const navigation = {
      ...stackNavigationProps,
      navigate: navigateSpy,
    };
    const wrapper = shallow(<BloodResultsScreen {...props} navigation={navigation} />);

    wrapper.instance().navigateTemplate();

    expect(navigateSpy).toBeCalledTimes(1);
    expect(navigateSpy.mock.calls[0][0]).toBe(SCREENS.TEMPLATE);
  });

  describe('matches snapshot', () => {
    it('pending state', () => {
      const wrapper = shallow(<BloodResultsScreen {...props} {...pendingState} />);

      expect(wrapper).toMatchSnapshot('pending');
    });

    it('rejected state', async () => {
      const wrapper = shallow(<BloodResultsScreen {...props} {...rejectedState} />);

      expect(wrapper).toMatchSnapshot('rejected');
    });

    it('success state', async () => {
      const wrapper = shallow(<BloodResultsScreen {...props} />);

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

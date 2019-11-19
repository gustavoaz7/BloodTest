import React from 'react';
import { shallow } from 'enzyme';
import BloodListScreen, { FlatListUI } from '../BloodListScreen';
import {
  LOAD_BLOOD_LIST_FULFILLED_STATE as fulfilledState,
  LOAD_BLOOD_LIST_PENDING_STATE as pendingState,
  LOAD_BLOOD_LIST_REJECTED_STATE as rejectedState,
} from '../../redux/BloodList/test.data';
import { SCREENS } from '../../constants';
import { stackNavigationProps } from '../../utils/tests';

describe('BloodListScreen', () => {
  const noop = () => {};
  const props = {
    loadBloodList: noop,
    navigation: stackNavigationProps,
    ...fulfilledState,
  };

  describe('renders without crashing', () => {
    it('pending state', () => {
      shallow(<BloodListScreen {...props} {...pendingState} />);
    });
    it('fulfilled state', () => {
      shallow(<BloodListScreen {...props} />);
    });
    it('rejected state', () => {
      shallow(<BloodListScreen {...props} {...rejectedState} />);
    });
  });

  it('loads tests when mouting', async () => {
    const spy = jest.fn();
    shallow(<BloodListScreen {...props} loadBloodList={spy} />);

    expect(spy).toHaveBeenCalled();
  });

  it('reloads tests on `pull to refresh` ', async () => {
    const spy = jest.fn();
    const wrapper = shallow(<BloodListScreen {...props} loadBloodList={spy} />);

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
    const wrapper = shallow(<BloodListScreen {...props} navigation={navigation} />);

    wrapper.instance().navigateTemplate();

    expect(navigateSpy).toBeCalledTimes(1);
    expect(navigateSpy.mock.calls[0][0]).toBe(SCREENS.TEMPLATE);
  });

  describe('matches snapshot', () => {
    it('pending state', () => {
      const wrapper = shallow(<BloodListScreen {...props} {...pendingState} />);

      expect(wrapper).toMatchSnapshot('pending');
    });

    it('rejected state', async () => {
      const wrapper = shallow(<BloodListScreen {...props} {...rejectedState} />);

      expect(wrapper).toMatchSnapshot('rejected');
    });

    it('success state', async () => {
      const wrapper = shallow(<BloodListScreen {...props} />);

      expect(wrapper).toMatchSnapshot('success');
    });
  });
});

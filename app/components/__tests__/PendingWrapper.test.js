import React from 'react';
import { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import Loading from '../Loading';
import PendingWrapper from '../PendingWrapper';
import { stateWithStatus, setPending, setFulfilled } from '../../redux/utils/status';

describe('PendingWrapper', () => {
  const children = (
    <View>
      <Text>Test</Text>
    </View>
  );
  const state = {
    random: stateWithStatus,
  };

  describe('pending state', () => {
    const value = setPending(state);

    it('renders loading', () => {
      const wrapper = shallow(<PendingWrapper value={value}>{children}</PendingWrapper>);

      expect(wrapper.find(Loading).exists()).toBe(true);
    });

    it('accepts custom props for loading', () => {
      const color = 'black';
      const loadingProps = { color };
      const wrapper = shallow(
        <PendingWrapper value={value} loadingProps={loadingProps}>
          {children}
        </PendingWrapper>,
      );

      expect(wrapper.find(Loading).props().color).toBe(color);
    });
  });

  describe('fulfilled state', () => {
    it('renders children', () => {
      const value = setFulfilled(state);
      const wrapper = shallow(<PendingWrapper value={value}>{children}</PendingWrapper>);

      expect(wrapper.find(Loading).exists()).toBe(false);
      expect(wrapper.containsMatchingElement(children)).toBe(true);
    });
  });
});

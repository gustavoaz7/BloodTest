import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { tabBarIconTypes } from '../../types';

export default function NavigationBottomListIcon({ tintColor }) {
  return <Feather name="list" size={26} color={tintColor} />;
}

NavigationBottomListIcon.propTypes = tabBarIconTypes;

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { tabBarIconTypes } from '../../types';

export default function NavigationBottomResultIcon({ tintColor }) {
  return <Feather name="bar-chart-2" size={26} color={tintColor} />;
}

NavigationBottomResultIcon.propTypes = tabBarIconTypes;

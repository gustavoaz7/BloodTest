import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import styled, { withTheme } from 'styled-components/native';
import Text from './base/Text';
import Card from './base/Card';
import { resultType, themeType } from '../types';
import Touchable from './base/Touchable';

const ICON_MAP = {
  morning: 'sunrise',
  afternoon: 'sunset',
  evening: 'moon',
};

function BloodResultItem({ onPress, item: { name, email, samples }, theme }) {
  return (
    <Touchable onPress={onPress}>
      <Card>
        <Header>
          <Feather name="user" size={40} color={theme.primary} />
          <Profile>
            <Name>{name}</Name>
            <Email numberOfLines={1}>{email}</Email>
          </Profile>
        </Header>
        <Samples>
          {samples.map(({ time, value }) => (
            <SampleBox key={`${time}-${value}`}>
              <Feather name={ICON_MAP[time]} size={25} color={theme.secondary} />
              <SampleValue>{value}</SampleValue>
            </SampleBox>
          ))}
        </Samples>
      </Card>
    </Touchable>
  );
}

const Row = styled(View)`
  flex-direction: row;
`;

const Header = styled(Row)`
  margin-bottom: 4px;
`;

const Profile = styled(View)`
  flex: 1;
  justify-content: space-around;
  margin-left: 10px;
`;

export const Name = styled(Text)`
  font-weight: bold;
`;

export const Email = styled(Text)`
  color: 'rgba(0, 0, 0, 0.5)';
`;

export const Samples = styled(Row)`
  justify-content: space-around;
  margin: 8px 0;
`;

const SampleBox = styled(View)`
  align-items: center;
`;

export const SampleValue = styled(Text)`
  margin-top: 4px;
`;

BloodResultItem.propTypes = {
  item: resultType.isRequired,
  theme: themeType.isRequired,
  onPress: PropTypes.func,
};

BloodResultItem.defaultProps = {
  onPress() {},
};

export default withTheme(BloodResultItem);

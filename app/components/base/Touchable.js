import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const canUseForeground = TouchableNativeFeedback.canUseNativeForeground();

export default function Touchable({
  style,
  children,
  onPress,
  borderless = false,
  pressColor = 'rgba(0, 0, 0, .32)',
  disabled = false,
  disabledOpacity = 0.4,
  useOpacity = false,
  ...rest
}) {
  const disabableOnPress = disabled ? undefined : onPress;
  const finalStyle = [{ opacity: disabled ? disabledOpacity : 1 }, style];

  if (Platform.OS === 'android' && !useOpacity) {
    return (
      <TouchableNativeFeedback
        useForeground={canUseForeground}
        background={TouchableNativeFeedback.Ripple(pressColor, borderless)}
        {...rest}
        style={null}
        onPress={disabableOnPress}
      >
        <View style={finalStyle}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity {...rest} onPress={disabableOnPress}>
      <View style={finalStyle}>{children}</View>
    </TouchableOpacity>
  );
}

Touchable.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  borderless: PropTypes.bool,
  pressColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledOpacity: PropTypes.number,
  useOpacity: PropTypes.bool,
};

Touchable.defaultProps = {
  style: null,
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)',
  disabled: false,
  disabledOpacity: 0.4,
  useOpacity: false,
};

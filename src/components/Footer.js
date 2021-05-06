import React from 'react';
import {View, useWindowDimensions} from 'react-native';

import RoundedButton from './RoundedButtons';

const Footer = ({
  backgroundColor,
  rightButtonLabel = false,
  rightButtonPress = false,
  leftButtonLabel = false,
  leftButtonPress = false,
}) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: HEIGHT,
          backgroundColor,
          opacity: 0.6,
          alignItems: 'center',
          paddingHorizontal: FOOTER_PADDING,
        }}>
        <RoundedButton label={leftButtonLabel} onPress={leftButtonPress} />
        <RoundedButton label={rightButtonLabel} onPress={rightButtonPress} />
      </View>
    </>
  );
};

export default Footer;

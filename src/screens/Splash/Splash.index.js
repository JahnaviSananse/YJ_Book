import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ActivityIndicator, View, Image} from 'react-native';
import styles from './Splash.style';
import {IMAGE} from '../../assets/images/images';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Image style={styles.tinyLogo} source={IMAGE.BUILDING} />
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default Splash;

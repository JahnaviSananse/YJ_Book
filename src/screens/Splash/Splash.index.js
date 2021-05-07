import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ActivityIndicator, View, Image, Text} from 'react-native';
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
      <ActivityIndicator size="large" color="black" />
      <Text style={{fontSize: 30, marginBottom: 10}}> Welcome </Text>
      <Image style={styles.tinyLogo} source={IMAGE.BUILDING} />
    </View>
  );
};

export default Splash;

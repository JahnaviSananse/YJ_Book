import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {IMAGE} from '../../assets/images/images';
import styles from './style';

const Album = () => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={IMAGE.FRIENDS} />
        <Image style={styles.tinyLogo} source={IMAGE.BOY} />
        <Image style={styles.tinyLogo} source={IMAGE.HOME} />
      </View>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={IMAGE.ALBUM} />
        <Image style={styles.tinyLogo} source={IMAGE.BUILDING} />
        <Image style={styles.tinyLogo} source={IMAGE.GIRL} />
      </View>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={IMAGE.VIRGO} />
        <Image style={styles.tinyLogo} source={IMAGE.LOUPE} />
        <Image style={styles.tinyLogo} source={IMAGE.SETTING} />
      </View>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={IMAGE.FRIENDS} />
        <Image style={styles.tinyLogo} source={IMAGE.BOY} />
        <Image style={styles.tinyLogo} source={IMAGE.HOME} />
      </View>
    </>
  );
};

export default Album;

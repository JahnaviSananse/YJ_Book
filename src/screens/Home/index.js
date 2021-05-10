import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button.index';
import {View} from 'react-native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.view}>
        <Button
          title="SIGN UP"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <Button
          title="SIGN IN"
          onPress={() => {
            navigation.navigate('Signin');
          }}
        />
      </View>
    </>
  );
};

export default Home;

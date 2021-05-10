import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button.index';
const Home = () => {
  const navigation = useNavigation();
  return (
    <>
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
    </>
  );
};

export default Home;

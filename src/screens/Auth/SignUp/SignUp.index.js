import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../SignIn/SignIn.style';
import {useNavigation} from '@react-navigation/native';
import TextField from '../../../components/TextFied/TextFied.index';
import {IMAGE} from '../../../assets/images/images';

const SignUp = () => {
  const navigation = useNavigation();

  const renderTabs = () => {
    return (
      <View>
        <View style={styles.headView}>
          <Image style={styles.img} source={IMAGE.COMPUTER} />
        </View>
        <View style={styles.signupView}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </View>
      </View>
    );
  };
  const renderSignin = () => {
    return (
      <View>
        <TextField title={'Name'} placeholder={'Enter Your Name'} />
        <TextField title={'Email Address'} placeholder={'abc@gmail.com'} />
        <TextField title={'Password'} placeholder={'Enter Here'} />

        <View style={styles.touchableView}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Alert', 'Forget Password ?');
            }}>
            <Text style={styles.forgotPass}> Forgot Password? </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signinButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.signinText}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {renderTabs()}
        {renderSignin()}
      </SafeAreaView>
    </>
  );
};

export default SignUp;

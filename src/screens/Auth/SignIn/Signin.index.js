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
import TextField from '../../../components/TextFied/TextFied.index';
import {IMAGE} from '../../../assets/images/images';
import {useAuthHook} from '../../../Hooks/Auth.hooks';

const Signin = ({navigation}) => {
  const authHook = useAuthHook({email: '', password: ''});
  console.log('>>>>>>>>>>>>>>>>', authHook);

  const renderTabs = () => {
    return (
      <View>
        <View style={styles.headView}>
          <Image style={styles.img} source={IMAGE.COMPUTER} />
        </View>
        <View style={styles.signupView}>
          <Text style={styles.signupText}>SIGN IN</Text>
        </View>
      </View>
    );
  };
  const renderSignin = () => {
    return (
      <View>
        <TextField
          value={authHook.data.email}
          change={text => authHook.onChange('email', text)}
          title={'Email Address'}
          placeholder={'abc@gmail.com'}
        />

        <TextField
          value={authHook.data.password}
          change={text => authHook.onChange('password', text)}
          title={'Password'}
          placeholder={'Enter Here'}
        />

        <View style={styles.touchableView}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Alert', 'Forget Password ?');
            }}>
            <Text style={styles.forgotPass}> Forgot Password? </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signinButton}>
          <TouchableOpacity onPress={() => authHook.onNext(navigation, 'Home')}>
            <Text style={styles.signinText}> SIGN IN </Text>
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

export default Signin;

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
import {useAuthHook} from '../../../Hooks/Auth.hooks';

const SignUp = () => {
  const authHook = useAuthHook({name: '', email: '', password: ''});
  console.log('>>>>>>>>>>>>>>>>', authHook);

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
        <TextField
          value={authHook.data.name}
          // change = {(text)=>setImmediate(text)}
          change={text => authHook.onChange('name', text)}
          title={'Name'}
          placeholder={'Enter Your Name'}
        />
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
              navigation.navigate('Signin');
            }}>
            <Text style={styles.forgotPass}> Already have an Account ? </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signinButton}>
          <TouchableOpacity
            onPress={() => authHook.onNext(navigation, 'Signin')}>
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

import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {IMAGE} from '../assets/images/images';
import {SettingScreen} from '../screens/Stacks/SettingScreen';
import Album from '../screens/Album/index';
import Home from '../screens/Home/index';
import Search from '../screens/Search/index';
import Setting from '../screens/Settings/index';
import {HomeScreen} from '../screens/Stacks/index';
//import { BottomTabBar } from '@react-navigation/bottom-tabs';

const Tabbar = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.HOME} />,
    },
  },

  Album: {
    screen: Album,
    navigationOptions: {
      tabBarLabel: 'Album',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.ALBUM} />,
    },
  },

  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.LOUPE} />,
    },
  },

  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.SETTING} />,
    },
  },
});

export default createAppContainer(Tabbar);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,

    //alignSelf: 'center',
    //marginRight: 30,
    //marginLeft: 10,
  },
});

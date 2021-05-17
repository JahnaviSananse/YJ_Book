// import {AppRegistry} from 'react-native';

// import App from './App';
// import {name as appName} from './app.json';
// import AppStack from './src/AppStack';
// import MainTabbar from './src/screens/MainTabbar';
// import hookForm from './src/screens/hookForm/index';

// AppRegistry.registerComponent(appName, () => MainTabbar);
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/Redux/store';
import MainTabbar from './src/screens/MainTabbar';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <MainTabbar />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);

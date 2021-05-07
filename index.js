/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import demoApp from './Hooks/useState/demoApp';
import AppStack from './src/AppStack';
import demoApp from './Hooks/useReducer/demoState';
import demoReducer from './Hooks/useReducer/demoReducer';

AppRegistry.registerComponent(appName, () => demoReducer);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppStack from './src/AppStack';
import tabbar from './src/BottomTabbar/tabbar';
AppRegistry.registerComponent(appName, () => AppStack);

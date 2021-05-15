/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
import AppStack from './src/AppStack';
import MainTabbar from './src/screens/MainTabbar';
import hookForm from './src/screens/hookForm/index';

AppRegistry.registerComponent(appName, () => MainTabbar);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import demoApp from './src/demo/demoApp';
import AppStack from './src/AppStack';

AppRegistry.registerComponent(appName, () => AppStack);

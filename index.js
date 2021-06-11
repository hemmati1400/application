/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import App from './App';
import {name as appName} from './app.json';

I18nManager.forceRTL(true);

if (!I18nManager.isRTL) {
  RNRestart.Restart();
}

AppRegistry.registerComponent(appName, () => App);

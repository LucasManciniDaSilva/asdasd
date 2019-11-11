import { AppRegistry } from 'react-native';

import App from './src';
// eslint-disable-next-line import/no-unresolved
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

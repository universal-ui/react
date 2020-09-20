import { AppRegistry, } from 'react-native';

import App from './app.hot';

AppRegistry.registerComponent('app', () => App);
AppRegistry.runApplication('app', {
	initialProps: {},
	rootTag: document.getElementById('root'),
});

if (module.hot) module.hot.accept();

import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Provider, Floats, } from '@react-universal-ui/components';

import HomeScreen from './screens/home';

type Props = {

};

const App = (props: Props) => {
	return <Provider>
		<View style={styles.container}>
			<HomeScreen/>
			<Floats/>
		</View>
	</Provider>;
};

export default App;

const styles = StyleSheet.create({
	container: {

	},
});

import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import HomeScreen from './screens/home';

type Props = {

};

const App = (props: Props) => {
	return <View style={styles.container}>
		<HomeScreen/>
	</View>;
};

export default App;

const styles = StyleSheet.create({
	container: {

	},
});

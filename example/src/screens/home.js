import React, { useState, useContext, } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Provider, Button, } from '@react-universal-ui/components';

type Props = {

};

const HomeScreen = (props: Props) => {
	const [counter, setCounter] = useState(0);

	return <View style={styles.container}>
		<Button/>
	</View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {

	},
});

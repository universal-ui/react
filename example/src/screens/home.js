import React, { useState, } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { greeting, } from '@react-universal-ui/components';

type Props = {

};

const HomeScreen = (props: Props) => {
	const [counter, setCounter] = useState(0);

	return <View style={styles.container}>
		<Text onPress={() => setCounter(counter + 1)}>
			{greeting()}{counter} !!
		</Text>
	</View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {

	},
});

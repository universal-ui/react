import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

export const Button = (props: Props) => {
	return <View style={styles.container}>
		<Text>Button</Text>
	</View>;
};

export default Button;

const styles = StyleSheet.create({
	container: {

	},
});

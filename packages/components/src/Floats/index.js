import React, { useContext, } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import { RuuiContext, ruuiActions, } from '@react-universal-ui/core';

type Props = {

};

export const Floats = (props: Props) => {
	const [state, dispatch] = useContext(RuuiContext);

	return <View
		pointerEvents="box-none"
		style={styles.container}>
		<TouchableOpacity onPress={() => dispatch(ruuiActions.increaseCounter())}>
			<Text style={{ fontSize: 30, }}>
				{state.counter}!
			</Text>
		</TouchableOpacity>
	</View>;
};

export default Floats;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0, left: 0, bottom: 0, right: 0,
		paddingTop: 20,
	},
});

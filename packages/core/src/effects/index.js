import React, { useReducer, } from 'react';
import { reducer, initialState, } from '../reducers/floats';

export function useFloats() {
	const [floats, dispatch] = useReducer(reducer, initialState);
	return [floats, dispatch];
}

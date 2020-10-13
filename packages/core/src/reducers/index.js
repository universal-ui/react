import { createContext, } from 'react';
import * as Actions from './actionTypes';

const initialState = {
	counter: 0,
};

const reducer = (state, action) => {
	const { type, payload, } = action;

	switch (type) {
	case Actions.IncreaseCounter:
		return { ...state, counter: state.counter + (payload || 1), };
	default:
		return state;
	}
};

export const RuuiReducer = { reducer, initialState, };
export const RuuiContext = createContext();

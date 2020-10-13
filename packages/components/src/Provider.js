import React, { useReducer, useContext, useMemo, } from 'react';
import { RuuiContext, RuuiReducer, } from '@react-universal-ui/core';

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(RuuiReducer.reducer, RuuiReducer.initialState);
	const store = useMemo(() => [state, dispatch], [state]);

	return <RuuiContext.Provider value={store}>
		{children}
	</RuuiContext.Provider>
}

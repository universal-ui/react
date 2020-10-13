import * as Actions from './actionTypes';

const increaseCounter = (amount) => {
	return { type: Actions.IncreaseCounter, payload: amount, };
};

export const ruuiActions = {
	increaseCounter,
};

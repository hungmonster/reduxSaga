import * as Types from "redux/constant";
const initialState = 0;

export const numberReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case Types.INCREMENT_SUCCESS: {
			console.log(action.payload);
			let cloneState = JSON.parse(JSON.stringify(state));
			cloneState = cloneState + 1;
			state = cloneState;
			return cloneState;
		}
		case Types.DECREMENT: {
			let cloneState = JSON.parse(JSON.stringify(state));
			cloneState = cloneState - 1;
			state = cloneState;
			return cloneState;
		}

		default:
			return state;
	}
};

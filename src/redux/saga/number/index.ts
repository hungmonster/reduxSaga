import axios from "axios";
import {
	all,
	call,
	debounce,
	put,
	takeEvery,
	takeLatest,
	takeLeading,
	throttle,
} from "redux-saga/effects";
import * as Types from "redux/constant";

function getDataUser() {
	return axios
		.get("https://jsonplaceholder.typicode.com/posts/2")
		.then((response) => ({ response }))
		.catch((error) => ({ error }));
}

export function* incrementNumber(payload: any) {
	const { response, error } = yield call(getDataUser);
	if (response) {
		console.log("response", response);
		yield put({ type: Types.INCREMENT_SUCCESS, payload: response.data });
	} else {
		console.log(error);
	}
}

export default function* numberSaga() {
	yield takeLatest(Types.INCREMENT, incrementNumber);
}
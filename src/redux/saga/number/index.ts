import { all, put, takeEvery } from "redux-saga/effects";
import * as Types from "redux/constant";

export function* incrementNumber(payload: any) {
	console.log(
		"🚀 ~ file: index.ts ~ line 5 ~ function*incrementNumber ~ payload",
		payload
	);
	yield put({ type: Types.INCREMENT_SUCCESS, payload: payload});
}

export default function* numberSaga() {
	yield all([takeEvery(Types.INCREMENT, incrementNumber)]);
}

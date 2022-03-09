import { all, fork } from "redux-saga/effects";
import numberSaga from "./number";

const helloSaga = function* helloSaga() {
	console.log("first");
};
export default function* rootSaga() {
	yield all([fork(numberSaga)]);
}

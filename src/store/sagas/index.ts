import { all } from "redux-saga/effects";
import { postsSagas } from "./postsSaga";

export default function* rootSaga() {
  yield all([...postsSagas]);
}

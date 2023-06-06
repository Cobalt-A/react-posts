import { all } from "redux-saga/effects";
import { postsSagas } from "./postsSaga";
import { userPostsSagas } from "./userPostsSaga";
import { userSagas } from "./userSaga";

export default function* rootSaga() {
  yield all([...postsSagas]);
  yield all([...userPostsSagas]);
  yield all([...userSagas]);
}

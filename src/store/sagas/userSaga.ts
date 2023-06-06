import { takeLatest, put, fork, call } from "redux-saga/effects";
import { userSlice } from "../reducers/user";
import { IUser } from "../../types/IUser";
import { getApiResponse } from "../../api";

function* getSagaUserAsync(action: any) {
  try {
    const userId = action.payload;
    const response: IUser = yield call(getApiResponse<IUser>, `/users/${userId}`);
    yield put(userSlice.actions.setUser(response));
  } catch (error) {
    console.error(error || "Cannot get api response");
    yield put(userSlice.actions.setUser(null));
  } finally {
    yield put(userSlice.actions.setLoading(false));
  }
}

function* onLoadUserPosts() {
  yield takeLatest(userSlice.actions.getUser.type, getSagaUserAsync);
}

export const userSagas = [fork(onLoadUserPosts)];

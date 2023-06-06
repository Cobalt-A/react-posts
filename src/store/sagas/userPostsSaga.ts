import { takeLatest, put, fork, call } from "redux-saga/effects";
import { userPostsSlice } from "../reducers/userPosts";
import { IPost } from "../../types/IPost";
import { getApiResponse } from "../../api";

function* getSagaUserPostsAsync(action: any) {
  try {
    const userId = action.payload;
    const response: IPost[] = yield call(
      getApiResponse<IPost[]>,
      `/users/${userId}/posts`
    );
    yield put(userPostsSlice.actions.setUserPosts(response));
  } catch (error) {
    console.error(error || "Cannot get api response");
  } finally {
    yield put(userPostsSlice.actions.setLoading(false));
  }
}

function* onLoadUserPosts() {
  yield takeLatest(userPostsSlice.actions.getUserPosts.type, getSagaUserPostsAsync);
}

export const userPostsSagas = [fork(onLoadUserPosts)];

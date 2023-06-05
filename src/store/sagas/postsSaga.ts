import { takeLatest, put, fork, call, select } from "redux-saga/effects";
import { postsSlice } from "../reducers/posts";
import { IPost } from "../../types/IPost";
import { getApiResponse } from "../../api";

function* getSagaPostsAsync(action: any) {
  try {
    const page = action.payload;
    const response: IPost[] = yield call(
      getApiResponse<IPost[]>,
      `/posts?_limit=8&_page=${page}`
    );
    const currentState: IPost[] = yield select((state) => state.postsReducer.posts);
    yield put(postsSlice.actions.setPosts([...currentState, ...response]));
  } catch (error) {
    console.error(error || "Cannot get api response");
  } finally {
    yield put(postsSlice.actions.setLoading(false));
  }
}

function* onLoadPosts() {
  yield takeLatest(postsSlice.actions.getPosts.type, getSagaPostsAsync);
}

export const postsSagas = [fork(onLoadPosts)];

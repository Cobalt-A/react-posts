import { takeLatest, put, fork, call } from "redux-saga/effects";
import { postsSlice } from "../reducers/posts";

function* getSagaPostsAsync() {}

function* onLoadPosts() {
  yield takeLatest(postsSlice.actions.getPosts.type, getSagaPostsAsync);
}

export const commentsSagas = [fork(onLoadPosts)];

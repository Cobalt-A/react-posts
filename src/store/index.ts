import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/posts";
import userPostsReducer from "./reducers/userPosts";
import userReducer from "./reducers/user";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  postsReducer,
  userPostsReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

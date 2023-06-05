import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/IPost";

interface PostsState {
  posts: IPost[];
  page: number;
}

const initialState: PostsState = {
  posts: [],
  page: 1,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      return state;
    },
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    setPostsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export default postsSlice.reducer;

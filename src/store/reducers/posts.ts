import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/IPost";

interface PostsState {
  posts: IPost[];
  page: number;
  isLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  page: 1,
  isLoading: false,
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default postsSlice.reducer;

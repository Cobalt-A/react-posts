import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/IPost";

interface PostsState {
  posts: IPost[];
  isLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
};

export const userPostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getUserPosts: (state, action) => {
      return state;
    },
    setUserPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default userPostsSlice.reducer;

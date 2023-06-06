import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../types/IPost";

interface PostsState {
  posts: IPost[];
  searchValue: string;
  page: number;
  isLoading: boolean;
  isShowMoreButton: boolean;
}

const initialState: PostsState = {
  posts: [],
  searchValue: "",
  page: 1,
  isLoading: false,
  isShowMoreButton: false,
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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setPostsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setShowMoreButton: (state, action: PayloadAction<boolean>) => {
      state.isShowMoreButton = action.payload;
    },
  },
});

export default postsSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";

interface PostsState {
  user: IUser | undefined | null;
  isLoading: boolean;
}

const initialState: PostsState = {
  user: undefined,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getUser: (state, action) => {
      return state;
    },
    setUser: (state, action: PayloadAction<IUser | undefined | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default userSlice.reducer;

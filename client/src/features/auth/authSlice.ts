import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userItem = localStorage.getItem("user");
const getUserfromLocalStorage = userItem ? JSON.parse(userItem) : null;
interface UserType {
  username: string;
  password: string;
}
const initialState = {
  user: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ""
};

export const login = createAsyncThunk("auth/admin-login", async (user: UserType, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: buider => {
    buider
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
      });
  }
});

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

export const getBlogs = createAsyncThunk("/blog/get-blogs", (_, thunkApi) => {
  try {
    return blogService.getBlogs();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState = {
  blogs: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: ""
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBlogs.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.isLoading = false;
        state.message = action.error.message || "";
      });
  }
});

export default blogSlice.reducer;

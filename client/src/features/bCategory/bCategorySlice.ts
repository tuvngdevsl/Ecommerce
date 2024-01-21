import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bCategoryService from "./bCategoryService";
import { bCategory } from "types/bCategory.type";
interface BCategoryState {
  bCategories: bCategory[];
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  message: string;
}
export const getBlogCategories = createAsyncThunk(
  "/blogCategory/get-blogCategories",
  (_, thunkApi) => {
    try {
      return bCategoryService.getBlogCategories();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState: BCategoryState = {
  bCategories: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: ""
};

const bCategorySlice = createSlice({
  name: "bCategories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBlogCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBlogCategories.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.bCategories = action.payload;
      })
      .addCase(getBlogCategories.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.isLoading = false;
        state.message = action.error.message || "";
      });
  }
});

export default bCategorySlice.reducer;

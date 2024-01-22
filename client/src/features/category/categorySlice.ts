import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";
import { Category } from "types/category.type";

interface CategoryState {
  categories: Category[];
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  message: string;
}

export const getCategories = createAsyncThunk("/category/get-categories", async (_, thunkApi) => {
  try {
    return await categoryService.getCategories();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState: CategoryState = {
  categories: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: ""
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action: any) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action: any) => {
        state.isSuccess = false;
        state.isError = true;
        state.isLoading = false;
        state.message = action.error.message || "";
      });
  }
});

export default categorySlice.reducer;

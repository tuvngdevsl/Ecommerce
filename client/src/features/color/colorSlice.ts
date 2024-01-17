import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import colorService from "./colorService";

export const getColors = createAsyncThunk("/color/get-colors", (_, thunkApi) => {
  try {
    return colorService.getColors();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState = {
  colors: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: ""
};

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getColors.pending, state => {
        state.isLoading = true;
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.colors = action.payload;
      })
      .addCase(getColors.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.isLoading = false;
        state.message = action.error.message || "";
      });
  }
});

export default colorSlice.reducer;

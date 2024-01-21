import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";
import { Brand } from "types/brand.type";

interface BrandState {
  brands: Brand[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export const getBrands = createAsyncThunk("brand/get-brands", async (_, thunkApi) => {
  try {
    return await brandService.getBrands();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState: BrandState = {
  brands: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBrands.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error.message || "";
      });
  }
});

export default brandSlice.reducer;

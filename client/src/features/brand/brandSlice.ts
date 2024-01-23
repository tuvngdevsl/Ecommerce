import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";
import { Brand } from "types/brand.type";

interface BrandState {
  brands: Brand[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  createdBrand: any;
}

export const getBrands = createAsyncThunk("brand/get-brands", async (_, thunkApi) => {
  try {
    return await brandService.getBrands();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const createBrands = createAsyncThunk(
  "brand/create-brand",
  async (dataBrand: any, thunkApi) => {
    try {
      return await brandService.createBrand(dataBrand);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState: BrandState = {
  brands: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  createdBrand: null
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
      })
      .addCase(createBrands.pending, state => {
        state.isLoading = true;
      })
      .addCase(createBrands.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.createdBrand = action.payload;
      })
      .addCase(createBrands.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error.message || "";
      });
  }
});

export default brandSlice.reducer;

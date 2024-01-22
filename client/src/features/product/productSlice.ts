import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productServices";
import { Product } from "types/product.type";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}
export const getProducts = createAsyncThunk("product/get-products", async (_, thunkApi) => {
  try {
    return await productService.getProducts();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState: ProductState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: buider => {
    buider
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "";
      });
  }
});
export default productSlice.reducer;

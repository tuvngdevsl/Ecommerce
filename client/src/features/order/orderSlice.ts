import orderService from "./orderServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk("/order/get-orders", async (_, thunkApi) => {
  try {
    return await orderService.getOrders();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState = {
  orders: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.orders = action.payload;
        state.message = "success";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error.message || "";
      });
  }
});

export default orderSlice.reducer;

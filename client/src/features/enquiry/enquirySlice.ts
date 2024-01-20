import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enquiryServices from "./enquiryServices";

export const getEnquiries = createAsyncThunk("/enquiry/get-enquiries", async (_, thunkApi) => {
  try {
    return await enquiryServices.getEnquiry();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState = {
  enquires: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {},
  extraReducers: builders => {
    builders
      .addCase(getEnquiries.pending, state => {
        state.isLoading = true;
      })
      .addCase(getEnquiries.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.enquires = action.payload;
      })
      .addCase(getEnquiries.rejected, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error.message || "";
      });
  }
});

export default enquirySlice.reducer;

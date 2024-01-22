import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enquiryServices from "./enquiryServices";
import { Enquiry } from "types/enquiry.type";

interface EnquiryState {
  enquiries: Enquiry[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export const getEnquiries = createAsyncThunk("/enquiry/get-enquiries", async (_, thunkApi) => {
  try {
    return await enquiryServices.getEnquiry();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const initialState: EnquiryState = {
  enquiries: [],
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
        state.enquiries = action.payload;
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

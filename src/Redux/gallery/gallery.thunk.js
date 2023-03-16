import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk("sdfsdgsdgdfgdfg", async (query, thunkAPI) => {
    
    try {
        const response = await axios.get(`http://localhost:6868/product/name?q=${query}`);
      
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});
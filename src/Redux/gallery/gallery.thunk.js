import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk("sdfsdgsdgdfgdfg", async (query, thunkAPI) => {
    
    try {
        const response = await axios({
        method: 'get',
            url: `/product/name?q=${query}`,
        });
      console.log(response.data)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://localhost:6868";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = null;
    }
}

export const regThunk = createAsyncThunk("user/register", async (credentials, thunkAPI) => {
    try {
        const response = await axios({
        method: 'post',
        url: '/users/signup',
        data: credentials,      
        });

        token.set(response.data.token)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const loginThunk = createAsyncThunk("user/login", async (credentials, thunkAPI) => {
    
    try {
        const response = await axios({
        method: 'post',
        url: '/users/login',
        data: credentials,      
        });

        token.set(response.data.token)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const logoutThunk = createAsyncThunk("user/logout", async (_, thunkAPI) => {
    
    try {
        const response = await axios({
        method: 'post',
        url: '/users/logout',
        });
      token.unset();
      console.log(response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const refreshThunk = createAsyncThunk("contacts/refresh", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
  
    token.set(state.auth.token)

    try {
        const response = await axios({
        method: 'get',
        url: '/users/current',
        });
      return response.data;
        
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  
});
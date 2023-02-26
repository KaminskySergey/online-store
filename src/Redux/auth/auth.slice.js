import { createSlice } from "@reduxjs/toolkit";
import { authInitState } from "./auth.init-state";
import { loginThunk, logoutThunk, refreshThunk, regThunk } from "./auth.thunk";

const authSlice = createSlice({
    name: "auth",
    initialState: authInitState,

    extraReducers: builder => {
        builder
            .addCase(regThunk.pending, state => state)
            .addCase(regThunk.fulfilled, (state, { payload }) => {
                state.user.name = payload.user.name;
                state.user.email = payload.user.email;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(regThunk.rejected, (state, { payload }) => {
                state.error = payload;
            })
        
            .addCase(loginThunk.pending, state => state)
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.user.name = payload.user.name;
                state.user.email = payload.user.email;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.rejected, (state, { payload }) => {
                state.error = payload;
            })
        
            .addCase(logoutThunk.pending, state => state)
            .addCase(logoutThunk.fulfilled, (state, { payload }) => {
                state.token = null;
                state.user.name = "";
                state.user.email = "";
                state.isLoggedIn = false;
            })
            .addCase(logoutThunk.rejected, (state, { payload }) => {
                state.error = payload;
            })
        
            .addCase(refreshThunk.pending, state =>
                {state.isRefreshing = true})
            .addCase(refreshThunk.fulfilled, (state, { payload }) => {
                state.user.name = payload.name;
                state.user.email = payload.email;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshThunk.rejected, (state, { payload }) => {
                state.error = payload
                state.isRefreshing = false
            })
    },
})

export const authReducer = authSlice.reducer;
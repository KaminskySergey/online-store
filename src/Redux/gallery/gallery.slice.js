import { createSlice } from "@reduxjs/toolkit";
import { galleryInitState } from "./gallery.init-state";
import { getProductsThunk } from "./gallery.thunk";

const gallerySlice = createSlice({
    name: "gallery",
    initialState: galleryInitState,

    extraReducers: builder => {
        builder
            .addCase(getProductsThunk.pending, state => state)
            .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
                console.log(state.items)
                state.items = payload;
                
            })
            .addCase(getProductsThunk.rejected, (state, { payload }) => state)
    },
})

export const galleryReducer = gallerySlice.reducer;
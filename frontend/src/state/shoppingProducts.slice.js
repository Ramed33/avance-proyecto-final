import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "./statusCode";
import axios from "axios";

const initialState = {
    data:[],
    status: StatusCode.IDLE
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        //fetchProducts(state,action){
        //    state.data = action.payload;
        //}
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = StatusCode.ERROR
        })
    }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

/* export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;
}) */

export const getProducts = createAsyncThunk(
    'products/fetchProducts', 
    async (products) => {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    }
);
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState, updateState } from "../../../../../constants/init_state";
import { productService } from "../../../../../services/admin_services/product_service";
import { utils } from "../../../../../ultil/ultil";


export const getAllProductAction = createAsyncThunk("/admin/product/list-product", async (data, thunkApi) => {
    const { page, size } = data;
    const response = await productService.getAllProduct(page, size);
    thunkApi.dispatch(getAllProduct(response))
    return response;
})

export const searchProductAction = createAsyncThunk("/admin/product/search-product", async (data, thunkApi) => {
    const response = await productService.searchProduct(data);

    thunkApi.dispatch(searchProduct(response));

    return response;
})


const listProductSlice = createSlice({
    initialState: { ...initialState },
    name: "admin/product/list-product",
    reducers: {
        getAllProduct(state, action) {
            updateState(state, action);
        },
        searchProduct(state, action) {
            console.log(state.isLoading)
            updateState(state, action);

        },
        clearState(state, action) {
            utils.resetState(state);
        }
    },
    extraReducers: {
        [getAllProductAction.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllProductAction.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [searchProductAction.pending]: (state, action) => {
            state.isLoading = true;
        },
        [searchProductAction.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [searchProductAction.rejected]: (state, action) => {
            state.isLoading = false;
        }

    }
})

export const { getAllProduct, clearState, searchProduct } = listProductSlice.actions;
const { reducer: listProduct } = listProductSlice;

export default listProduct;
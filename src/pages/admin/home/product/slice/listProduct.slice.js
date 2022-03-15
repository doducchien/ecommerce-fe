import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState, updateState } from "../../../../../constants/init_state";
import { productService } from "../../../../../services/product_service";
import { utils } from "../../../../../ultil/ultil";
import { addLoading, removeLoading } from "../../../../public/common_ui/slice/loading.slice";


export const getAllProductAction = createAsyncThunk("/admin/product/list-product", async (data, thunkApi) => {
    thunkApi.dispatch(addLoading());
    const { page, size, category_id } = data;
    let response;
    if (category_id) {
        response = await productService.getAllProduct(page, size, category_id);

    }
    else response = await productService.getAllProduct(page, size);

    thunkApi.dispatch(getAllProduct(response));

    let timeout = setTimeout(() => {
        thunkApi.dispatch(removeLoading());
        clearTimeout(timeout)
    }, 1000);
    return response;
})

export const searchProductAction = createAsyncThunk("/admin/product/search-product", async (data, thunkApi) => {
    thunkApi.dispatch(addLoading());

    const response = await productService.searchProduct(data);

    let timeout = setTimeout(() => {
        thunkApi.dispatch(removeLoading());
        clearTimeout(timeout)
    }, 1000)
    thunkApi.dispatch(searchProduct(response));

    return response;
})

export const getProductByCategoryAction = createAsyncThunk("/product/get-product-by-category", async (data, thunkApi) => {

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
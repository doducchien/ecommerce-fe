import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState, updateState } from "../../../../../constants/init_state";
import { productService } from "../../../../../services/product_service";

export const getProductDetailAction = createAsyncThunk('/admin/product/product-detail', async (data, thunkApi) => {
    const response = await productService.getProductDetail(data);
    console.log(response);
    thunkApi.dispatch(getProductDetail(response))
    return response;

})

const productDetailSlice = createSlice({
    name: 'admin/product/product-detail',
    initialState: { ...initialState },
    reducers: {
        getProductDetail(state, action) {
            updateState(state, action);
        }
    }

})

export const { getProductDetail } = productDetailSlice.actions;
const { reducer: detailProduct } = productDetailSlice;

export default detailProduct;



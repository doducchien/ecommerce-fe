import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState, updateState } from "../../../../../constants/init_state";
import { commentService } from "../../../../../services/admin_services/comment_service";
import { utils } from "../../../../../ultil/ultil";


export const getCommentOnProductAction = createAsyncThunk(
    'admin/comment/comment-on-product',
    async (data, thunkApi) => {
        const response = await commentService.getCommentOnProduct(data);
        thunkApi.dispatch(getCommentOnProduct(response))
        return response;
    }

)
export const getCommentOnProductByStarsAction = createAsyncThunk(
    'admin/comment/comment-on-product-stars',
    async (data, thunkApi) => {
        const { product_id, star } = data;
        const response = await commentService.getCommentOnProductByStars(product_id, star);
        thunkApi.dispatch(getCommentOnProduct(response))
        return response;
    }
)

const commentOnProductSlice = createSlice({
    name: 'admin/comment/comment-on-product',
    initialState: { ...initialState },
    reducers: {
        getCommentOnProduct(state, action) {
            updateState(state, action);
        },
        clearState(state, action) {
            utils.resetState(state)
        }

    },
    extraReducers: {
        [getCommentOnProductAction.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCommentOnProductAction.fulfilled]: (state, action) => {
            console.log("end")
            state.isLoading = false;
        },
        [getCommentOnProductByStarsAction.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCommentOnProductByStarsAction.fulfilled]: (state, action) => {
            console.log("end")
            state.isLoading = false;
        }
    }
})


const { reducer: commentOnProduct } = commentOnProductSlice;
const { getCommentOnProduct, clearState } = commentOnProductSlice.actions;

export default commentOnProduct;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../../../constants/init_state";
import { categoryService } from "../../../../../services/category_service";

// export const getDetailCategoryAction = createAsyncThunk("/admin/category/getDetail-category", async (data, thunkApi) => {

//     console.log(data)
//     const response = await categoryService.getDetailCategory(data);
//     thunkApi.dispatch(getDetailCategory(response));
//     return response
// })

export const updateCategoryAction = createAsyncThunk("/admin/category/update-category", async (data, thunkApi) => {
    const { categoryId, categoryName, selectedImage } = data;
    const response = await categoryService.updateCategory(categoryId, categoryName, selectedImage)
    thunkApi.dispatch(updateDetailCategory(response))
    return response;
})

const updateCategorySlice = createSlice({
    name: '/admin/category/update-category',
    initialState: { ...initialState },
    reducers: {
        updateDetailCategory(state, action) {
            const { statusRequest, message } = action.payload;
            if (statusRequest) state.isSuccess = true;
            else state.isSuccess = false;
            state.message = message;
            state.information = action.payload.data;
        },

    },
    extraReducers: {

        // [getDetailCategoryAction.pending]: (state, action) => {
        //     state.isLoading = true;
        // },
        [updateCategoryAction.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateCategoryAction.fulfilled]: (state, action) => {
            state.isLoading = false;
        }

    }

})

const { updateDetailCategory } = updateCategorySlice.actions;
const { reducer: update_detail_category } = updateCategorySlice;
export default update_detail_category;
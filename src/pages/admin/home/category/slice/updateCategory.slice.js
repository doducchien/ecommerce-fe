import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../../../constants/init_state";
import { categoryService } from "../../../../../services/admin_services/category_service";

export const getDetailCategoryAction = createAsyncThunk("/admin/category/update-category", async (data, thunkApi) => {

    console.log(data)
    const response = await categoryService.getDetailCategory(data);
    thunkApi.dispatch(getDetailCategory(response));
    return response
})

const updateCategorySlice = createSlice({
    name: '/admin/category/update-category',
    initialState: { ...initialState },
    reducers: {
        getDetailCategory(state, action) {
            const { statusRequest } = action.payload;
            if (statusRequest) state.isSuccess = true;
            else state.isSuccess = false;
            console.log(action.payload)
            state.information = action.payload;
        }
    },
    extraReducers: {

        [getDetailCategoryAction.pending]: (state, action) => {
            state.isLoading = true;
        }

    }

})

const { getDetailCategory } = updateCategorySlice.actions;
const { reducer: update_detail_category } = updateCategorySlice;
export default update_detail_category;
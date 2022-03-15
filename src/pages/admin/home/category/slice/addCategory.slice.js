import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryService } from "../../../../../services/category_service";
import { initialState } from "../../../../../constants/init_state";

export const addCategoryAction = createAsyncThunk("admin/category/add-category", async (data, thunkApi) => {
    const { categoryName, selectedImage } = data;

    const response = await categoryService.addCategory(categoryName, selectedImage);
    thunkApi.dispatch(addCategory(response))
    return response;
})

const addCategorySlice = createSlice({
    name: "admin/category/add-category",
    initialState: { ...initialState },
    reducers: {
        addCategory(state, action) {
            const { statusRequest, message } = action.payload;
            if (statusRequest) state.isSuccess = true;
            else state.isSuccess = false;
            state.message = message;
            state.information = action.payload.data;
        }
    },
    extraReducers: {
        [addCategoryAction.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addCategoryAction.fulfilled]: (state, action) => {
            state.isLoading = false;
        }
    }
})
const { addCategory } = addCategorySlice.actions;
const { reducer: addCategoryResult } = addCategorySlice;
export default addCategoryResult;
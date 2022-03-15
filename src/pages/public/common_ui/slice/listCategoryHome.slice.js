import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../../constants/init_state";
import { categoryService } from "../../../../services/category_service";

export const getAllCategoryActionPublic = createAsyncThunk("admin/category/list-category", async (data, thunkApi) => {
    const response = await categoryService.getAllCategory();
    thunkApi.dispatch(getAllCategoryHome(response))
    return response;
})



const listCategoryHomeSlice = createSlice({
    name: "admin/category/list-category",
    initialState: { ...initialState },
    reducers: {
        getAllCategoryHome(state, action) {
            const { statusRequest } = action.payload;
            if (statusRequest) state.isSuccess = true;
            else state.isSuccess = false;
            state.information = action.payload.data;
        },
       
    },
    extraReducers: {
        [getAllCategoryActionPublic.pending]: (state, action) => {
            state.isLoading = false;
        }
    }
})
const { getAllCategoryHome } = listCategoryHomeSlice.actions;
const { reducer: listCategoryHome } = listCategoryHomeSlice;
export default listCategoryHome;
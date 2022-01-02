import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../../../constants/init_state";
import { categoryService } from "../../../../../services/admin_services/category_service";


export const getAllCategoryAction = createAsyncThunk("admin/category/list-category", async (data, thunkApi) => {
    const response = await categoryService.getAllCategory();
    thunkApi.dispatch(getAllCategory(response))
    return response;
})

const listCategorySlice = createSlice({
    name: "admin/category/list-category",
    initialState: { ...initialState },
    reducers: {
        getAllCategory(state, action) {
            console.log(action.payload)
            const { statusRequest } = action.payload;
            if (statusRequest) state.isSuccess = true;
            else state.isSuccess = false;
            state.information = action.payload.data;
        }
    },
    extraReducers: {
        [getAllCategoryAction.pending]: (state, action) => {
            state.isLoading = false;
        }
    }
})
const { getAllCategory } = listCategorySlice.actions;
const { reducer: listCategory } = listCategorySlice;
export default listCategory;
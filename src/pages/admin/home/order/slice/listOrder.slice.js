import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState, updateState } from "../../../../../constants/init_state";
import { categoryService } from "../../../../../services/admin_services/category_service";
import { orderService } from "../../../../../services/admin_services/order_services";


export const getAllOrderAction = createAsyncThunk("admin/order/list-order", async(data, thunkApi)=>{
    const response = await orderService.getAllOrder();
    console.log(response)
    thunkApi.dispatch(getAllOrder(response));

    return response;
})

const listOrderSlice = createSlice({
    name: 'admin/order/list-order',
    initialState: {...initialState},
    reducers:{
        getAllOrder(state, action){
            updateState(state, action)
        }
    },
    extraReducers:{
        [getAllOrderAction.pending]: (state, action)=>{
            state.isLoading = false;
        }
    }
})

const {getAllOrder} = listOrderSlice.actions;

const {reducer: listOrder} = listOrderSlice;
export default listOrder;
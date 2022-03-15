import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState, updateState } from "../../../../../constants/init_state";
import { orderService } from "../../../../../services/order_services";

export const updateDetailOrderAction = createAsyncThunk("admin/order/update-detail-order", async(data, thunkApi)=>{
    const {method, id} = data;
    const response = await orderService.updateDetailOrder(method, id);
    thunkApi.dispatch(updateDetailOrder(response));
    return response;
})


const updateDetailOrderSlice = createSlice({
    name: 'admin/oroder/update-detail-order',
    initialState: {...initialState},
    reducers:{
        updateDetailOrder(state, action){
            updateState(state, action)
        }
    },
    extraReducers:{
        [updateDetailOrderAction.pending]:(state, action)=>{
            state.isLoading = true;
        },
        [updateDetailOrderAction.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.isSuccess = null;
        }
    }
})

const {updateDetailOrder} = updateDetailOrderSlice.actions;
const {reducer: updateDetailOrderReducer} = updateDetailOrderSlice;
export default updateDetailOrderReducer;
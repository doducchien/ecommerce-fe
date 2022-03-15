import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState, updateState } from "../../../../../constants/init_state";
import { orderService } from "../../../../../services/order_services";


export const getDetailOrderAction = createAsyncThunk("admin/order/detail-order", async(data, thunkApi)=>{
    const response = await orderService.getDetailOrder(data);
  
    thunkApi.dispatch(getDetailOrder(response));
    return response;
})

const detailOderSlice = createSlice({
    name: 'admin/order/detail-order',
    initialState: {...initialState},
    reducers:{
        getDetailOrder(state, action){
            updateState(state, action)
        }
    },
    extraReducers:{
        [getDetailOrderAction.pending]:(state, action)=>{
            state.isLoading = false;
        }
    }
}) 
const {getDetailOrder} = detailOderSlice.actions;
const {reducer: detailOrderReducer} = detailOderSlice;
export default detailOrderReducer;
const { createSlice } = require("@reduxjs/toolkit");
const { initialState } = require("../../../../constants/init_state");

const listLoading = {
    listPending: []
}

const loadingSlice = createSlice({
    name: 'public/loading',
    initialState:{...listLoading},
    reducers:{
        addLoading(state, action){
            state.listPending.push(1)
        },
        removeLoading(state, action){
            state.listPending.shift()
        }
    }
})

export const {addLoading, removeLoading } = loadingSlice.actions;
const { reducer: loading} = loadingSlice;

export default loading; 
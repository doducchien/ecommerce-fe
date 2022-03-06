const { createSlice } = require("@reduxjs/toolkit");

const initState = {
    mode: "ALL-"
}
const fetchProductModeSlice = createSlice({
    name: 'public/fetchProductMode',
    initialState: initState,
    reducers:{
        changeFetchProductMode(state, action){
            state.mode = action.payload;
        }
    }
})

export const {changeFetchProductMode} = fetchProductModeSlice.actions;
const { reducer: fetchProductMode} = fetchProductModeSlice;
export default fetchProductMode;
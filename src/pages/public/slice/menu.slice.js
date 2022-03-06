const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    id: 'ALL',
    name: 'ALL'
}
const menuSlice = createSlice({
    name: "/home/menu",
    initialState: {...initialState},
    reducers:{
        changeMenu(state, action){
            state.id = action.payload.id;
            state.name = action.payload.name;
        }
    }
})

export const {changeMenu} = menuSlice.actions;

const {reducer: menu} = menuSlice;

export default menu;
const { createSlice } = require("@reduxjs/toolkit");

const initKeywordSearch = {keyword: ''}
const searchKeywordSlice = createSlice({
    name: 'public/home/search',
    initialState: initKeywordSearch,
    reducers:{
        changeKeyword(state, action){
            state.keyword = action.payload;
        }
    }
})

const {reducer: searchKeyword} = searchKeywordSlice;

export const {changeKeyword} = searchKeywordSlice.actions;
export default searchKeyword;
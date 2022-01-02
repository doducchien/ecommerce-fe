import listCategory from "./listCategory.slice";

import { combineReducers } from "redux";
export const category = combineReducers({
    listCategory: listCategory
})




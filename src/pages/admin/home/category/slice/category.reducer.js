import listCategory from "./listCategory.slice";
import update_detail_category from "./updateCategory.slice";
import addCategoryResult from "./addCategory.slice";

import { combineReducers } from "redux";
export const category = combineReducers({
    listCategory: listCategory,
    addCategoryResult: addCategoryResult,
    update_detail_category: update_detail_category
})




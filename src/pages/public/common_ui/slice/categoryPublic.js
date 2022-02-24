import { combineReducers } from "redux";
import listCategoryHome from "./listCategoryHome.slice";

export const categoryPublic = combineReducers({
    listCategoryHome: listCategoryHome
})
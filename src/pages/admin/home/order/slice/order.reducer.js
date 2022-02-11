import { combineReducers } from "redux";
import detailOrderReducer from "./detailOrder.slice";
import listOrder from "./listOrder.slice";

export const order = combineReducers({
    listOrder: listOrder,
    detailOrder: detailOrderReducer
})
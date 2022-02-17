import { combineReducers } from "redux";
import detailOrderReducer from "./detailOrder.slice";
import listOrder from "./listOrder.slice";
import updateDetailOrderReducer from "./updateDetailOrder.slice";

export const order = combineReducers({
    listOrder: listOrder,
    detailOrder: detailOrderReducer,
    updateOrder: updateDetailOrderReducer
})
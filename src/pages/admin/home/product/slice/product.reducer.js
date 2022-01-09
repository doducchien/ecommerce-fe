import { combineReducers } from "redux";
import commentOnProduct from "../../comment/slice/commentOnProduct.slice";
import listProduct from "./listProduct.slice";
import detailProduct from "./productDetail.slice";

export const product = combineReducers({
    listProduct: listProduct,
    detailProduct: detailProduct,
    comment: commentOnProduct
})
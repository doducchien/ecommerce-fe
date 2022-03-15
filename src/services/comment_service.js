import { utils } from "../ultil/ultil";
import apiService from "./api_service"

const commentPath = 'api/v1/comments'
const getCommentOnProduct = async (id) => {
    const result = await apiService().getMethod(commentPath, { product_id: id })
    return result;
}

const getCommentOnProductByStars = async (id, star) => {
    const result = await apiService().getMethod(commentPath, { product_id: id, star: star })
    return result;
}

const addComment = async (data)=>{
    const formData = utils.objectToUrlEncoded(data);
    const result = await apiService().postMethod(commentPath, formData);
    return result;
}


export const commentService = { getCommentOnProduct, getCommentOnProductByStars, addComment }
import apiService from "../api_service"
const productPath = "api/v1/products"

const getAllProduct = async (page, size) => {
    const result = await apiService().getMethod(productPath, { page, size });
    return result;
}

const getProductDetail = async (id) => {
    const result = await apiService().getMethod(`${productPath}/${id}`, {});
    return result;
}

const searchProduct = async(name) => {
    const result = await apiService().getMethod(`${productPath}/search`, { name });
    return result;
}


export const productService = {
    getAllProduct,
    getProductDetail,
    searchProduct
}
import apiService from "../api_service"

const getAllCategory = async () => {
    const result = await apiService().getMethod("api/v1/categories", {});
    return result;
}
const getDetailCategory = async (categoryId) => {
    const result = await apiService().getMethod("api/v1/categories", { id: categoryId })
    return result;
}

const addCategory = async (name, image) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name)
    const result = await apiService(true).postMethod("api/v1/categories", formData)
    return result;
}
export const categoryService = { getAllCategory, getDetailCategory, addCategory };
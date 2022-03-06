import apiService from "../api_service";
const categoryPath = "api/v1/categories";
const getAllCategory = async () => {
    const result = await apiService().getMethod(categoryPath, {});
    return result;
}
const getDetailCategory = async (categoryId) => {
    const result = await apiService().getMethod(categoryPath, { id: categoryId })
    return result;
}

const addCategory = async (name, image) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name)
    const result = await apiService(true).postMethod(categoryPath, formData)
    return result;
}
const updateCategory = async (categoryId, categoryName, selectedImage) => {
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("name", categoryName);
    const result = await apiService(true).putMethod(`${categoryPath}/${categoryId}`, formData)
    return result;
}



export const categoryService = {
    getAllCategory,
    getDetailCategory,
    addCategory,
    updateCategory
};
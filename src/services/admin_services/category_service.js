import apiService from "../api_service"

const getAllCategory = async () => {
    const result = await apiService().getMethod("api/v1/categories", {});
    return result;
}

export const categoryService = { getAllCategory };
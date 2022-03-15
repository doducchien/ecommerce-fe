import apiService from "./api_service";

const login = async (data) => {

    const result = await apiService().postMethod("/api/v1/auth/login", data)
    return result;
}


export const authenServcie = { login };

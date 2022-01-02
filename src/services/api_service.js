import axiosConfig from "./axios_config";


export default function apiService() {
    const getMethod = (path, param) => {
        const paramString = new URLSearchParams(param);
        const url = `${path}?${paramString}`;
        try {
            const serverResponse = axiosConfig().get(url);
            return serverResponse;
        }
        catch (e) {
            console.log(e);
        }
    }

    const postMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig().post(path, body);
            return serverResponse;
        }
        catch (e) {
            console.log(e)
        }
    }

    const putMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig().put(path, body);
            return serverResponse;
        }
        catch (e) {

        }
    }

    const deleteMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig().delete(path, body);
            return serverResponse;
        }
        catch (e) {

        }
    }

    return { getMethod, postMethod, putMethod, deleteMethod }
}
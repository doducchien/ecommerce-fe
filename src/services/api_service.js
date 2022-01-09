import axiosConfig from "./axios_config";



export default function apiService(requireToken = false) {
    const getMethod = (path, param) => {
        const paramString = new URLSearchParams(param);
        const url = `${path}?${paramString}`;
        try {
            const serverResponse = axiosConfig(requireToken).get(url);
            return serverResponse;
        }
        catch (e) {
            console.log(e);
        }
    }

    const postMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig(requireToken).post(path, body);
            return serverResponse;
        }
        catch (e) {
            console.log(e)
        }
    }

    const putMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig(requireToken).put(path, body);
            return serverResponse;
        }
        catch (e) {

        }
    }

    const deleteMethod = (path, body) => {
        try {
            const serverResponse = axiosConfig(requireToken).delete(path, body);
            return serverResponse;
        }
        catch (e) {

        }
    }

    return { getMethod, postMethod, putMethod, deleteMethod }
}
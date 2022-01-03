import axios from "axios";
import { commonResponse } from "../constants/common_response";
import { localSpace } from "./local/local_space";
import { keyLocal } from "../constants/key_local";

export default function axiosConfig(requireToken) {
    const getToken = () => {
        const authen = localSpace.getData(keyLocal.AUTHEN);
        const token = "Bearer " + (authen?.information?.data?.accessToken || "");
        return token;
    }
    const init = axios.create({
        baseURL: "http://localhost:9000",
        timeout: 1000,

    })

    if (requireToken) {
        init.defaults.headers.common.Authorization = getToken();
    }

    init.interceptors.request.use(function (config) {
        return config;

    }, function (error) {

        return Promise.reject(error);
    })

    init.interceptors.response.use(function (response) {
        console.log(response.data)
        return commonResponse(response.data);

    }, function (error) {

        const { request, response } = error;
        const customizeErrorResponse = {
            data: null,
            message: "",
            status: 408
        }

        //  error with response from server
        if (response) {
            const { data } = response;
            const { status, message } = data;

            return commonResponse({ ...customizeErrorResponse, message, statusCode: status });
        }
        // error with no response from server
        else if (request) {
            return commonResponse({ ...customizeErrorResponse, message: "Service Unavailabl", statusCode: 503 });
        }
        // NAN error
        else {
            return commonResponse({ ...customizeErrorResponse, message: "Connection failed" });
        }
    })


    return init;


}

import axios from "axios";
import { commonResponse } from "../constants/common_response";
import { localSpace } from "./local/local_space";
import { keyLocal } from "../constants/key_local";
import { listRoute } from "../constants/list_route";

const customizeErrorResponse = {
    data: null,
    message: "",
    status: 408
}
export default function axiosConfig(requireToken) {
    const getToken = () => {
        const authen = localSpace.getData(keyLocal.AUTHEN);
        const token = "Bearer " + (authen?.information?.data?.accessToken || "");
        return token;
    }
    const init = axios.create({
        baseURL: listRoute.HOST,
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
        const { data, status, statusText } = response;
        console.log(response)
        if (data)
            return commonResponse(response.data);
        return commonResponse({ ...customizeErrorResponse, data: null, statusCode: status, message: statusText })

    }, function (error) {
        console.log(error)
        const { request, response } = error;


        //  error with response from server
        if (response) {

            const { data } = response;
            const { status, message } = data;
            console.log(status)
            console.log(message)
            console.log("hahaah0")

            return commonResponse({ ...customizeErrorResponse, message, statusCode: status });
        }
        // error with no response from server
        else if (request) {
            console.log("hahaah")
            return commonResponse({ ...customizeErrorResponse, message: "Service Unavailabl", statusCode: 503 });
        }
        // NAN error
        else {
            console.log("hahaah1")
            return commonResponse({ ...customizeErrorResponse, message: "Connection failed" });
        }
    })


    return init;


}

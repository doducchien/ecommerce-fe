import axios from "axios";
import { commonResponse } from "../constants/common_response";

export default function axiosConfig() {
    const init = axios.create({
        baseURL: "http://localhost:9000",
        timeout: 1000,

    })

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

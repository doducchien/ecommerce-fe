import apiService from "./api_service"

const orderPath = "api/v1/orders"

const getAllOrder = async()=>{
    const result = await apiService().getMethod(orderPath, {});
    return result;
}

const getDetailOrder = async(id)=>{
    const result = await apiService().getMethod(orderPath, {id})
    return result;
}

const updateDetailOrder = async(method, id)=>{
    const finalPath = `${orderPath}/${method}/${id}`;
    const result = await apiService(true).putMethod(finalPath, {})
    return result;
}


export const orderService = {
    getAllOrder,
    getDetailOrder,
    updateDetailOrder
}
import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateDetailOrderAction } from "../slice/updateDetailOrder.slice";

export const useUpdateDetailOrder = ()=>{
    const dispatch = useDispatch();
    const updateDetailOrder = useSelector(state => state.order.updateOrder)
    console.log(updateDetailOrder);
    const updateStatus = (method, id)=>{
        const data = {method, id}
        dispatch(updateDetailOrderAction(data))
    }

    useEffect(()=>{
        if(updateDetailOrder.isSuccess != null && updateDetailOrder.isSuccess == false){
            message.error(updateDetailOrder.message)
        }
    }, [updateDetailOrder.isSuccess])
    return {
        updateDetailOrder,
        updateStatus
    }

}
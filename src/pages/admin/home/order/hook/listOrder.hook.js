import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllOrderAction } from "../slice/listOrder.slice";

const useListOrder = ()=>{
    const dispatch = useDispatch()
    const listOrder = useSelector(state => state?.order?.listOrder?.information) || [];
    useEffect(()=>{
        dispatch(getAllOrderAction())
    }, [])
    return{
        listOrder
    }
    

}

export default useListOrder;
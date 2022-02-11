import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailOrderAction } from "../slice/detailOrder.slice";

const useDetailOder = ()=>{
    const dispatch = useDispatch()
    const detailOrder = useSelector(state=> state.order.detailOrder.information)
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getDetailOrderAction(id));
    }, [])

    return {detailOrder}

}

export default useDetailOder;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailAction } from "../slice/productDetail.slice";
import { utils } from "../../../../../ultil/ultil";
import { ProductResponse } from "../../../../../response/ProductResponse";

const useProductDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { information, isLoading, isSuccess, message: messageR } = useSelector(state => state.product.detailProduct)
    const [data, setData] = useState({})
    const [rateAvg, setRateAvg] = useState(null);
    console.log(id)
    useEffect(() => {
        if (id) {
            dispatch(getProductDetailAction(id))
        }
    }, [id])

    useEffect(() => {
        utils.showMessage(isLoading, isSuccess, messageR, information)
    }, [isLoading])

    useEffect(() => {
        if (information) {
            setData(new ProductResponse(information));
        }
    }, [information])
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            const { one, two, three, four, five } = data?.star;
            setRateAvg((one + two + three + four + five) / 5);
        }
    }, [data])

    return { rateAvg, data, isLoading, id }
}
export default useProductDetail
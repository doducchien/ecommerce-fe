import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearState, getAllProductAction, searchProduct, searchProductAction } from "../slice/listProduct.slice";
import { utils } from "../../../../../ultil/ultil";
import { ProductResponse } from "../../../../../response/ProductResponse";

const size = 5;
const useListProduct = () => {

    const { information, isLoading, isSuccess, message: messageR } = useSelector(state => state.product.listProduct)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProductAction({ page, size }))
    }, [page])

    useEffect(() => {
        console.log("isloaing")
        utils.showMessage(isLoading, isSuccess, messageR, information)
    }, [isLoading])

    useEffect(() => {
        let data_ = [];
        (information?.data || []).map(item => {
            data_.push(new ProductResponse(item))
        })
        setData(data_)
    }, [information])
    useEffect(() => {
        return () => {
            dispatch(clearState());
        }
    }, [])

    const onChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }
    const onSearch = () => {
        dispatch(searchProductAction(keyword))
    }
    const onClear = () => {
        setKeyword("");
        dispatch(getAllProductAction({ page, size }))

    }

    return { isLoading, data, keyword, onChangeKeyword, onSearch, onClear }
}

export default useListProduct;
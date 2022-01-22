import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentOnProductAction, getCommentOnProductByStarsAction } from "../slice/commentOnProduct.slice";
import { CommentResponse } from "../../../../../response/CommentResponse";
import { clearState } from "../../product/slice/listProduct.slice";

const useCommentProduct = ({ productId }) => {
    const { information, isLoading, isSuccess, message: messageR } = useSelector(state => state.product.comment)
    const [listComment, setListComment] = useState([])
    const [rateActive, setRateActive] = useState(-1);
    console.log("wgrgerg")

    const dispatch = useDispatch();



    useEffect(() => {
        if (information) {
            const listData = [];
            (information?.data || []).map(item => {
                listData.push(new CommentResponse(item))
            })
            setListComment(listData)
        }
        else setListComment([])
    }, [information])

    useEffect(() => {
        return () => {
            dispatch(clearState())
        }
    }, [])
    const onChangeRate = (rate) => {
        setRateActive(rate)
    }

    useEffect(() => {

        if (rateActive !== -1 && productId) {
            const data = {
                product_id: productId,
                star: rateActive
            }
            console.log("rateActive")
            dispatch(getCommentOnProductByStarsAction(data));
        }
        else if (productId) {
            dispatch(getCommentOnProductAction(productId))
        }
    }, [rateActive, productId])

    return { listComment, rateActive, onChangeRate }




}

export default useCommentProduct;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryAction } from "../slice/listCategory.slice";
import { addCategoryAction } from "../slice/addCategory.slice";
import { CategoryResponse } from "../../../../../response/CategoryResponse";
import { useHistory } from "react-router-dom";
import { listRoute } from "../../../../../constants/list_route";
import { message } from "antd";
const useListCategory = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listCategory = useSelector(state => state?.category?.listCategory?.information);
    const addCategoryResult = useSelector(state => state?.category?.addCategoryResult);
    const update_detail_category = useSelector(state => state?.category?.update_detail_category);

    const [information, setInformation] = useState([]);


    useEffect(() => {
        dispatch(getAllCategoryAction());
    }, [addCategoryResult, update_detail_category])

    useEffect(() => {
        if (listCategory) {
            const info = new CategoryResponse(listCategory);
            setInformation(info);
        }
    }, [listCategory])

    useEffect(() => {
        if (addCategoryResult?.message && addCategoryResult?.information) {
            const { isLoading, isSuccess, message: messageR } = addCategoryResult;
            if (!isLoading) {
                if (isSuccess) message.success(messageR)
                else message.error(messageR)
            }

        }
    }, [addCategoryResult])

    useEffect(() => {
        console.log(update_detail_category)
        if (update_detail_category?.message && update_detail_category?.information) {
            const { isLoading, isSuccess, message: messageR } = update_detail_category;
            if (!isLoading) {
                if (isSuccess) message.success(messageR)
                else message.error(messageR)
            }

        }
    }, [update_detail_category])




    const onClickDetail = (id) => {
        console.log(id)
    }






    return {
        information,
        addCategoryResult,
        onClickDetail,
    }
}

export default useListCategory;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLayout from "../../../../../common_hook/layout_hook";
import { getAllCategoryAction } from "../slice/listCategory.slice";
import { addCategoryAction } from "../slice/addCategory.slice";
import { CategoryResponse } from "../../../../../response/CategoryResponse";
import { useHistory } from "react-router-dom";
import { listRoute } from "../../../../../constants/list_route";
import { message } from "antd";
const useListCategory = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const listCategory = useSelector(state => state?.category?.listCategory?.information);
    const addCategoryResult = useSelector(state => state?.category?.addCategoryResult);

    const [information, setInformation] = useState([]);

    useLayout({ code: 'list-category', label: 'List category' })

    useEffect(() => {
        dispatch(getAllCategoryAction());
    }, [])

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



    const onShowModal = () => {
        setShowModal(true);
    }
    const onCloseModal = () => {
        setShowModal(false);
    }
    const onClickDetail = (id) => {
        console.log(id)
    }

    const onClickUpdate = (id) => {

        history.push(`${listRoute.CATEGORY_ADMIN_UPDATE.split(":")[0]}${id}`);
    }

    const onAddCategory = (data) => {
        const { categoryName, selectedImage } = data;
        onCloseModal();
        dispatch(addCategoryAction({ categoryName, selectedImage }))
    }



    return {
        information,
        addCategoryResult,
        onClickDetail,
        onClickUpdate,
        onAddCategory,
        showModal,
        onShowModal,
        onCloseModal,
    }
}

export default useListCategory;
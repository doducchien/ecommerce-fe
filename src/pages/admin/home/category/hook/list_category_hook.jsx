import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLayout from "../../../../../common_hook/layout_hook";
import { getAllCategoryAction } from "../slice/listCategory.slice";
import { CategoryResponse } from "../../../../../response/CategoryResponse";
const useListCategory = () => {
    const dispatch = useDispatch();
    const listCategory = useSelector(state => state?.category?.listCategory?.information);
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

    const onClickDetail = (id) => {
        console.log(id)
    }



    return { information, onClickDetail }
}

export default useListCategory;
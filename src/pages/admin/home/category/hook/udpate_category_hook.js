import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetailCategoryAction } from "../slice/updateCategory.slice";
import useLayout from "../../../../../common_hook/layout_hook";

const useUpdateCategory = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams()
    useLayout({ code: 'update-category', label: 'Update category' })

    const information = useSelector(state => state?.category?.update_detail_category?.information)
    const [categoryDetail, setCategoryDetail] = useState({});

    useEffect(() => {
        console.log(categoryId)
        if (categoryId) {
            dispatch(getDetailCategoryAction(categoryId))
        }
    }, [categoryId])

    useEffect(() => {
        if (information) {
            console.log(information.data.data)
            setCategoryDetail(information.data.data[0])
        }
    }, [information])


    return {
        categoryDetail
    }

}
export default useUpdateCategory;
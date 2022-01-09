import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateCategoryAction } from "../slice/updateCategory.slice";
import useLayout from "../../../../../common_hook/layout_hook";

const useUpdateCategory = (props) => {
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const [categoryName, setCategoryName] = useState("");
    const [currentCategoryId, setCurrentCategoryId] = useState(null);
    const [selectedImage, setSelectedImage] = useState([]);



    const onShowModal = (id) => {
        setShowModal(true)
        setCurrentCategoryId(id);
    }

    const onCloseModal = () => {
        setShowModal(false);
        clearData()
    }

    const onChangeInput = useCallback((e) => {
        const { value } = e.target;
        setCategoryName(value);

    }, [])
    const clearData = () => {
        setCategoryName("");
        setSelectedImage([]);
        setCurrentCategoryId(null)
    }

    const onUpdateCategory = (data) => {
        console.log(currentCategoryId)
        const newData = { ...data, categoryId: currentCategoryId }
        dispatch(updateCategoryAction(newData))
        onCloseModal();

    }
    const beforeUpload = useCallback((file) => {

        console.log(URL.createObjectURL(file))
        setSelectedImage([...selectedImage, file])
        return false;
    }, [])



    useEffect(() => {
        return () => {
            clearData();
        }
    }, [])

    return {
        categoryName,
        showModal,
        selectedImage,
        currentCategoryId,
        onShowModal,
        onCloseModal,
        onChangeInput,
        clearData,
        onUpdateCategory,
        beforeUpload
    }

}
export default useUpdateCategory;
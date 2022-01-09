import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCategoryAction } from "../slice/addCategory.slice";

const useAddCategory = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);

    const [selectedImage, setSelectedImage] = useState([])
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        return () => {
            setSelectedImage([]);
        }
    }, [])

    const onShowModal = () => {
        setShowModal(true);
    }
    const onCloseModal = () => {
        setShowModal(false);
    }

    const clearData = () => {
        setSelectedImage([]);
        setCategoryName("");
    }


    const onChangeInput = useCallback((e) => {
        const value = e.target.value;
        setCategoryName(value)
    }, []);

    const beforeUpload = (file) => {

        console.log(URL.createObjectURL(file))
        setSelectedImage([...selectedImage, file])
        return false;
    }



    const onAddCategory = (data) => {
        const { categoryName, selectedImage } = data;
        onCloseModal();
        dispatch(addCategoryAction({ categoryName, selectedImage }))
    }

    return {
        selectedImage,
        categoryName,
        showModal,
        onShowModal,
        onCloseModal,
        setCategoryName,
        clearData,
        beforeUpload,
        onChangeInput,
        onAddCategory
    }
}

export default useAddCategory;
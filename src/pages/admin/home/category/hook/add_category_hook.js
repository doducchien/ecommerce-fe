import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddCategory from "../AddCategory";

const useAddCategory = () => {
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState([])
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        return () => {
            setSelectedImage([]);
        }
    }, [])

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

    const onSubmit = (cate) => {
        dispatch(AddCategory())
    }

    return {
        selectedImage,
        categoryName,
        setCategoryName,
        clearData,
        beforeUpload,
        onChangeInput,
        onSubmit
    }
}

export default useAddCategory;
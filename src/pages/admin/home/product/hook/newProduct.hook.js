import { message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryService } from "../../../../../services/category_service";
import { productService } from "../../../../../services/product_service";
import { utils } from "../../../../../ultil/ultil";
import { getAllCategoryAction } from "../../category/slice/listCategory.slice";
const initState = {
    name: '',
    category_id: '',
    images: [],
    describe: '',
    specifications: {
        display: '',
        cpu: '',
        RAM: '',
        memory: ''
    },
    options: [
        {
            option_names: {
                color: "",
                disk: ""
            },
       
            price: "",
            quantity: "",
        }
        
    ]
}
export const useNewProduct = () => {
    const dispatch = useDispatch();
     
    const [fileList, setFileList] = useState([

    ]);

    const listCategory = useSelector(state => state?.category?.listCategory?.information);
    const listCategoryUse = listCategory?.data || [];



    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    const beforeUpload = async file => {
        console.log(URL.createObjectURL(file))
        setFileList([...fileList, file])
        return false;
    }
    const propsUpload = {
        listType: "picture-card",
        accept:'.png',
        fileList: fileList,
        onPreview: onPreview,
        beforeUpload: beforeUpload
    }
    const onFinish = async (values) => {
        const data = JSON.parse(JSON.stringify(values));
        console.log(data.options.option_names);
        const optionsResult = data.options.map(item=>{
            return {
                ...item,
                option_names: item.option_names[0]
            }
        })
        data.options = optionsResult;
        data.images = {...fileList}
        console.log(values)


        var formData = new FormData();
        formData.append("name", data.name);
        formData.append("describle", data.describle);
        formData.append("specifications", JSON.stringify(data.specifications));
        formData.append("category_id", data.category_id);
        formData.append("options", JSON.stringify(data.options));

        fileList.map(item=>{
            formData.append("images", item)
        })


        const result = await productService.addNewProduct(formData);
        const {statusRequest, message: messageR} = result;
        if(statusRequest) message.success(messageR)
        else message.error(messageR)
        console.log(result);
    }

    useEffect(()=>{
        dispatch(getAllCategoryAction());
    }, [])
    return { ...initState, onFinish, propsUpload, fileList, listCategoryUse }
}

// const objectToFormData = (obj) => {
//     var formDta = new FormData();

//     for (var key in obj) {
//         formDta.append(key, obj[key]);
//     }

//     return formDta;
// }
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { commentService } from "../../../services/comment_service";
import { productService } from "../../../services/product_service";

export const useProductDetail = ()=>{
    const [data, setData] = useState({});
    const [meanRate, setMeanRate] = useState(0);
    const [activeOption, setActiveOption] = useState(0);
    const [comments, setComments] = useState([]);
    const params = useParams();
    const initDateCmt = {
        name: '',
        email: '',
        content: '',
        product_id: params?.id || -1,
        star: 5,
        type: 1
    }

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    useEffect(()=>{
        const getDetailProduct = async(id)=>{
            const result = await productService.getProductDetail(id);
            setData({
                ...data,
                ...result.data
            })
        }
        if(params?.id){
            getDetailProduct(params.id);
        }
    }, [params])

    useEffect(()=>{
        if(data?.star){
            let sum = 0;
            let span = 0.01;
            for(var key in data.star){
                if(data.star.hasOwnProperty(key)){
                    sum += parseInt(key) * data.star[key]
                    span += data.star[key];
                }
            }
            setMeanRate(sum/span);
        }
    }, [data])

    useEffect(()=>{

        if(params?.id){
            getComments(params.id);
        }
    }, [params])

    const onSelectOption = (index)=>{
        setActiveOption(index);
    }
    const onFinish = (values)=>{
        console.log(values);
        const data = {
            ...initDateCmt,
            ...values
        }

        createComment(data);


        
    }

    const getComments = async(id)=>{
        const result = await commentService.getCommentOnProduct(id);
        setComments(result?.data?.data || []);
    }

    const createComment = async(data)=>{
        console.log("heheeh")
        const result = await commentService.addComment(data);
        getComments(params.id)
    }

    return {
        params, data, meanRate, onSelectOption,
        activeOption, comments, onFinish, initDateCmt,
        visible, showDrawer, onClose
    }
}
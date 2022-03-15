import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { productService } from "../../../services/product_service"
import apiService from "../../../services/api_service"
import { getAllProductAction, searchProductAction } from "../../admin/home/product/slice/listProduct.slice"
import { initResultFetch } from "../const/initResultFetch"

export const useAllProduct = () => {
    const dispatch = useDispatch();
    const productFetch = useSelector(state => state?.product?.listProduct?.information)
    const keywordSearch = useSelector(state => state?.searchKeyword?.keyword)
    const fetchProductMode = useSelector(state => state?.fetchProductMode?.mode)
    const [labelFetch, setLabelFetch] = useState("");
    const menu = useSelector(state => state.menu);
    
    const [page, setPage] = useState(1);

    useEffect(()=>{
        const [mode, content] = fetchProductMode.split("-");
        if(mode == "ALL"){
            setLabelFetch("Most products in our system:")
        }
        else if(mode == 'SEARCH'){
            setLabelFetch(`Result of ${content}: `)
        }
        else setLabelFetch(`Products in ${content} category:`)

    }, [fetchProductMode])
    
    useEffect(() => {
        
        if (keywordSearch) {
            dispatch(searchProductAction(keywordSearch))
        }
        else {
            dispatch(getAllProductAction({ page, size: 10 }))

        }
    }, [page, keywordSearch])

    useEffect(()=>{
        console.log(menu)
        if(menu.id == "ALL"){
            dispatch(getAllProductAction({ page, size: 10 }))

        }
        else{
            dispatch(getAllProductAction({page: 1, size: 100, category_id: menu.id}))
        }
    }, [menu])

    const onChangePage = (selectPage) => [
        setPage(selectPage)
    ]


    return { productFetch, onChangePage, page, labelFetch }

}
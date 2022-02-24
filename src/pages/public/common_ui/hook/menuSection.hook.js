import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCategoryActionPublic } from "../slice/listCategoryHome.slice";

export const useMenuSection = ()=>{
    const dispatch = useDispatch();

    const listCategory = useSelector(state => state.categoryPublic.listCategoryHome.information)
    
    useEffect(()=>{
        dispatch(getAllCategoryActionPublic());
    }, [])

    return {listCategory}
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeLayout } from "../redux/layout_slice";

function useLayout({ code, label }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeLayout({ code, label }))
    }, [])
}

export default useLayout;
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { changeLayout } from "../../../redux/layout_slice";
const useHome = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const layoutPage = useSelector(state => state.layoutPage)

    const selectedMenuItem = (key, code, label) => {
        history.push(`/admin/${key}/${code}`)
    }

    return { layoutPage, selectedMenuItem }
}

export default useHome;
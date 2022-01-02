import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keyLocal } from "../constants/key_local"
import { loginByLocal } from "../pages/admin/authentication/auth.slice";
import { localSpace } from "../services/local/local_space"

const useInit = () => {
    const authen = useSelector(state => state.authen);
    return { authen }
}

export default useInit;
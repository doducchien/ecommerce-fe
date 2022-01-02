import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./auth.slice";
import { useHistory } from 'react-router-dom'
import { localSpace } from "../../../services/local/local_space";
import { keyLocal } from "../../../constants/key_local";

const useAuth = () => {
    const history = useHistory();
    const authen = useSelector(state => state.authen);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        const { username, password } = values;
        const data = {
            userName: username,
            password
        }

        dispatch(loginAction(data))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        const { isSuccess, information } = authen;
        if (isSuccess !== null) {
            if (!isSuccess) message.error(information.message);

        }
    }, [authen.isSuccess])

    return { onFinish, onFinishFailed, authen }
}

export default useAuth;
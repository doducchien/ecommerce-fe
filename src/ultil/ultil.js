import { message } from "antd";
import { initialState } from "../constants/init_state";
const checkExistPhoto = async (src) => {
    const tester = new Image()
    let exist = false;

    tester.onload = () => exist = true;
    tester.onerror = () => exist = false;
    tester.src = src;
    return exist;
}

const showMessage = (isLoading, isSuccess, messageR, information) => {
    if (messageR) {
        if (!isLoading) {
            if (isSuccess) message.success(messageR);
            else message.error(messageR);
        }

    }
}

const resetState = (state) => {
    const { isLoading, isSuccess, information, message: messageR } = initialState;
    state.isLoading = isLoading;
    state.isSuccess = isSuccess;
    state.information = information;
    state.message = messageR;
}

const currencyFormat = (num) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND'
    })

    return formatter.format(num)
}

const convertDateTo_ddMMyyyy = (dateString) => {
    const d = new Date(dateString);

    let date = d.getDate();
    date = date >= 10 ? date : `0${date}`;

    let month = d.getMonth() + 1;
    month = month >= 10 ? month : `0${month}`;
    let year = d.getFullYear();
    return `${date}/${month}/${year}`
}

export const utils = {
    checkExistPhoto,
    showMessage,
    resetState,
    currencyFormat,
    convertDateTo_ddMMyyyy
}
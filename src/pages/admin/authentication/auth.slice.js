import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authenServcie } from "../../../services/admin_services/authen_services";
import { keyLocal } from "../../../constants/key_local";
import { localSpace } from "../../../services/local/local_space";
import { initialState } from "../../../constants/init_state";

export const loginAction = createAsyncThunk("admin/authen/login", async (data, thunkApi) => {
    thunkApi.dispatch(beforeLogin())
    const response = await authenServcie.login(data);
    console.log(response)
    thunkApi.dispatch(login(response));
    return response;


})
const authenSlice = createSlice({
    name: 'authen',
    initialState: localSpace.getData(keyLocal.AUTHEN) || { ...initialState },
    reducers: {
        beforeLogin(state, action) {
            state.isLoading = false;
            state.isSuccess = null;
            state.information = null;
        },
        login(state, action) {
            state.isLoading = false;
            const { statusRequest } = action.payload;
            if (statusRequest) {

                state.isSuccess = true;
            }
            else {
                state.isSuccess = false;
            }
            state.information = action.payload;
            localSpace.setData(keyLocal.AUTHEN, state);

        },
        loginByLocal(state, action) {
            state.isLoading = false;
            const { payload } = action;
            const { isLoading, isSuccess, information } = payload;
            console.log(payload);
            state.isLoading = isLoading;
            state.isSuccess = isSuccess;
            state.information = information;

        }

    },
    extraReducers: {
        [loginAction.pending]: (state, action) => {
            state.isLoading = true;
        },
    }
})



const { reducer: authen } = authenSlice;
export const { login, beforeLogin, loginByLocal } = authenSlice.actions;
export default authen;

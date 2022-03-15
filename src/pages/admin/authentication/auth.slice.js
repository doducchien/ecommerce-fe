import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authenServcie } from "../../../services/authen_services";
import { keyLocal } from "../../../constants/key_local";
import { localSpace } from "../../../services/local/local_space";
import { initialState } from "../../../constants/init_state";

export const loginAction = createAsyncThunk("admin/authen/login", async (data, thunkApi) => {
    thunkApi.dispatch(resetAuthenInformation())
    const response = await authenServcie.login(data);
    console.log(response)
    thunkApi.dispatch(login(response));
    thunkApi.dispatch(saveUsername({username: data.userName}))
    return response;


})
const authenSlice = createSlice({
    name: 'authen',
    initialState: localSpace.getData(keyLocal.AUTHEN) || { ...initialState },
    reducers: {
        resetAuthenInformation(state, action) {
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

        },
        saveUsername(state, action){
            state.information.data.username = action.payload.username;
            localSpace.setData(keyLocal.AUTHEN, state);

        }

    },
    extraReducers: {
        [loginAction.pending]: (state, action) => {
            state.isLoading = true;
        },
    }
})



const { reducer: authen } = authenSlice;
export const { login, resetAuthenInformation, loginByLocal, saveUsername } = authenSlice.actions;
export default authen;

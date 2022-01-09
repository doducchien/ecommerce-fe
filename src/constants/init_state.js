
export const initialState = {
    isLoading: false,
    isSuccess: null,
    message: null,
    information: null
}

export const updateState = (state, action) => {
    const { statusRequest, message } = action.payload;
    if (statusRequest) state.isSuccess = true;
    else state.isSuccess = false;
    state.message = message;
    state.information = action.payload.data;
}


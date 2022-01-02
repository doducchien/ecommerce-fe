import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        code: "dashboard",
        label: "Dashboard"
    },
    reducers: {
        changeLayout(state, action) {
            const { code, label } = action.payload;
            state.code = code;
            state.label = label;
        }
    }
});

const { reducer: layoutPage } = layoutSlice;

export const { changeLayout } = layoutSlice.actions;

export default layoutPage;

import { configureStore } from '@reduxjs/toolkit'
import authen from '../pages/admin/authentication/auth.slice'
import layoutPage from './layout_slice'
import { category } from '../pages/admin/home/category/slice/category.slice'

export const store = configureStore({
    reducer: {
        authen,
        layoutPage,
        category
    }
})
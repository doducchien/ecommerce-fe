import { configureStore } from '@reduxjs/toolkit'
import authen from '../pages/admin/authentication/auth.slice'
import layoutPage from './layout_slice'
import { category } from '../pages/admin/home/category/slice/category.reducer'
import { product } from '../pages/admin/home/product/slice/product.reducer'
import { order } from '../pages/admin/home/order/slice/order.reducer'
import { categoryPublic } from '../pages/public/common_ui/slice/categoryPublic'

export const store = configureStore({
    reducer: {
        authen,
        layoutPage,
        category,
        product,
        order,
        categoryPublic
    }
})
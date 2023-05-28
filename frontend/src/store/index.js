import { configureStore } from '@reduxjs/toolkit'
import request from './slices/request.slice'

export default configureStore({
    reducer: {
        request
    }
})
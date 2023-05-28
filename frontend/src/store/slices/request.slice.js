import { createSlice } from '@reduxjs/toolkit'

export const request = createSlice({
    name: 'request',
    initialState: '',
    reducers: {
        setRequest: (state, action) => action.payload
    }
})

export const { setRequest } = request.actions

export default request.reducer
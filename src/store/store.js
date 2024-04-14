import {configureStore} from '@reduxjs/toolkit'
import generalReducers from './generalSlice.js'
export const store = configureStore({
    reducer: generalReducers
})
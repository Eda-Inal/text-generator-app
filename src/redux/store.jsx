import { configureStore } from '@reduxjs/toolkit';
import paraReducer from './paraSlice'

export const store = configureStore({
    reducer: {
        paras : paraReducer,
    },
  })
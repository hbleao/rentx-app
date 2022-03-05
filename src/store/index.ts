import { configureStore } from '@reduxjs/toolkit';

import { authorizationSlice } from './reducers/AuthorizationSlice';

import { AppDispatch } from './types';

const store = configureStore({
  reducer: {
    auth: authorizationSlice.reducer
  }
});

export const useAppDispatch = (): AppDispatch => useAppDispatch();

export default store;

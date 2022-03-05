import { Action, ThunkAction } from '@reduxjs/toolkit';

import store from '.';

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export type AppDispatch = typeof store.dispatch;

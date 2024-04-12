import {Action, configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {ThunkAction, ThunkMiddleware, thunk} from 'redux-thunk';
// ...

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunk as ThunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

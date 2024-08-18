import { ThunkAction } from 'redux-thunk';
// import { tmdbApi } from './services/tmdb';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore, UnknownAction } from '@reduxjs/toolkit';
import { mockApi } from './services/mockapi';

const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mockApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, undefined, UnknownAction>;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = useDispatch<AppDispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

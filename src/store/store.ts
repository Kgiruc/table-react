import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { booksApi } from '../services/ApiService';
import detailsReducer from './features/detailsSlice';
import searchReducer from './features/searchSlice';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    details: detailsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

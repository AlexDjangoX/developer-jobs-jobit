import { configureStore } from '@reduxjs/toolkit';
import { jobApi } from './services/jobApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import searchJobSliceReducer from '../redux/features/searchJobsSlice';
import filterJobsSliceReducer from './features/filterJobsSlice';

export const store = configureStore({
  reducer: {
    [jobApi.reducerPath]: jobApi.reducer,
    searchJobs: searchJobSliceReducer,
    filterJobs: filterJobsSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(jobApi.middleware),
});

setupListeners(store.dispatch);

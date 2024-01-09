import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../services/reducers';

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: { serviceApi }
  //     }
  //   })
});

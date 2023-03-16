import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import { configureStore } from '@reduxjs/toolkit'


export default () => {

    const store = configureStore({
        reducer: {
          expenses: expenseReducer,
          filters: filterReducer
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          })
      });
    return store;
  };


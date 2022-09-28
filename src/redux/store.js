import { configureStore } from '@reduxjs/toolkit';

import filter from './filter/slice';
import table from './table/slice';

export const store = configureStore({
  reducer: {
    filter,
    table,
  },
});

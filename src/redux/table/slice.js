import { createSlice } from '@reduxjs/toolkit';

import { fetchTableItems } from './asyncActions';

const initialState = {
  items: [],
  status: 'loading',
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTableItems.pending, (state) => {
      state.items = [];
      state.status = 'loading';
    });

    builder.addCase(fetchTableItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchTableItems.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    });
  },
});

export const { setItems } = tableSlice.actions;

export default tableSlice.reducer;

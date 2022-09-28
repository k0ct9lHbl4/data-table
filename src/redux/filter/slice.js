import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  sortType: {
    name: 'названию',
    sortProperty: 'title',
  },
  conditionType: {
    name: 'равно',
    sortProperty: 'equals',
  },
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setConditionType(state, action) {
      state.conditionType = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setSortType, setConditionType, setSearchValue, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;

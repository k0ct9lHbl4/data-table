import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTableItems = createAsyncThunk('pizza/fetchTableData', async (params) => {
  const { currentPage, sortType, conditionType, searchValue } = params;

  // Подтверждение правильности работы клиентской части приложения (все query параметры приходят верно):
  console.log(currentPage, sortType.sortProperty, conditionType.sortProperty, searchValue);
  console.log('Все данные фильтрации для query параметров приходят верно');

  //Получение всех данных (без фильтрации)
  if (!searchValue) {
    const { data } = await axios.get(
      `https://63333b26573c03ab0b5aa766.mockapi.io/TableData?page=${currentPage}&limit=10`,
    );
    return data;
  }

  // Вставляем параметры в качестве query параметров и получаем отсортированные данные.
  // Если API хорошее, то может вернуть общее количество страниц, что можно использовать для пагинации без хардкодинга
  const { data } = await axios.get(
    `https://63333b26573c03ab0b5aa766.mockapi.io/TableData?page=${currentPage}&limit=10`, // ... и другие query параметры
  );
  return data;
});

import React from 'react';

import SortHeader from '../components/SortHeader/SortHeader';
import TableContainer from '../components/TableContainer/TableContainer';
import Pagination from '../components/Pagination/Pagination';

const Table = () => {
  return (
    <>
      <SortHeader />

      <table className="table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <TableContainer />
      </table>

      <Pagination />
    </>
  );
};

export default Table;

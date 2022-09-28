import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTableItems } from '../../redux/table/asyncActions';

import { TableItem } from './TableItem/TableItem';
import { Loader } from '../Loader/Loader';

const TableContainer = () => {
  const dispatch = useDispatch();

  const { currentPage, sortType, conditionType, searchValue } = useSelector(
    (state) => state.filter,
  );
  const { items: tableItems, status } = useSelector((state) => state.table);

  useEffect(() => {
    dispatch(fetchTableItems({ currentPage, sortType, conditionType, searchValue }));
  }, [currentPage, sortType, conditionType, searchValue]);

  return (
    <tbody>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'success' ? (
        tableItems.map((item, index) => (
          <TableItem
            key={index}
            date={item.date}
            title={item.title}
            amount={item.amount}
            distance={item.distance}
          />
        ))
      ) : (
        <tr>
          <td colSpan={4}>
            <p>
              К сожалению, не удалось получить информацию. <br /> Попробуйте повторить попытку позже
            </p>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableContainer;

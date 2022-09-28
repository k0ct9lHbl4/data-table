import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/filter/slice';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.filter);

  const pageNumbers = [1, 2, 3, 4, 5, 6];

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const onClickNext = () => {
    if (currentPage === pageNumbers.at(-1)) return;
    dispatch(setCurrentPage(+currentPage + 1));
  };

  const onClickPrev = () => {
    if (currentPage === 1) return;
    dispatch(setCurrentPage(+currentPage - 1));
  };

  return (
    <div className={styles.pagination}>
      <ul>
        <li>
          <a onClick={onClickPrev}>{'<-'}</a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? 'selected' : ''}>
            <a onClick={() => onChangePage(number)}>{number}</a>
          </li>
        ))}
        <li>
          <a onClick={onClickNext}>{'->'}</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

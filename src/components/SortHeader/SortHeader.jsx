import React from 'react';

import { useSelector } from 'react-redux';
import { setSortType, setConditionType } from '../../redux/filter/slice';

import { sortList, conditionList } from './sort.data';
import { Sort } from '../Sort/Sort';
import { SearchField } from '../SearchField/SearchField';

import styles from './SortHeader.module.scss';

const SortHeader = () => {
  const { sortType, conditionType } = useSelector((state) => state.filter);

  return (
    <div className={styles.header}>
      <Sort
        value={sortType}
        sortData={sortList}
        setSortData={setSortType}
        sortTitle="Сортировка по:"
      />
      <Sort
        value={conditionType}
        sortData={conditionList}
        setSortData={setConditionType}
        sortTitle="Условие:"
      />
      <SearchField />
    </div>
  );
};

export default SortHeader;

import React from 'react';

import styles from './TableItem.module.scss';

export const TableItem = ({ date, title, amount, distance }) => {
  return (
    <tr className={styles.tableRaw}>
      <td>{date}</td>
      <td>{title}</td>
      <td>{amount}</td>
      <td>{distance}</td>
    </tr>
  );
};

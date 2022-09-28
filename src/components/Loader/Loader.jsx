import React from 'react';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <tr className={styles.loader}>
      <td colSpan={4}>
        <div>
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
          Идёт загрузка...
        </div>
      </td>
    </tr>
  );
};

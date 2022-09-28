import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './Sort.module.scss';

export const Sort = ({ value, sortData, setSortData, sortTitle }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef(null);

  const [isVisible, setIsVisible] = React.useState(false);

  const onClickPopupItem = (obj) => {
    dispatch(setSortData(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !event.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sort__label}>
        <b>{sortTitle}</b>
        <span onClick={() => setIsVisible(!isVisible)}>{value.name}</span>
      </div>
      {isVisible && (
        <div className={styles.sort__popup}>
          <ul>
            {sortData.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickPopupItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

import React, { SelectHTMLAttributes } from 'react';
import styles from './index.module.scss';

const Select = ({ ...props }: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select className={styles.select} {...props}>
      {props.children}
    </select>
  );
};

export default Select;

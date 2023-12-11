import React, { InputHTMLAttributes } from 'react';
import styles from './index.module.scss';

const Input = ({
  icon,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  icon?: JSX.Element | React.ReactNode;
}) => {
  let stylesinput = [styles.wrapper_input];
  let stylesicon = [styles.wrapper_icon];

  if (icon) {
    stylesinput.push(styles.wrapper_inputWithIcon);
  }

  return (
    <div className={styles.wrapper}>
      <input className={stylesinput.join(' ')} {...props} />
      {icon && <div className={stylesicon.join(' ')}>{icon}</div>}
    </div>
  );
};

export default Input;

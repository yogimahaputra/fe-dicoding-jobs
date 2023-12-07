import React, { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss';

export interface IButton {
  icon?: JSX.Element | React.ReactNode;
  danger?: boolean;
  primary?: boolean;
  type: 'button' | 'submit';
}

const Button = ({
  icon,
  danger,
  primary,
  type,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & IButton) => {
  let stylesbutton = [styles.button];

  if (icon) {
    stylesbutton.push(styles.icon);
  }
  if (danger) {
    stylesbutton.push(styles.danger);
  }
  if (primary) {
    stylesbutton.push(styles.primary);
  }

  return (
    <button className={stylesbutton.join(' ')} type={type} {...props}>
      {' '}
      {icon && icon}
      {props.children}
    </button>
  );
};

export default Button;

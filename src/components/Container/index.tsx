import React, { HTMLAttributes } from 'react';
import styles from './index.module.scss';
import { IChildrenComponent } from '@/common/type/global';

const CenterContent = ({ children }: IChildrenComponent) => {
  return <div className={styles.center_content}>{children}</div>;
};

const Div = ({
  children,
  ...props
}: IChildrenComponent & HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};

const Container = () => {
  return;
};

Container.Div = Div;
Container.CenterContent = CenterContent;
export default Container;

import React from 'react';
import Container from '../Container';
import styles from './index.module.scss';
import { IChildrenComponent } from '@/common/type/global';

const { Div } = Container;

const Hero = ({ children, dark }: IChildrenComponent & { dark?: boolean }) => {
  let styleclass = [styles.hero];

  if (dark) {
    styleclass.push(styles.heroDark);
  }

  return <Div className={styleclass.join(' ')}>{children}</Div>;
};

export default Hero;

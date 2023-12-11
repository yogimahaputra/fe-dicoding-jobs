import React from 'react';
import Container from '../Container';
import { IChildrenComponent } from '@/common/type/global';
import Navbar from '../Navbar';

const Layout = ({ children }: IChildrenComponent) => {
  return (
    <Container.Div>
      <Navbar />
      {children}
    </Container.Div>
  );
};

export default Layout;

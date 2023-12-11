import React from 'react';
import Container from '../Container';
import styles from './index.module.scss';
import Image from 'next/image';
import Typography from '../Typography';
import { Menu } from './NavbarMenu';
import { useRouter } from 'next/router';

const { Div } = Container;
const { LinkText } = Typography;

const Navbar = () => {
  const router = useRouter();
  return (
    <Div className={styles.navbar}>
      <LinkText href="/">
        <Image
          alt="logo_navbar"
          width={70}
          height={70}
          src={
            'https://res.cloudinary.com/dknud4pb7/image/upload/v1701867213/ra9omjskx6uhyvlpavyd.svg'
          }
        />
      </LinkText>
      <Div className={styles.navbar_menu}>
        {Menu.map((e) => {
          return (
            <Div key={e.label} className={styles.navbar_menu_sub}>
              <LinkText href={e.link}>{e.label}</LinkText>
              {router.pathname === e.link && (
                <Div className={styles.navbar_menu_sub_active}></Div>
              )}
            </Div>
          );
        })}
      </Div>
    </Div>
  );
};

export default Navbar;

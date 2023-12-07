import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import Typography from '../Typography';
import styles from './index.module.scss';
import { FiMapPin } from 'react-icons/fi';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { FaRegBuilding } from 'react-icons/fa';

const { Div } = Container;
const { Text, Small } = Typography;

const CardHome = () => {
  return (
    <Div className={styles.card}>
      <Div className={styles.card_image}>
        <Image
          alt="logo"
          width={100}
          height={100}
          src={
            'https://res.cloudinary.com/dknud4pb7/image/upload/v1701867214/fywugyyitmnrfmrgxg8k.svg'
          }
        />
      </Div>
      <Div className={styles.card_content}>
        <Text strong>Product Engineer</Text>
        <Div>
          <Div className={styles.card_content_row}>
            <Small>
              <FaRegBuilding /> Dicoding Indonesia
            </Small>
            <Small>Full Time</Small>
          </Div>
          <Div className={styles.card_content_row}>
            <Small>
              <FiMapPin /> Bandung
            </Small>
            <Small>
              <PiSuitcaseSimple /> 4 - 5 Tahun
            </Small>
          </Div>
        </Div>
      </Div>
      <Div className={styles.card_status_date}>
        <Small>Dibuat pada 15 Desember 2023</Small>
        <Small>Lamar Sebelum 15 Desember 2023</Small>
      </Div>
    </Div>
  );
};

export default CardHome;

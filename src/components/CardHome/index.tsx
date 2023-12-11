import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import Typography from '../Typography';
import styles from './index.module.scss';
import { FiMapPin } from 'react-icons/fi';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { FaRegBuilding } from 'react-icons/fa';
import { IVacancies } from '@/common/type/response';
import { timestampOnlyDateUtils } from '@/common/utils/TimestampUtils';

const { Div } = Container;
const { Text, Small } = Typography;

const CardHome = ({ ...props }: IVacancies) => {
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
        <Text strong>{props.title}</Text>
        <Div>
          <Div className={styles.card_content_row}>
            <Small>
              <FaRegBuilding /> Dicoding Indonesia
            </Small>
            <Small>{props.job_type}</Small>
          </Div>
          <Div className={styles.card_content_row}>
            <Small>
              <FiMapPin /> {props.location_name}
            </Small>
            <Small>
              <PiSuitcaseSimple /> {props.min_experience}{' '}
              {props.max_experience !== 0 ? `- ${props.max_experience}` : ''} Tahun
            </Small>
          </Div>
        </Div>
      </Div>
      <Div className={styles.card_status_date}>
        <Small>Dibuat pada {timestampOnlyDateUtils(props.created_at?.toString()!)}</Small>
        <Small>
          Lamar Sebelum {timestampOnlyDateUtils(props.expiration_date?.toString()!)}
        </Small>
      </Div>
    </Div>
  );
};

export default CardHome;

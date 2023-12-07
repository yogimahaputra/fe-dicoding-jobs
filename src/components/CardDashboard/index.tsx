import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import styles from './index.module.scss';
import Typography from '../Typography';
import { LuPencil, LuUpload } from 'react-icons/lu';
import { IoMdTime } from 'react-icons/io';
import Button from '../Button';
import { FaRegTrashAlt } from 'react-icons/fa';

const { Div } = Container;
const { Text, Small } = Typography;

const CardDashboard = () => {
  return (
    <Div className={styles.carddashboard}>
      <Image
        alt="dashboard_image"
        width={100}
        height={100}
        src={
          'https://res.cloudinary.com/dknud4pb7/image/upload/v1701867214/fywugyyitmnrfmrgxg8k.svg'
        }
      />
      <Div className={styles.carddashboard_content}>
        <Text strong>Product Engineer</Text>
        <Div className={styles.carddashboard_content_detail}>
          <Small>
            <LuUpload />
            DIbuat: 15 Desember 2023
          </Small>
          <Small>
            <IoMdTime />
            Aktif hingga: 30 Desember 2023
          </Small>
        </Div>
        <Div className={styles.carddashboard_content_action}>
          <Button type="button" icon={<LuPencil />}>
            Edit
          </Button>
          <Button type="button" danger icon={<FaRegTrashAlt />}>
            Delete
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default CardDashboard;

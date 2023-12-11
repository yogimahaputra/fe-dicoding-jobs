import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import styles from './index.module.scss';
import Typography from '../Typography';
import { LuPencil, LuUpload } from 'react-icons/lu';
import { IoMdTime } from 'react-icons/io';
import Button from '../Button';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IVacancies } from '@/common/type/response';
import { timestampOnlyDateUtils } from '@/common/utils/TimestampUtils';

const { Div } = Container;
const { Text, Small } = Typography;

const CardDashboard = ({
  deleteAction,
  editAction,
  ...props
}: IVacancies & {
  deleteAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  editAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
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
        <Text strong>{props.title}</Text>
        <Div className={styles.carddashboard_content_detail}>
          <Small>
            <LuUpload />
            Dibuat: {timestampOnlyDateUtils(props.created_at?.toString()!)}
          </Small>
          <Small>
            <IoMdTime />
            Aktif hingga: {timestampOnlyDateUtils(props.expiration_date?.toString()!)}
          </Small>
        </Div>
        <Div className={styles.carddashboard_content_action}>
          <Button onClick={editAction} value={props.id} type="button" icon={<LuPencil />}>
            Edit
          </Button>
          <Button
            onClick={deleteAction}
            value={props.id}
            type="button"
            danger
            icon={<FaRegTrashAlt />}
          >
            Delete
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default CardDashboard;

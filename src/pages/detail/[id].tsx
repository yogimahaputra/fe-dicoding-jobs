import React from 'react';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import styles from './index.module.scss';
import Typography from '@/components/Typography';
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { IQueryDetail } from '@/common/service/type';
import { IVacancies } from '@/common/type/response';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import Loader from '@/components/Spinner';

const { CenterContent, Div } = Container;
const { Small, Title, SubTitle, Text } = Typography;

const DetailVacancies = () => {
  const router = useRouter();
  const getVacancyId = async () => {
    const data = await fetch('http://localhost:8000/api/v1/vacancies/' + router.query.id);

    if (!data) {
      throw Error();
    }

    return await data.json();
  };

  const { isPending, data }: IQueryDetail<IVacancies> = useQuery({
    queryKey: ['vacancy', router.query.id],
    queryFn: getVacancyId,
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <Layout>
      <Hero>
        <Div className={styles.card}>
          <Div className={styles.image}>
            <Image
              alt="logo"
              width={100}
              height={100}
              src={
                'https://res.cloudinary.com/dknud4pb7/image/upload/v1701867214/fywugyyitmnrfmrgxg8k.svg'
              }
            />
          </Div>
          <Div className={styles.content}>
            <Title>{data?.title}</Title>
            <Div className={styles.row}>
              <Small>Sektor Bisnis: Technology</Small>
            </Div>
            <Div className={styles.row}>
              <Small>
                <FaRegBuilding /> Dicoding Indonesia
              </Small>
              <Small>
                <FiMapPin /> {data?.location_name}
              </Small>
              <Small>
                <FaUserFriends /> 50-100 Karyawan
              </Small>
            </Div>
          </Div>
        </Div>
      </Hero>
      <CenterContent>
        <Div className={styles.content}>
          <Div>{data?.description}</Div>
          <Div className={styles.additional}>
            <SubTitle>Informasi Tambahan</SubTitle>
            <Div className={styles.additional_content}>
              <Div>
                <Text strong>Pengalaman bekerja</Text>
                <Text>
                  {data?.max_experience === 0 && 'Lebih dari '} {data?.min_experience}
                  {data?.max_experience !== 0 ? `- ${data?.max_experience}` : ''} tahun
                </Text>
              </Div>
              <Div>
                <Text strong>Kandidat yang dibutuhkan</Text>
                <Text>{data?.amount_need_employee} kandidat</Text>
              </Div>
            </Div>
          </Div>
        </Div>
      </CenterContent>
    </Layout>
  );
};

export default DetailVacancies;

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

const { CenterContent, Div } = Container;
const { Small, Title, SubTitle, Text } = Typography;

const DetailVacancies = () => {
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
            <Title>Product Engineer</Title>
            <Div className={styles.row}>
              <Small>Sektor Bisnis: Technology</Small>
            </Div>
            <Div className={styles.row}>
              <Small>
                <FaRegBuilding /> Dicoding Indonesia
              </Small>
              <Small>
                <FiMapPin /> Bandung
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
          <Div>
            <h1>Job Description</h1>
            <div>
              <p>
                As a Product Engineer, you will be joining the Product & Engineering team
                in building impactful products for Dicoding users. With your programming
                skills, you will be responsible for creating great experiences for our
                users.
              </p>
              <br />

              <p>
                We are looking for an engineer, who not only knows how to program with
                good functionality, but also solves user problems. When building
                dicoding.com, we always try to:
              </p>
              <br />

              <ul>
                <li>Give maximum impact from the solutions we built.</li>
                <li>
                  Live a balanced life (it is important for engineers to sleep well.)
                </li>
              </ul>
            </div>
          </Div>
          <Div className={styles.additional}>
            <SubTitle>Informasi Tambahan</SubTitle>
            <Div className={styles.additional_content}>
              <Div>
                <Text strong>Pengalaman bekerja</Text>
                <Text>1-3 tahun</Text>
              </Div>
              <Div>
                <Text strong>Kandidat yang dibutuhkan</Text>
                <Text>1 kandidat</Text>
              </Div>
            </Div>
          </Div>
        </Div>
      </CenterContent>
    </Layout>
  );
};

export default DetailVacancies;

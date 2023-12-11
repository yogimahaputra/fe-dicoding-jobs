import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React from 'react';
import styles from './index.module.scss';
import Typography from '@/components/Typography';
import CardHome from '@/components/CardHome';
import Input from '@/components/Input';
import { IoSearchOutline } from 'react-icons/io5';
import Image from 'next/image';

const { CenterContent, Div } = Container;
const { Title, LinkText, SubTitle } = Typography;

const Home = () => {
  return (
    <Layout>
      <Hero dark>
        <SubTitle>Dicoding Jobs</SubTitle>
        <Title>
          Temukan lowongan yang cocok untuk kamu
          <Image
            alt="image_hero"
            width={200}
            height={100}
            src={
              'https://res.cloudinary.com/dknud4pb7/image/upload/v1701936479/z6iyiaqvh1v4g3pkohmr.jpg'
            }
          />
        </Title>
      </Hero>
      <CenterContent>
        <Div className={styles.header}>
          <Title>Daftar Pekerjaan Baru</Title>
          <Input
            icon={<IoSearchOutline />}
            defaultValue={'oke'}
            placeholder="Pekerjaan apa yang sedang kamu cari ?"
          />
        </Div>
        <Div className={styles.content}>
          <LinkText href="/detail/1">
            <CardHome />
          </LinkText>
          <LinkText href="/">
            <CardHome />
          </LinkText>
        </Div>
      </CenterContent>
    </Layout>
  );
};

export default Home;

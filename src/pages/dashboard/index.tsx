import Container from '@/components/Container';
import Layout from '@/components/Layout';
import React from 'react';
import styles from './index.module.scss';
import Typography from '@/components/Typography';
import { PiSuitcaseSimple } from 'react-icons/pi';
import Button from '@/components/Button';
import { IoMdAdd } from 'react-icons/io';
import CardDashboard from '@/components/CardDashboard';
import Image from 'next/image';

const { CenterContent, Div } = Container;
const { Text, SubTitle } = Typography;

const Home = () => {
  return (
    <Layout>
      <CenterContent>
        <Div className={styles.dashboard}>
          <Div className={styles.dashboard_sidebar}>
            <Div className={styles.dashboard_sidebar_image}>
              <Image
                alt="image_dashboard"
                fill
                src={
                  'https://res.cloudinary.com/dknud4pb7/image/upload/v1701935128/mf9xmvw0chgof1zyhxm5.svg'
                }
              />
            </Div>
            <Div className={styles.dashboard_sidebar_menu}>
              <Text>
                <PiSuitcaseSimple /> Lowongan Saya
              </Text>
            </Div>
          </Div>
          <Div className={styles.dashboard_content}>
            <Div className={styles.dashboard_content_header}>
              <SubTitle>Lowongan Saya</SubTitle>
              <Button type="button" primary icon={<IoMdAdd />}>
                Buat Lowongan
              </Button>
            </Div>
            <Div className={styles.dashboard_content_list}>
              <CardDashboard />
            </Div>
          </Div>
        </Div>
      </CenterContent>
    </Layout>
  );
};

export default Home;

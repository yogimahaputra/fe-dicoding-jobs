import Container from '@/components/Container';
import Layout from '@/components/Layout';
import React, { useState } from 'react';
import styles from './index.module.scss';
import Typography from '@/components/Typography';
import { PiSuitcaseSimple } from 'react-icons/pi';
import Button from '@/components/Button';
import { IoMdAdd } from 'react-icons/io';
import CardDashboard from '@/components/CardDashboard';
import Image from 'next/image';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { IQuery } from '@/common/service/type';
import { IVacancies } from '@/common/type/response';
import Loader from '@/components/Spinner';
import { useRouter } from 'next/router';

const { CenterContent, Div } = Container;
const { Text, SubTitle, LinkText } = Typography;

export const getVacancy = async () => {
  const data = await fetch('http://localhost:8000/api/v1/vacancies');

  if (!data) {
    throw Error();
  }

  return await data.json();
};

const Dashboard = () => {
  const [loading, setloading] = useState(false);
  const [id, setId] = useState(-1);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { isError, data }: IQuery<IVacancies[]> = useQuery({
    queryKey: ['vacancy'],
    queryFn: getVacancy,
  });

  const deleteData = async () => {
    try {
      await fetch('http://localhost:8000/api/v1/vacancies/' + id, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const mutation = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vacancy'] });
      setId(-1);
      setloading(false);
    },
    onError: () => {
      setId(-1);
      setloading(false);
    },
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setloading(true);
    setId(parseInt(e.currentTarget.value));
    mutation.mutate();
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    router.push('/dashboard/edit/' + e.currentTarget.value);
  };

  return (
    <Layout>
      {loading && <Loader />}
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
              <LinkText href="/dashboard/create">
                <Button type="button" primary icon={<IoMdAdd />}>
                  Buat Lowongan
                </Button>
              </LinkText>
            </Div>
            <Div className={styles.dashboard_content_list}>
              {!isError && data?.data.length === 0 && (
                <Text>Tidak ada Data Lowongan</Text>
              )}
              {!isError &&
                data?.data.map((e) => (
                  <CardDashboard
                    editAction={handleEdit}
                    deleteAction={handleDelete}
                    key={e.id}
                    {...e}
                  />
                ))}
            </Div>
          </Div>
        </Div>
      </CenterContent>
    </Layout>
  );
};

export default Dashboard;

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Typography from '@/components/Typography';
import CardHome from '@/components/CardHome';
import Input from '@/components/Input';
import { IoSearchOutline } from 'react-icons/io5';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { IVacancies } from '@/common/type/response';
import { IQuery } from '@/common/service/type';
import { getVacancy } from './dashboard';
import Loader from '@/components/Spinner';
import { useDebounce } from '@/common/hooks/useDebounce';

const { CenterContent, Div } = Container;
const { Title, LinkText, SubTitle, Text } = Typography;

const Home = () => {
  const [responseSearchData, setResponseSearchData] = useState<IVacancies[] | null>(null);
  const [search, setsearch] = useState<string>('');
  const debouncedValue = useDebounce<string>(search, 700);
  const { isPending, isError, data }: IQuery<IVacancies[]> = useQuery({
    queryKey: ['vacancy'],
    queryFn: getVacancy,
  });

  const searchVacancy = async () => {
    const data = await fetch(
      'http://localhost:8000/api/v1/vacancies-search?search=' + search,
    );

    if (!data) {
      throw Error();
    }

    const res = await data.json();
    setResponseSearchData(res.data);
  };

  // Fetch API (optional)
  useEffect(() => {
    if (search !== '') {
      searchVacancy();
    }
    // Do fetch here...
    // Triggers when "debouncedValue" changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  if (isPending) {
    return <Loader />;
  }

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
          <Div className={styles.header_inputWrapper}>
            <Input
              onChange={(e) => {
                setsearch(e.currentTarget.value);
              }}
              icon={<IoSearchOutline />}
              placeholder="Pekerjaan apa yang sedang kamu cari ?"
            />
            {search !== '' && (
              <Div className={styles.header_inputWrapper_searchResponse}>
                {responseSearchData !== null &&
                  responseSearchData!.map((e) => {
                    return (
                      <LinkText
                        href={'/detail/' + e.id}
                        key={e.id}
                        className={styles.header_inputWrapper_searchResponse_card}
                      >
                        <SubTitle>{e.title}</SubTitle>
                        <Text>{e.location_name}</Text>
                      </LinkText>
                    );
                  })}
              </Div>
            )}
          </Div>
        </Div>
        <Div className={styles.content}>
          {!isError && data?.data.length === 0 && <Text>Tidak ada Data Lowongan</Text>}
          {!isError &&
            data?.data.map((e) => (
              <LinkText key={e.id} href={`/detail/` + e.id}>
                <CardHome {...e} />
              </LinkText>
            ))}
        </Div>
      </CenterContent>
    </Layout>
  );
};

export default Home;

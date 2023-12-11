import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React, { useState } from 'react';
import styles from './index.module.scss';
import Typography from '@/components/Typography';
import Image from 'next/image';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Switch from 'react-switch';
import { ILocations, IPositions, IVacancies } from '@/common/type/response';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IQuery } from '@/common/service/type';
import Select from '@/components/Select';
import { useRouter } from 'next/router';
import Loader from '@/components/Spinner';

const { CenterContent, Div } = Container;
const { Title, Text, Small } = Typography;

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const getPosition = async () => {
  const data = await fetch('http://localhost:8000/api/v1/positions');

  if (!data) {
    throw Error();
  }

  return await data.json();
};
const getLocation = async () => {
  const data = await fetch('http://localhost:8000/api/v1/locations');

  if (!data) {
    throw Error();
  }

  return await data.json();
};

const Create = () => {
  const [loading, setloading] = useState(false);
  const { isError: isErrorPosition, data: dataPosition }: IQuery<IPositions[]> = useQuery(
    { queryKey: ['position'], queryFn: getPosition },
  );
  const { data: dataLocation }: IQuery<ILocations[]> = useQuery({
    queryKey: ['location'],
    queryFn: getLocation,
  });

  const [payload, setpayload] = useState<IVacancies>({
    amount_need_employee: '',
    description: '',
    expiration_date: '',
    is_ranged_salary: 0,
    is_visible_salary: 0,
    job_type: '',
    location_id: 0,
    min_experience: 0,
    max_experience: 0,
    min_salary: 0,
    max_salary: 0,
    offers_remote_work: 0,
    position_id: 0,
    slug: '',
    title: '',
  });

  const postData = async () => {
    try {
      await fetch('http://localhost:8000/api/v1/vacancies', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      // console.log(error);
    }
  };

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      router.push('/dashboard');
      setloading(false);
    },
    onError: () => {
      setloading(false);
    },
  });

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);

    if (payload.position_id === 0) {
      alert('Anda belum memilih posisi lowongan');
      return;
    }
    if (payload.location_id === 0) {
      alert('Anda belum memilih lokasi lowongan');
      return;
    }

    if (payload.min_salary < 0) {
      alert('Minimal Gaji tidak boleh dibawah 0');
      return;
    }
    if (payload.max_salary! < 0) {
      alert('Maksimal Gaji tidak boleh dibawah 0');
      return;
    }
    if (new Date(payload.expiration_date) < new Date()) {
      alert('Expire Date harus melebihi Hari ini');
      return;
    }

    mutation.mutate();
  };

  const InputRegex = (e: string) => {
    return /^[^\s].*/.test(e);
  };

  const JobType = ['Full-Time', 'Part-Time', 'Kontrak', 'Intern'];

  const JobExperience = [
    {
      label: 'Kurang Dari 1 Tahun',
      min: 0,
      max: 1,
    },
    {
      label: '1-3 Tahun',
      min: 1,
      max: 3,
    },
    {
      label: '3-5 Tahun',
      min: 3,
      max: 5,
    },
    {
      label: '6-10 Tahun',
      min: 6,
      max: 10,
    },
    {
      label: 'Lebih Dari 10 Tahun',
      min: 10,
      max: 0,
    },
  ];

  return (
    <Layout>
      {loading && <Loader />}
      <Hero dark>
        <Title>
          Buat lowongan pekerjaan
          <Image
            alt="image_hero"
            width={200}
            height={100}
            src={
              'https://res.cloudinary.com/dknud4pb7/image/upload/v1701936479/z6iyiaqvh1v4g3pkohmr.jpg'
            }
          />
        </Title>
        <Text>
          Dicoding Jobs menghubungkan industri dengan talenta yang tepat. Mencari tim baru
          tidak harus melelahkan dan boros biaya.
        </Text>
      </Hero>
      <CenterContent>
        <form className={styles.form} onSubmit={onSubmit}>
          <Div className={styles.form_wrapperinput}>
            <Text>Judul Lowongan</Text>
            <Input
              min={3}
              max={244}
              value={payload.title}
              onChange={(e) => {
                if (!InputRegex(e.currentTarget.value) && e.currentTarget.value === '') {
                  setpayload({
                    ...payload,
                    title: '',
                    slug: '',
                  });
                }

                if (InputRegex(e.currentTarget.value)) {
                  setpayload({
                    ...payload,
                    title: e.currentTarget.value,
                    slug: e.currentTarget.value.toLowerCase().split(' ').join('-'),
                  });
                }
              }}
              required
              placeholder="Masukan Judul Lowongan"
            />
            <Small>Contoh: Android Native Developer</Small>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Posisi</Text>
            <Select
              value={payload.position_id}
              onChange={(e) => {
                setpayload({
                  ...payload,
                  position_id: parseInt(e.currentTarget.value),
                });
              }}
            >
              <option value={0} disabled>
                Pilih Posisi
              </option>
              {!isErrorPosition &&
                dataPosition?.data.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
            </Select>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Tipe Pekerjaan</Text>
            {JobType.map((e) => {
              return (
                <Div key={e} className={styles.form_wrapperinput_radio}>
                  <Input
                    value={e}
                    onChange={(e) => {
                      setpayload({
                        ...payload,
                        job_type: e.currentTarget.value,
                      });
                    }}
                    checked={payload.job_type === e}
                    required
                    type="radio"
                  />
                  <Text>{e}</Text>
                </Div>
              );
            })}
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Kandidat yang dibutuhkan</Text>
            <Input
              onChange={(e) => {
                setpayload({
                  ...payload,
                  amount_need_employee: parseInt(e.currentTarget.value),
                });
              }}
              min={1}
              value={payload.amount_need_employee}
              type="number"
              required
              placeholder="Masukan Judul Lowongan"
            />
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Aktif hingga</Text>
            <Input
              onChange={(e) => {
                setpayload({
                  ...payload,
                  expiration_date: e.currentTarget.value,
                });
              }}
              min={new Date(tomorrow).toISOString().split('T')[0]}
              value={payload.expiration_date.toString()}
              required
              type="date"
              placeholder="Masukan Judul Lowongan"
            />
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Lokasi</Text>
            <Select
              value={payload.location_id}
              onChange={(e) => {
                setpayload({
                  ...payload,
                  location_id: parseInt(e.currentTarget.value),
                });
              }}
            >
              <option value={0} disabled>
                Pilih Lokasi
              </option>
              {!isErrorPosition &&
                dataLocation?.data.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
            </Select>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Div className={styles.form_wrapperinput_radio}>
              <Input
                value={payload.offers_remote_work}
                onChange={() => {
                  let trueVisible = payload.offers_remote_work === 1;
                  setpayload({
                    ...payload,
                    offers_remote_work: trueVisible ? 0 : 1,
                  });
                }}
                checked={payload.offers_remote_work === 1 ? true : false}
                type="checkbox"
              />
              <Text>Bisa Remote</Text>
            </Div>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Deskripsi</Text>
            <Input
              onChange={(e) => {
                if (!InputRegex(e.currentTarget.value) && e.currentTarget.value === '') {
                  setpayload({
                    ...payload,
                    description: '',
                  });
                }

                if (InputRegex(e.currentTarget.value)) {
                  setpayload({
                    ...payload,
                    description: e.currentTarget.value,
                  });
                }
              }}
              min={3}
              max={244}
              value={payload.description}
              required
              placeholder="Masukan Deskripsi Lowongan"
            />
            <Small>Anda bisa mengubah template yang telah disediakan di atas.</Small>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Rentang gaji per bulan</Text>
            <Div className={styles.form_range}>
              <Input
                onChange={(e) => {
                  setpayload({
                    ...payload,
                    min_salary: parseInt(e.currentTarget.value),
                  });
                }}
                value={payload.min_salary}
                min={1}
                type="number"
                required
                placeholder="Minimum"
                icon={<Text strong>Rp</Text>}
              />
              <Input
                onChange={(e) => {
                  setpayload({
                    ...payload,
                    max_salary: parseInt(e.currentTarget.value),
                  });
                }}
                value={payload.max_salary}
                min={1}
                type="number"
                required
                placeholder="Maksimum (Opsional)"
                icon={<Text strong>Rp</Text>}
              />
            </Div>
            <Small>
              Anda tidak perlu mengisi kolom &quot;Maksimum&quot; jika yang dimasukkan
              adalah gaji pokok.
            </Small>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Div className={styles.form_wrapperinput_radio}>
              <Text>Tampilkan Gaji</Text>
              <Switch
                onChange={() => {
                  let trueVisible = payload.is_visible_salary === 1;
                  setpayload({
                    ...payload,
                    is_visible_salary: trueVisible ? 0 : 1,
                  });
                }}
                checked={payload.is_visible_salary === 1 ? true : false}
                className="react-switch"
              />
            </Div>

            <Small>
              Gaji akan ditampilkan di lowongan pekerjaan dan dapat dilihat oleh kandidat.
            </Small>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Minimum pengalaman bekerja</Text>
            {JobExperience.map((e) => {
              return (
                <Div key={e.label} className={styles.form_wrapperinput_radio}>
                  <Input
                    value={e.label}
                    onChange={() => {
                      setpayload({
                        ...payload,
                        min_experience: e.min,
                        max_experience: e.max,
                      });
                    }}
                    checked={payload.max_experience === e.max}
                    required
                    type="radio"
                  />
                  <Text>{e.label}</Text>
                </Div>
              );
            })}
          </Div>
          <Div className={styles.form_action}>
            <Button primary type="submit">
              Buat Lowongan
            </Button>
            <Button type="button">Batal</Button>
          </Div>
        </form>
      </CenterContent>
    </Layout>
  );
};

export default Create;

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import React from 'react';
import styles from './index.module.scss';
import Typography from '@/components/Typography';
import Image from 'next/image';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Switch from 'react-switch';

const { CenterContent, Div } = Container;
const { Title, Text, Small } = Typography;

const Create = () => {
  return (
    <Layout>
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
        <form className={styles.form}>
          <Div className={styles.form_wrapperinput}>
            <Text>Judul Lowongan</Text>
            <Input placeholder="Masukan Judul Lowongan" />
            <Small>Contoh: Android Native Developer</Small>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Posisi</Text>
            <Input placeholder="Masukan Judul Lowongan" />
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Tipe Pekerjaan</Text>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>Full-Time</Text>
            </Div>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>Part-Time</Text>
            </Div>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>Kontrak</Text>
            </Div>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>Intern</Text>
            </Div>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Kandidat yang dibutuhkan</Text>
            <Input placeholder="Masukan Judul Lowongan" />
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Aktif hingga</Text>
            <Input type="date" placeholder="Masukan Judul Lowongan" />
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Lokasi</Text>
            <Input placeholder="Masukan Judul Lowongan" />
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="checkbox" />
              <Text>Bisa Remote</Text>
            </Div>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Deskripsi</Text>
            <Input placeholder="Masukan Judul Lowongan" />
            <Small>Anda bisa mengubah template yang telah disediakan di atas.</Small>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Rentang gaji per bulan</Text>
            <Div className={styles.form_range}>
              <Input placeholder="Minimum" icon={<Text strong>Rp</Text>} />
              <Input placeholder="Maksimum (Opsional)" icon={<Text strong>Rp</Text>} />
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
                  // console.log();
                }}
                checked={false}
                className="react-switch"
              />
            </Div>

            <Small>
              Gaji akan ditampilkan di lowongan pekerjaan dan dapat dilihat oleh kandidat.
            </Small>
          </Div>
          <Div className={styles.form_wrapperinput}>
            <Text>Minimum pengalaman bekerja</Text>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>Kurang Dari 11 Tahun</Text>
            </Div>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>1-3 Tahun</Text>
            </Div>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>4-5 Tahun</Text>
            </Div>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>6-10 Tahun</Text>
            </Div>
            <Div className={styles.form_wrapperinput_radio}>
              <Input type="radio" />
              <Text>Lebih Dari 10 Tahun</Text>
            </Div>
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

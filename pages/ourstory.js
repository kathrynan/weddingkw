import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from '../public/assets/icons/ring.svg';
import Location from '../public/assets/icons/location.svg';

export default function OurStory() {
    return (
      <Layout>
        <Head>
          <title>Wedding | Kathryn & William</title>
        </Head>
  
        <section className="text-white p-8">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="mt-4">Details coming soon!</p>
        </section>
      </Layout>
    );
  }
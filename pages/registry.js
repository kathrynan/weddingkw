import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from '../public/assets/icons/ring.svg';
import Location from '../public/assets/icons/location.svg';

export default function Registry() {
    return (
      <Layout>
        <Head>
          <title>Wedding | Kathryn & William</title>
        </Head>

        {/* Header Mobile */}
        <section
          id="homepage-mobile"
          className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
          style={{ backgroundImage: 'url(/assets/gallery-mobile/DSCF4261.jpg)' }}
        >
          <div className="flex flex-col  w-full relative">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
              <p className="font-habibi ">Celebrate the marriage of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Kathryn & William
              </h4>
              <p className="font-habibi ">June 20 2026</p>
            </div>
          </div>
        </section>

        {/* Header Desktop */}
        <section
          id="homepage-desktop"
          className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-center my-auto">
              <p>If you want to give more, we would love if you could donate to our wedding fund by clicking <u><a href="https://withjoy.com/william-and-kathryn-jun-26/registry" target="_blank">here</a></u>.</p>
              <p>We appreciate any and all contributions!</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-habibi">Celebrate the marriage of</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Kathryn & William
              </h4>
              <p className="font-habibi ml-auto">June 20 2026</p>
            </div>
          </div>
          <div className="flex w-full relative">
            <Image
              src="/assets/gallery-mobile/DSCF4261.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
  
        {/*}
        <section className="text-white p-8">
          <h1 className="text-3xl font-bold">Registry</h1>
          <p className="mt-4">Will contain the registry list.</p>
        </section>
        {*/}
      </Layout>
    );
  }
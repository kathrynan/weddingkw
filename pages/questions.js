import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from '../public/assets/icons/ring.svg';
import Location from '../public/assets/icons/location.svg';

export default function Questions() {
    return (
      <Layout>
        <Head>
          <title>Wedding | Kathryn & William</title>
        </Head>
        
        {/* Header Mobile */}
        <section
          id="homepage-mobile"
          className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
          style={{ backgroundImage: 'url(/assets/gallery-mobile/DSCF4805.jpg)' }}
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
              <p>"I have found the one whom my soul loves."</p>
              <p>Song of Solomon 3:4</p>
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
              src="/assets/gallery-mobile/DSCF4805.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>

        {/* Giant Space woooo */}
        <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
              {/*<p className="font-habibi lg:hidden">Wedding of</p>*/}
              <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
              </h4>
              {/*<p className="lg:hidden font-habibi ">June 20 2026</p>*/}
            </div>
          </div>
  
        <section className="text-white p-8">
          <div className="flex flex-col text-white font-habibi justify-between h-full">
              <p className="text-base text-center md:text-lg lg:text-3xl">
                Frequently Asked Questions{' '}
              </p>
              <p className="text-xs text-center md:text-base lg:text-lg">
                ---------------------------------------------------
              </p>

              <p class="font-bold text-xs md:text-base lg:text-lg mt-6">
                1. What's the dress code?
              </p>
              <p class="leading-loose ml-5 text-xs md:text-base lg:text-lg">
                Hawai'i formal!
              </p>

              <p class="font-bold text-xs md:text-base lg:text-lg mt-6">
                2. How's the parking?
              </p>
              <p class="leading-loose ml-5 text-xs md:text-base lg:text-lg">
                The church will have parking reserved in their front and back lots. For the reception, there will also be parking in the structure across from the venue. Further details will be provided later.
              </p>

              <p class="font-bold text-xs md:text-base lg:text-lg mt-6">
                3. When does the ceremony and reception begin?
              </p>
              <p class="leading-loose ml-5 text-xs md:text-base lg:text-lg">
                The ceremony will begin at 11am, but we ask that guests arrive at 10:30am to allow time for parking and seating. The reception will begin around 12:30pm, following a short break after the ceremony to enjoy snacks/drinks and travel to the reception venue.
              </p>

              <p class="font-bold text-xs md:text-base lg:text-lg mt-6">
                4. Is the wedding indoors or outdoors?
              </p>
              <p class="leading-loose ml-5 text-xs md:text-base lg:text-lg">
                Inside! The wedding ceremony will be inside the chapel and the reception will be
                at 3660 on the Rise.
              </p>

              <p class="font-bold text-xs md:text-base lg:text-lg mt-6">
                5. What's the deadline to RSVP?
              </p>
              <p class="leading-loose ml-5 text-xs md:text-base lg:text-lg">
                Our hard deadline is mid-May, but please let us know if you can come as soon as possible!
              </p>

              <p class="font-bold text-xs md:text-base lg:text-lg mt-6">
                6. Can we bring plus-ones/are children allowed?
              </p>
              <p class="leading-loose ml-5 text-xs md:text-base lg:text-lg">
                Only those listed in your invitation are invited.
              </p>
          </div>
        </section>
      </Layout>
    );
  }
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
// import Resepsi from '../public/assets/icons/resepsi.svg';
import Ring from '../public/assets/icons/ring.svg';
import Location from '../public/assets/icons/location.svg';

// Countdown function
function getCalendarAccurateCountdown() {
  const today = new Date();
  const weddingDate = new Date("2026-06-20");

  let years = weddingDate.getFullYear() - today.getFullYear();
  let months = weddingDate.getMonth() - today.getMonth();
  let days = weddingDate.getDate() - today.getDate();

  // Adjust days
  if (days < 0) {
    const prevMonth = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }

  // Adjust months
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  // Convert years → months
  const totalMonths = years * 12 + months;

  return { months: totalMonths, days };
}


export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding | Kathryn & William</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Header Mobile */}
        <section
          id="homepage-mobile"
          className="flex lg:hidden bg-cover bg-center  w-full min-h-screen  items-start py-14"
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
          className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 min-h-screen"
        >
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-center my-auto">
              {/* Clock */}
              {(() => {
                const { months, days } = getCalendarAccurateCountdown();
                return (
                  <p className="font-habibi mt-6 text-lg tracking-wide text-white/90 animate-fadeIn">
                    <span className="text-3xl font-habibi">
                      {months} {months === 1 ? "month" : "months"} & {days}{" "}
                      {days === 1 ? "day" : "days"}
                    </span>
                    <span className="block text-sm uppercase tracking-widest text-white/60 mb-1">
                      Until the wedding
                    </span>
                  </p>
                );
              })()}

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
              alt="Engagement picture of Kathryn and William"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>

        {/* Second Box : Summary */}
        <section
          id="summary"
          className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
              {/*<p className="font-habibi lg:hidden">Wedding of</p>*/}
              <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
                K & W
              </h4>
              {/*<p className="lg:hidden font-habibi ">June 20 2026</p>*/}
            </div>
          </div>
          <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <Ring className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto" />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">
                    Ceremony{' '}
                  </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    Kaimuki Christian Church
                  </p>
                </div>
              </div>

              <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
                <img
                  src="/assets/icons/resepsi.svg"
                  className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
                />
                <div className="flex flex-col text-white font-habibi justify-between h-full">
                  <p className="text-base md:text-lg lg:text-3xl">Reception </p>
                  <p className="text-xs md:text-base lg:text-lg">
                    3660 on the Rise
                  </p>
                </div>
              </div>
            </div>
            {/*<p className="hidden md:block mt-12 lg:mt-auto mx-auto text-lg text-white font-habibi">
              10:30 AM - 2:30 PM
            </p>*/}
          </div>
          <div className="flex mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
            <button className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base">
              {/*<Location className="h-8 md:h-10 w-8 md:w-10 mr-4" />*/}
              View Map
            </button>
          </div>
        </section>

        {/* Picture Gallery */}
        <section
          id="gallery"
          className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 min-h-screen px-4 lg:px-8"
        >
          {/*<h1 className="col-span-2  text-5xl font-great-vibes my-auto mx-auto text-white lg:hidden">
            Gallery
          </h1>*/}
          <div className="flex row-span-3 ">
            <Image
              src="/assets/gallery-mobile/DSCF4331.jpg"
              alt="Engagement Photo #1"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
            <Image
              src="/assets/gallery-mobile/photo-2.png"
              alt="Middle Photo"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
            <Image
              src="/assets/gallery-mobile/photo-3.png"
              alt="Engagement Photo #3"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-1 lg:row-span-3">
            <Image
              src="/assets/gallery-mobile/DSCF4716.jpg"
              alt="Engagement Photo #4"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
          <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
            <Image
              src="/assets/gallery-mobile/DSCF4781.jpg"
              alt="Engagement Photo #2"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}

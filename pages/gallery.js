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
  let totalMonths = years * 12 + months;

  // Convert months → real calendar days
  let monthDays = 0;
  let cursor = new Date(today);

  for (let i = 0; i < totalMonths; i++) {
    const nextMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
    monthDays += nextMonth.getDate();
    cursor.setMonth(cursor.getMonth() + 1);
  }

  const totalDays = monthDays + days;

  return { days: totalDays };
}

export default function Gallery() {
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
                  className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 min-h-screen"
                >
                  <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
                    <div className="flex flex-col text-center my-auto">
                      {/* Clock */}
                      {(() => {
                        const { days } = getCalendarAccurateCountdown();
                        return (
                          <p className="mt-6 text-lg tracking-wide text-white/90 animate-fadeIn">
                            <span className="text-4xl">
                              {days} days
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
  
        {/* Picture Gallery */}
        <section id="gallery"
          className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-6 lg:grid-rows-4 grid-cols-2 lg:grid-cols-3 px-4 lg:px-8"
        >
          {/* Photo 1 */}
          <div className="flex row-span-2">
            <Image
              src="/assets/gallery-mobile/DSCF4404.jpg"
              alt="Engagement Photo #1"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>

          {/* Photo 2 */}
          <div className="flex row-span-1 lg:row-span-2">
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

          {/* Photo 3 */}
          <div className="flex row-span-2 col-span-2 lg:col-span-1 w-full relative">
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
    );
  }
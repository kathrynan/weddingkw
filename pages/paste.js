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

          {/* Middle Photo */}
          <div className="flex row-span-2 col-start-2 lg:row-span-3 bg-white">
            <Image
              src="/assets/gallery-mobile/DSCF4279.jpg"
              alt="Middle Photo"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>

          {/* Photo 3 */}
          <div className="flex row-span-1 col-start-2 lg:col-start-3 lg:row-span-1">
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

          {/* Photo 4 */}
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

          {/* Photo 2 (wide) */}
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
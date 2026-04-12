import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="fixed lg:hidden bottom-0 mb-1 mx-1 right-0 left-0 z-20">
      <div className="bg-dark-500 w-full px-6 rounded-full shadow border-opacity-20 border border-white">
        <ul className="flex items-center justify-evenly text-white text-xs font-light py-2 md:py-3">

          {/* HOME */}
          <li>
            <Link
              href="/"
              className="flex flex-col items-center px-3 py-1 transition-all duration-200 hover:scale-105 hover:outline hover:outline-1 hover:outline-white rounded-full"
            >
              <span
                className="h-6 w-6 mb-1 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/assets/icons/home.svg')" }}
              />
              Home
            </Link>
          </li>

          {/* FAQ */}
          <li>
            <Link
              href="/questions"
              className="flex flex-col items-center px-3 py-1 transition-all duration-200 hover:scale-105 hover:outline hover:outline-1 hover:outline-white rounded-full"
            >
              <span
                className="h-6 w-6 mb-1 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/assets/icons/calender.svg')" }}
              />
              FAQ
            </Link>
          </li>

          {/* GALLERY */}
          <li>
            <Link
              href="/gallery"
              className="flex flex-col items-center px-3 py-1 transition-all duration-200 hover:scale-105 hover:outline hover:outline-1 hover:outline-white rounded-full"
            >
              <span
                className="h-6 w-6 mb-1 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/assets/icons/gallery.svg')" }}
              />
              Gallery
            </Link>
          </li>

          {/* REGISTRY */}
          <li>
            <a
              href="https://withjoy.com/william-and-kathryn-jun-26/registry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center px-3 py-1 transition-all duration-200 hover:scale-105 hover:outline hover:outline-1 hover:outline-white rounded-full"
            >
              <span
                className="h-6 w-6 mb-1 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/assets/icons/chat.svg')" }}
              />
              Registry
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Footer;



{/*import React from 'react';
import Link from 'next/link';
import Home from '../../public/assets/icons/home.svg';
import Calender from '../../public/assets/icons/calender.svg';
import Gallery from '../../public/assets/icons/gallery.svg';
import Chat from '../../public/assets/icons/chat.svg';

const Footer = () => {
  return (
    <div className=" fixed lg:hidden bottom-0 mb-1 mx-1 right-0 left-0 z-20">
      <div className="bg-dark-500 w-full px-6 rounded-full shadow border-opacity-20 border border-white">
        <ul className=" flex items-center justify-evenly text-white text-xs font-light py-2 md:py-3">
          <li className="flex items-center font-medium  flex-col px-2 py-1">
            <Home className="h-6 w-6 mb-1" />
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Calender className="h-6 w-6 mb-1" />
            <Link href="/questions">FAQ</Link>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Gallery className="h-6 w-6 mb-1" />
            <Link href="/registry">Registry</Link>
          </li>
          <li className="flex items-center  flex-col px-2 py-1">
            <Chat className="h-6 w-6 mb-1" />
            <a href="https://forms.gle/vwReUdcp1SSptmij9" target="_blank" rel="noopener noreferrer">RSVP</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;*/}

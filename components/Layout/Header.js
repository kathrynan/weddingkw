import React from 'react';
import Link from 'next/link';

const Header = () => { 
  return (
    <div className="hidden lg:block fixed top-0 right-0 left-0 bg-transparent px-8 z-20">
      <div className="max-w-screen-2xl w-full mx-auto grid grid-cols-2">
        <ul className="flex w-full text-sm lg:text-base text-white bg-dark-500 py-4 rounded-l-full rounded-r-full">
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer">
            <Link href="/wedding">Wedding</Link>
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer">
            <Link href="/ourstory">Our Story</Link>
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer">
            <a href="https://forms.gle/vwReUdcp1SSptmij9" target="_blank" rel="noopener noreferrer">RSVP</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

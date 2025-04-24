import "../styles/tailwind.css";
import React from 'react';
import Header from '../components/Layout/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

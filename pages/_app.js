import "../styles/tailwind.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Layout/Header';
import HomePage from './index';
import WeddingPage from './wedding';
import OurStoryPage from './ourstory';

function MyApp() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="./index" element={<HomePage />} />
        <Route path="./wedding" element={<WeddingPage />} />
        <Route path="./ourstory" element={<OurStoryPage />} />
      </Routes>
    </Router>
  );
}

export default MyApp;

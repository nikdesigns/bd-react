// WithNav.js (Stand-alone Functional Component)
import React from 'react';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <TopNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

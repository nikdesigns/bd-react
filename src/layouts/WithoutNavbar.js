// WithoutNav.js (Stand-alone Functional Component)
import React from 'react';
import { Outlet } from 'react-router';
import OverviewBreadcrum from '../components/dashboard/details/components/OverviewBreadcrum';
import SideNavbar from '../components/dashboard/SideNavbar';
import TopNavbarDashboard from '../components/dashboard/TopNavbarDashboard';

export default () => {
  return (
    <>
      <div className="bg-gray-50">
        <SideNavbar />
        <div className="md:pl-64 flex flex-col flex-1">
          <TopNavbarDashboard />
          <OverviewBreadcrum />
          <Outlet />
        </div>
      </div>
    </>
  );
};

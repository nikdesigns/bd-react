import { Routes, Route } from 'react-router-dom';

import WithNavbar from './layouts/WithNavbar';
import WithoutNavbar from './layouts/WithoutNavbar';

import DashboardHome from './pages/dashboard/DashboardHome';
import RepairCost from './components/dashboard/details/RepairCost';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import LoginModal from './components/LoginModal';
import AtaChapters from './components/dashboard/details/AtaChapters';
import AirlineFleets from './components/dashboard/details/AirlineFleets';
import ShopDetails from './components/dashboard/statistics/ShopDetails';
import WhoSearched from './components/dashboard/statistics/WhoSearched';
import Trend from './components/dashboard/statistics/Trend';

function App() {
  return (
    <div>
      {/* <LoginModal /> */}
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>

        <Route element={<WithoutNavbar />}>
          <Route path="/dashboard/overview" element={<DashboardHome />} />
          <Route
            path="/dashboard/details/repair-cost"
            element={<RepairCost />}
          />
          <Route
            path="/dashboard/details/ata-chapters"
            element={<AtaChapters />}
          />
          <Route
            path="/dashboard/details/airline-fleets"
            element={<AirlineFleets />}
          />
          <Route
            path="/dashboard/statistics/shop-details"
            element={<ShopDetails />}
          />
          <Route
            path="/dashboard/statistics/who-searched"
            element={<WhoSearched />}
          />
          <Route path="/dashboard/statistics/trend" element={<Trend />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

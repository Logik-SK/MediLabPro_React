import LogoutPopup from '../components/auth/LogoutPopup';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import LabBillingManagePage from '../pages/LabBillingManagePage';
import LabBillingPage from '../pages/LabBillingPage';

export const publicRoutes = [
  { path: '/', page: Home },
];

export const protectedRoutes = [
  { path: '/app', page: Dashboard },
  { path: '/dashboard', page: Dashboard },
  { path: '/billing/patient', page: LabBillingPage },
  { path: '/billing/manage', page: LabBillingManagePage },
  { path: '/logout', page: LogoutPopup  },
];

export { Layout };

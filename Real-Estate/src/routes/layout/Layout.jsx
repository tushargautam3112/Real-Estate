import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './layout.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

function RequireAuth() {
  const { currentUser } = useContext(AuthContext)
  if (!currentUser) {
    <Navigate to="/login" />
  }
  return (
    (!currentUser) ?
      <Navigate to="/login" /> :
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
  );
}
function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>

    </div>
  );
}

export { Layout, RequireAuth }
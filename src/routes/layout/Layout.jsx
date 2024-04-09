import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import './layout.css';

export default function Layout(){
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
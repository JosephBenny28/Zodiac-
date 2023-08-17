import React ,{useEffect} from 'react'
import Navs from './Navs'
import { Outlet, useLocation  } from 'react-router-dom'
import Footer from './Footer/Footer'

const Main = () => {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    if (!isLoginPage) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div>
      <Navs />
      <Outlet />
      <Footer />

    </div>
  )
}

export default Main
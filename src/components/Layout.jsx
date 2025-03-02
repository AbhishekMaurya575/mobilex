import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header1 from "../Pages/Header/Header1";
import Header2 from "../Pages/Header/Header2";
import React, { useState } from 'react';
import Newsletter from "../Pages/Home/Newsletter/Newsletter";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header1 isOpen={isOpen} toggleMenu={toggleMenu} />
      <Header2 isOpen={isOpen} toggleMenu={toggleMenu} />
      <Outlet />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default Layout;

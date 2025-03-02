import React from 'react';
import { NavLink } from 'react-router-dom';

const Header2 = ({ isOpen, toggleMenu }) => {

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu(); // Close the menu when a link is clicked on small screens
    }
  };

  return (
    <nav className="bg-blue-100 md:p-4 relative z-10">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="hidden md:flex space-x-6 text-black font-semibold text-center">
          {['Home', 'Catalog', 'Collections', 'Clearance', 'Contact Us'].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500 cursor-pointer"}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-left p-4 w-[50%] h-screen absolute z-50">
          <ul className="space-y-4">
            {['Home', 'Catalog', 'Collections', 'Clearance',  'Contact Us'].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}
                  className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500 cursor-pointer"}
                  onClick={handleLinkClick}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header2;

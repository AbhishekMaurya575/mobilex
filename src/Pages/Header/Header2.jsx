import React, { useState } from 'react';

const Header2 = ({ isOpen, toggleMenu }) => {


  return (
    <nav className="bg-blue-100 md:p-4   ">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="hidden md:flex space-x-6 text-black font-semibold text-center">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">Catalog</li>
          <li className="hover:text-yellow-500 cursor-pointer">Collections</li>
          <li className="hover:text-yellow-500 cursor-pointer">Clearance</li>
          <li className="hover:text-yellow-500 cursor-pointer">Sections All</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
        </ul>
      
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-left p-4 w-[50%] h-screen absolute">
          <ul className="space-y-4">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">Catalog</li>
            <li className="hover:text-yellow-500 cursor-pointer">Collections</li>
            <li className="hover:text-yellow-500 cursor-pointer">Clearance</li>
            <li className="hover:text-yellow-500 cursor-pointer">Sections All</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header2;

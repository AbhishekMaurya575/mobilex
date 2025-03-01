import React, { useState } from 'react'
import Logo from '../../components/Logo'
import { Search, ShoppingCart, Heart, User, X, Menu } from 'lucide-react'


const Header1 = ({ isOpen, toggleMenu }) =>  {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }

  return (
    <header className="flex items-center justify-between p-2 pt-0 bg-gray-100 shadow-md w-full">
           <div className="md:hidden text-black cursor-pointer " onClick={toggleMenu}>
           {!showSearch && (
  <Menu className="absolute text-black" size={28} aria-hidden="true" />
)}
        </div>
      <div className="sm:w-auto  ">
        <Logo />
      </div>
      <div className="flex items-center gap-6 mt-4">
        <div className={`relative ${showSearch ? '' : 'hidden'} md:block w-full md:w-auto`}> 
          <input
            type="text"
            placeholder="Search..."
            className="p-2 ml-2 border rounded-lg pl-10 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} aria-hidden="true" />
        </div>
        <nav className={`flex items-center gap-4 ${showSearch ? 'hidden' : ''} md:flex`}> 
          <a href="/wishlist" className="text-gray-700 hover:text-black hidden md:block" aria-label="Wishlist">Wishlist</a>
          <a href="/wishlist" className="text-gray-700 hover:text-black md:hidden" aria-label="Wishlist">
            <Heart size={20} aria-hidden="true" />
          </a>
          <a href="/account" className="text-gray-700 hover:text-black hidden md:block" aria-label="Account">Account</a>
          <a href="/account" className="text-gray-700 hover:text-black md:hidden" aria-label="Account">
            <User size={20} aria-hidden="true" />
          </a>
          <a href="/cart" className="text-gray-700 hover:text-black flex items-center gap-1 sm:flex" aria-label="Cart">
            <ShoppingCart size={20} aria-hidden="true" /> <span className="hidden sm:inline">Cart</span>
          </a>
        </nav>
        <div className="relative md:hidden" onClick={toggleSearch}>
          {showSearch ? <X className="text-gray-700" size={24} aria-hidden="true" /> : <Search className="text-gray-700" size={24} aria-hidden="true" />}
        </div>
      </div>
    </header>
  )
}

export default Header1

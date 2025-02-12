import React, { useEffect, useState } from 'react';

interface NavbarProps {
  screen: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}

const Navbar: React.FC<NavbarProps> = ({ screen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-end z-50 font-sans">
      {screen.isMobile && (
        <button
          className="text-black focus:outline-none left-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      )}

      <ul
        className={`${
          screen.isMobile
            ? `fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${
                menuOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : screen.isTablet
            ? 'md:flex space-x-6'
            : 'md:flex space-x-6'
        }`}
      >
        {screen.isMobile && (
          <li className="p-4 text-right">
            <button onClick={() => setMenuOpen(false)} className="text-xl">
              ✖
            </button>
          </li>
        )}
        <li>
          <a href="#" className="text-black hover:text-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-700">
            Feature
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-700">
            Service
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-700">
            Product
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray-700">
            About Us
          </a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-red-500 py-2 rounded">
            Login
          </a>
        </li>
      </ul>
      <a href="#" className="bg-red-500 text-white px-4 py-2 rounded">
        Sign Up
      </a>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  screen: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}

const Navbar: React.FC<NavbarProps> = ({ screen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log('menuopen', menuOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-end z-50">
      {screen.isMobile && (
        <button
          className="text-blackf focus:outline-none left-0 btn-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      <ul
        className={`${
          screen.isMobile
            ? `fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 text-[14px] font-[700] leading-[20px]${
                menuOpen ? ' translate-x-0' : ' -translate-x-full'
              }`
            : 'md:flex space-x-4 text-[14px] font-[600] leading-[20px]'
        } custom-ul`}
      >
        {screen.isMobile && (
          <li className="p-4 ml-[36px] mt-[36px]">
            <button onClick={() => setMenuOpen(false)} className="text-xl">
              <X size={28} />
            </button>
          </li>
        )}
        <li className="ml-[36px] menu-item">
          <a href="#" className="text-blackf hover:text-gray-700 font-sans">
            Home
          </a>
        </li>
        <li className="ml-[36px] menu-item">
          <a href="#" className="text-blackf hover:text-gray-700 font-sans">
            Feature
          </a>
        </li>
        <li className="ml-[36px] menu-item">
          <a href="#" className="text-blackf hover:text-gray-700 font-sans">
            Service
          </a>
        </li>
        <li className="ml-[36px] menu-item">
          <a href="#" className="text-blackf hover:text-gray-700 font-sans">
            Product
          </a>
        </li>
        <li className="ml-[36px] menu-item">
          <a href="#" className="text-blackf hover:text-gray-700 font-sans">
            About Us
          </a>
        </li>
        <li className="ml-[36px] menu-item font-sans">
          <a href="#" className="text-red-500 py-2 rounded">
            Login
          </a>
        </li>
      </ul>
      <a
        href="#"
        className={`${
          screen.isMobile
            ? ' bg-red-500 text-white btn-signup rounded-[5px]'
            : screen.isTablet
            ? ' bg-red-500 text-white btn-signup rounded-[5px]'
            : ' bg-red-500 text-white btn-signup rounded-[6px]'
        } text-[14px] font-[700] leading-[20px] w-[93px] h-[40px] py-[10px] px-[20px] font-sans`}
      >
        Sign Up
      </a>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-end z-50 font-inter">
      <ul className="md:flex space-x-6">
        <li>
          <a href="#" className="text-black hover:text-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:text-gray">
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
        <li>
          <a href="#" className="text-red-500 py-2 rounded">
            Login
          </a>
        </li>
        <li>
          <a href="#" className="bg-red-500 text-white px-4 py-2 rounded">
            Sign Up
          </a>
        </li>
      </ul>
      {/* <div className="md:flex space-x-4 ml-12">
        <a href="#" className="text-red-500 py-2 rounded px-4">
          Login
        </a>
        <a href="#" className="bg-red-500 text-white px-6 py-2 rounded">
          Sign Up
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;

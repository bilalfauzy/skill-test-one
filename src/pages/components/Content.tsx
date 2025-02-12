import React from 'react';

const Content = () => {
  return (
    <div className="relative h-screen flex items-center px-8 md:px-20 bg-cover bg-center">
      <div className="max-w-2xl text-left">
        <h1 className="text-5xl font-bold text-gray-900 font-inter">
          Lessons and insights <br />
          <span className="text-red-500">from 8 years</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-6 flex">
          <input
            type="text"
            placeholder="Find our courses"
            className="px-4 py-3 w-64 border border-gray-300 rounded-l focus:outline-none"
          />
          <button className="bg-red-500 text-white px-6 py-3 rounded-r">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;

import React from 'react';

interface ContentProps {
  screen: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}

const Content: React.FC<ContentProps> = ({ screen }) => {
  return (
    <div className="relative h-screen flex items-center bg-center">
      <div
        className={`${
          screen.isMobile
            ? 'text-center ml-[20px]'
            : screen.isTablet
            ? 'ml-[84px] text-left'
            : 'ml-[122px] text-left'
        } max-w-2xl`}
      >
        <h1
          className={`${
            screen.isMobile
              ? 'text-[42px] font-[700]'
              : screen.isTablet
              ? 'text-[56px] font-[700]'
              : 'text-[60px] font-[700]'
          } text-gray-900 font-sans`}
        >
          Lessons and insights <br />
          <span className="text-red-500">from 8 years</span>
        </h1>
        <p
          className={`${
            screen.isMobile
              ? 'text-[12px] font-[400]'
              : screen.isTablet
              ? 'text-[16px] font-[400]'
              : 'text-[20px] font-[400]'
          } font-sans mt-4 text-gray-600`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco. " "
        </p>
        <div
          className={`${
            screen.isMobile
              ? 'w-[335px] h-[59.85px]'
              : screen.isTablet
              ? 'w-[422px] h-[73px]'
              : 'w-[502px] h-[73px]'
          } mt-6 flex items-center rounded-[8px] bg-white`}
        >
          <input
            type="text"
            placeholder="Find our courses"
            className={`px-4 py-3 h-[73px]${
              screen.isMobile
                ? 'text-[14px] font-[400]'
                : screen.isTablet
                ? 'text-[16px] font-[400]'
                : 'text-[16px] font-[400]'
            } border-gray-300 focus:outline-none`}
          />
          <button
            className={`bg-red-500 text-white px-6 py-3 items-center rounded-[8px] justify-items-end ${
              screen.isMobile
                ? 'w-[90.7px] mt-2 text-[14px] font-[700]'
                : screen.isTablet
                ? 'w-[114px] h-[61px] text-[14px] font-[700]'
                : 'w-[136px] h-[61px] text-[16px] font-[700]'
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;

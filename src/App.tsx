import React, { useState } from "react";
import IMAGES, { logo, NAVIGATION, ICON } from "const";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container px-4 mx-auto">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row ">
          <div className="flex flex-row items-center justify-between py-6">
            <div className="flex items-center">
              <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
              <a
                href="/#"
                className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                HOA CUA
              </a>
            </div>

            <button
              onClick={toggle}
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {!isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
          >
            {NAVIGATION.map((item) => {
              return (
                <a
                  key={item.id}
                  href="/#"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  // className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  {item.name}
                </a>
              );
            })}
            {/* <a
              href="/#"
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Blog
            </a>
            <a
              href="/#"
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Portfolio
            </a>
            <a
              href="/#"
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              About
            </a>
            <a
              href="/#"
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Contact
            </a> */}
          </nav>
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-stretch content-start w-full m-auto">
        {IMAGES.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex-auto m-1 overflow-hidden xl:w-80 xl:h-80 md:w-48 lg:w-48 md:h-48 lg:h-48"
            >
              <img
                className="object-cover w-full h-full transition duration-200 ease-in transform rounded shadow-md delay-0 hover:scale-150"
                src={item.src}
                alt="my product"
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between py-8">
        <div className="flex">
          {ICON.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt="icon"
              className="object-cover w-5 h-5 m-3"
            />
          ))}
        </div>
        <div>© 2021 by Hoa Cua.</div>
      </div>
    </div>
  );
}

export default App;

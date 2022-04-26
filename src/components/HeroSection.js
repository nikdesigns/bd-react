import React from 'react';

export default function HeroSection() {
  return (
    <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-12 single-slider-item">
      <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://145bigdata.com/assets/images/main-banner-bg3.jpg"
            alt="home page image"
          />
        </div>
        <div className="relative px-4 py-32 sm:px-6 sm:py-12 lg:py-16 lg:px-8 my-8">
          <h1 className="text-center text-2xl tracking-normal sm:text-3xl lg:text-4xl">
            <span className="block text-white text-opacity-4 font-Inter tracking-tight">
              To Repair, or Not to Repair, that is the
            </span>
            <span className="block text-white text-opacity-4 font-bold font-Inter tracking-tighter">
              question.
            </span>
          </h1>
          {/* <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-800 sm:max-w-3xl">
            Receive teardown notifications and <br />
            purchase spare parts the minute they’re available .
          </p> */}
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-bdOrange to-orange-500 hover:from-indigo-700 hover:to-indigo-700 sm:px-8"
              >
                Let's Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 my-10 dark:border-gray-700" />
    </main>
  );
}

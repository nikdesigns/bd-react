import React from 'react';
import {
  PaperAirplaneIcon,
  ViewGridIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  AdjustmentsIcon,
  ChartSquareBarIcon,
  XIcon,
} from '@heroicons/react/outline';

export default function SideNavbar() {
  return (
    <div>
      {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
      <div
        className="fixed inset-0 flex z-40 md:hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        ></div>

        {/* <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    --> */}
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-bdNavy">
          {/* <!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close sidebar</span>
              {/* <!-- Heroicon name: outline/x --> */}
              <XIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-shrink-0 flex items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://www.145bigdata.com/images/big_data_logo.png"
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              <div className="space-y-1">
                {/* <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" --> */}
                <a
                  href="#"
                  className="bg-bdLightNavy text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/* <!-- Heroicon name: outline/home --> */}
                  <ViewGridIcon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  Overview
                </a>

                <button
                  type="button"
                  className="text-indigo-100 hover:bg-bdLightNavy hover:text-white group w-full flex items-center pl-2 pr-1 py-2 text-left font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-controls="sub-menu-1"
                  aria-expanded="false"
                >
                  <PaperAirplaneIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  <span className="flex-1"> Details </span>
                  {/* <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" --> */}
                  <ChevronDownIcon className="text-indigo-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" />
                </button>
                <a
                  href="#"
                  className="group flex items-center pl-8 py-2 font-medium text-indigo-100 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                >
                  <span className="truncate"> Repair Cost </span>
                </a>
                <a
                  href="#"
                  className="group flex items-center pl-8 py-2 font-medium text-indigo-100 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                >
                  <span className="truncate"> ATA Chapter </span>
                </a>
                <a
                  href="#"
                  className="group flex items-center pl-8 py-2 font-medium text-indigo-100 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                >
                  <span className="truncate"> Airline Fleets </span>
                </a>

                <button
                  type="button"
                  className="text-indigo-100 hover:bg-bdLightNavy hover:text-white group w-full flex items-center pl-2 pr-1 py-2 text-left font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-controls="sub-menu-1"
                  aria-expanded="false"
                >
                  <AdjustmentsIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  <span className="flex-1"> Statistics </span>
                  {/* <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" --> */}
                  <ChevronRightIcon className="text-indigo-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" />
                </button>

                <button
                  type="button"
                  className="text-indigo-100 hover:bg-bdLightNavy hover:text-white group w-full flex items-center pl-2 pr-1 py-2 text-left font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-controls="sub-menu-1"
                  aria-expanded="false"
                >
                  <ChartSquareBarIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  <span className="flex-1"> Report </span>
                  {/* <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" --> */}
                  <ChevronRightIcon className="text-indigo-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" />
                </button>
              </div>

              <div className="space-y-4">
                <h3
                  className="px-3 text-sm mt-12 font-semibold text-indigo-200 uppercase tracking-wider"
                  id="projects-headline"
                >
                  Projects
                </h3>
                <div
                  className="space-y-0"
                  role="group"
                  aria-labelledby="projects-headline"
                >
                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> The145.com </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> 145 Big Data </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> TearsDown.aero </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> Top Shop Awards </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
        </div>
      </div>
      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
        <div className="flex flex-col flex-grow pt-5 bg-bdNavy overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-auto w-28"
              src="https://www.145bigdata.com/images/big_data_logo.png"
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 space-y-8 pb-4 ">
              <div className="space-y-1">
                {/* <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" --> */}
                <a
                  href="#"
                  className="bg-bdLightNavy text-indigo-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  {/* <!-- Heroicon name: outline/home --> */}
                  <ViewGridIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  Overview
                </a>

                <button
                  type="button"
                  className="bg-bdNavy text-indigo-300 hover:bg-bdLightNavy hover:text-white group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-controls="sub-menu-1"
                  aria-expanded="false"
                >
                  <PaperAirplaneIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  <span className="flex-1"> Details </span>
                  {/* <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" --> */}
                  <ChevronDownIcon className="text-indigo-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" />
                </button>
                <a
                  href="#"
                  className="group flex items-center pl-8 py-2 text-sm font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                >
                  <span className="truncate"> Repair Cost </span>
                </a>
                <a
                  href="#"
                  className="group flex items-center pl-8 py-2 text-sm font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                >
                  <span className="truncate"> ATA Chapter </span>
                </a>
                <a
                  href="#"
                  className="group flex items-center pl-8 py-2 text-sm font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                >
                  <span className="truncate"> Airline Fleets </span>
                </a>

                <button
                  type="button"
                  className="bg-bdNavy text-indigo-300 hover:bg-bdLightNavy hover:text-white group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-controls="sub-menu-1"
                  aria-expanded="false"
                >
                  <AdjustmentsIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  <span className="flex-1"> Statistics </span>
                  {/* <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" --> */}
                  <ChevronRightIcon className="text-indigo-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" />
                </button>

                <button
                  type="button"
                  className="bg-bdNavy text-indigo-300 hover:bg-bdLightNavy hover:text-white group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-controls="sub-menu-1"
                  aria-expanded="false"
                >
                  <ChartSquareBarIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" />
                  <span className="flex-1"> Reports </span>
                  {/* <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" --> */}
                  <ChevronRightIcon className="text-indigo-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" />
                </button>
              </div>

              <div className="space-y-4">
                <h3
                  className="px-3 text-xs font-semibold text-indigo-200 uppercase tracking-wider"
                  id="projects-headline"
                >
                  Projects
                </h3>
                <div
                  className="space-y-0"
                  role="group"
                  aria-labelledby="projects-headline"
                >
                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> The145.com </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> 145 Big Data </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> TearsDown.aero </span>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-indigo-300 rounded-md hover:text-indigo-100 hover:bg-bdLightNavy"
                  >
                    <span className="truncate"> Top Shop Awards </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

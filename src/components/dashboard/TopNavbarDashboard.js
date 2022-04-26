import React from 'react';
import { MenuAlt2Icon, BellIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';

export default function TopNavbarDashboard() {
  return (
    <div>
      <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          {/* <!-- Heroicon name: outline/menu-alt-2 --> */}
          <MenuAlt2Icon className="h-6 w-6" />
        </button>
        <div className="flex-1 px-4 flex justify-between">
          <div className="flex-1 flex">
            <form className="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  {/* <!-- Heroicon name: solid/search --> */}
                  <SearchIcon className="h-5 w-5" />
                </div>
                <input
                  id="search-field"
                  className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search for a part number or description..."
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <BellIcon className="h-6 w-6" />
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
              {/* <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>

                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

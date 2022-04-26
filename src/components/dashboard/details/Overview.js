import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  PaperAirplaneIcon,
  SearchIcon,
  CogIcon,
  ClipboardListIcon,
  XCircleIcon,
  ChevronDownIcon,
  ArrowUpIcon,
} from '@heroicons/react/solid';
import OverviewChart from './components/OverviewChart';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Overview() {
  return (
    <div>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* <!-- Replace with your content --> */}
            <div>
              <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        59500000-1
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      Dual DME Indicator
                    </p>
                  </div>
                  <SearchIcon className="h-6 w-6 text-bdLightNavy" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Capability Check:
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      Exists in my capabilities
                    </p>
                  </div>
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Aircraft Applicability
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      707, 727, 747
                    </p>
                  </div>
                  <PaperAirplaneIcon className="h-6 w-6 text-rose-600" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Shops
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      No. of shops
                    </p>
                  </div>
                  <span className="text-xl text-bdOrange">23</span>
                </div>
              </dl>
            </div>

            <div>
              <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Manufacture:
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">Moog</p>
                  </div>
                  <CogIcon className="h-6 w-6 text-teal-500" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        ATA Chapter
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      34,34-55-04
                    </p>
                  </div>
                  <ClipboardListIcon className="h-6 w-6 text-cyan-600" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        PMA Availability:
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">No</p>
                  </div>
                  <XCircleIcon className="h-6 w-6 text-red-500" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Shops
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      No. of shops
                    </p>
                  </div>
                  <span className="text-xl text-bdOrange">23</span>
                </div>
              </dl>
            </div>

            <div className="py-4">
              <ul
                role="list"
                className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2"
              >
                <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="bg-white px-4 py-5  sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Searches & RFQ's Last 12 Months
                        </h3>
                      </div>
                      {/* <div class="ml-4 mt-2 flex-shrink-0">
                        <button
                          type="button"
                          class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Create new job
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <OverviewChart />
                  </div>
                </li>
                <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="bg-white px-4 py-5  sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Repair Cost
                        </h3>
                      </div>
                      {/* <div class="ml-4 mt-2 flex-shrink-0">
                        <button
                          type="button"
                          class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Create new job
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                          >
                            Service
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Low
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Mid
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Avg
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            High
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            Overhaul
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            2308
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            3646
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            2907
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            4983
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            Repair
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            1800
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            1800
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            2315
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            1800
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            Test
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            400
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            400
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            355
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            400
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Aircraft
                        </h3>
                      </div>
                      <div className="ml-4 mt-2 flex-shrink-0">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                              Boeing 747
                              <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      Account settings
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      Support
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      License
                                    </a>
                                  )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        type="submit"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                          'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                      >
                                        Sign out
                                      </button>
                                    )}
                                  </Menu.Item>
                                </form>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Activity
                        </h3>
                      </div>
                      <div className="ml-4 mt-2 flex-shrink-0">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                              This Month
                              <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      Account settings
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      Support
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                      )}
                                    >
                                      License
                                    </a>
                                  )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        type="submit"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                          'block w-full text-left px-4 py-2 text-sm'
                                        )}
                                      >
                                        Sign out
                                      </button>
                                    )}
                                  </Menu.Item>
                                </form>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                  <ul role="list" className="divide-y divide-gray-200">
                    <li className="relative bg-white py-2 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <div className="px-4 py-2 sm:px-6">
                        <dt className="text-sm font-normal text-bdText">
                          Total Searches
                        </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                          <div className="flex items-baseline text-base font-semibold text-bdLightNavy">
                            753
                            <span className="ml-2 text-sm font-medium text-gray-500">
                              {' '}
                              from 515{' '}
                            </span>
                          </div>

                          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                            {/* <!-- Heroicon name: solid/arrow-sm-up --> */}
                            <ArrowUpIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-4 text-green-500" />
                            <span className="sr-only"> Increased by </span>
                            46.21%
                          </div>
                        </dd>
                      </div>
                    </li>
                    <li className="relative bg-white py-2 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <div className="px-4 py-2 sm:px-6">
                        <dt className="text-sm font-normal text-bdText">
                          Average Overhaul Cost
                        </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                          <div className="flex items-baseline text-base font-semibold text-bdLightNavy">
                            $2907
                            <span className="ml-2 text-sm font-medium text-gray-500">
                              {' '}
                              from $3271{' '}
                            </span>
                          </div>

                          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                            {/* <!-- Heroicon name: solid/arrow-sm-up --> */}
                            <ArrowUpIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-4 text-red-500" />
                            <span className="sr-only"> Increased by </span>
                            -11.13%
                          </div>
                        </dd>
                      </div>
                    </li>
                    <li className="relative bg-white py-2 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <div className="px-4 py-2 sm:px-6">
                        <dt className="text-sm font-normal text-bdText">
                          Average Repair Cost
                        </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                          <div className="flex items-baseline text-base font-semibold text-bdLightNavy">
                            $2315
                            <span className="ml-2 text-sm font-medium text-gray-500">
                              {' '}
                              from $2555{' '}
                            </span>
                          </div>

                          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                            {/* <!-- Heroicon name: solid/arrow-sm-up --> */}
                            <ArrowUpIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-4 text-red-500" />
                            <span className="sr-only"> Increased by </span>
                            -11.13%
                          </div>
                        </dd>
                      </div>
                    </li>
                    <li className="relative bg-white py-2 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <div className="px-4 py-2 sm:px-6">
                        <dt className="text-sm font-normal text-bdText">
                          Average Test Cost
                        </dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                          <div className="flex items-baseline text-base font-semibold text-bdLightNavy">
                            $2907
                            <span className="ml-2 text-sm font-medium text-gray-500">
                              {' '}
                              from $3271{' '}
                            </span>
                          </div>

                          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                            {/* <!-- Heroicon name: solid/arrow-sm-up --> */}
                            <ArrowUpIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-3 w-4 text-red-500" />
                            <span className="sr-only"> Increased by </span>
                            -11.13%
                          </div>
                        </dd>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- /End replace --> */}

            <div className="py-4">
              <ul
                role="list"
                className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1"
              >
                <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="bg-white px-4 py-5  sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Shops Available
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"></div>
                </li>
                <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                  <div className="bg-white px-4 py-5  sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Repair Cost
                        </h3>
                      </div>
                      {/* <div class="ml-4 mt-2 flex-shrink-0">
                        <button
                          type="button"
                          class="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Create new job
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                          >
                            Service
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Low
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Mid
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            Avg
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                          >
                            High
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            Overhaul
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            2308
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            3646
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            2907
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            4983
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            Repair
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            1800
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            1800
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            2315
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            1800
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                            Test
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            400
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            400
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            355
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                            400
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

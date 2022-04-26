import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  UserIcon,
  PaperAirplaneIcon,
  SearchIcon,
  ChevronDownIcon,
  DocumentReportIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function RepairCost() {
  return (
    <div>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Repair Cost
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* <!-- Replace with your content --> */}
            <div>
              <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <h3 className="text-bdLightNavy text-sm font-medium truncate py-2">
                      P/N:
                    </h3>
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
                    <h3 className="text-bdLightNavy text-sm font-medium truncate py-2">
                      OEM:
                    </h3>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Manufacture:
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">MOOG</p>
                  </div>
                  <LocationMarkerIcon className="h-6 w-6 text-bdLightNavy" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <h3 className="text-bdLightNavy text-sm font-medium truncate py-2">
                      ATA:
                    </h3>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Chapters
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      34,34-55-04
                    </p>
                  </div>
                  <DocumentReportIcon className="h-6 w-6 text-bdLightNavy" />
                </div>

                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <h3 className="text-bdLightNavy text-sm font-medium truncate py-2">
                      A/C:
                    </h3>
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">
                        Aircraft
                      </h3>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">
                      707, 727, 747
                    </p>
                  </div>
                  <PaperAirplaneIcon className="h-6 w-6 text-bdLightNavy" />
                </div>
              </dl>
            </div>

            <div className="py-4">
              <ul
                role="list"
                className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3"
              >
                <li className="col-span-1 bg-white rounded-lg shadow">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Overhaul Average Cost
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6  rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-bdLightNavy rounded-md p-3">
                        <span className="text-white">OH</span>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Two Year Trend
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        -11.13%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                        <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" />
                        <span className="sr-only"> Increased by </span>
                        $2907 vs $3271
                      </p>
                    </dd>
                  </div>
                </li>
                <li className="col-span-1 bg-white rounded-lg shadow">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Repair Average Cost
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6  rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-bdLightNavy rounded-md p-3">
                        <span className="text-white">RP</span>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Two Year Trend
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        -9.39%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                        <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" />
                        <span className="sr-only"> Increased by </span>
                        $2315 vs $2555
                      </p>
                    </dd>
                  </div>
                </li>
                <li className="col-span-1 bg-white rounded-lg shadow">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Test Average Cost
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6  rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-bdLightNavy rounded-md p-3">
                        <span className="text-white">TS</span>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Two Year Trend
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        -17.25%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                        <span className="sr-only"> Increased by </span>
                        $355 vs $429
                      </p>
                    </dd>
                  </div>
                </li>

                <li className="col-span-1 bg-white rounded-lg shadow">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Overhaul Price 10 Years Trend
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6  rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-bdLightNavy rounded-md p-3">
                        <span className="text-white">TS</span>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Two Year Trend
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        -17.25%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                        <span className="sr-only"> Increased by </span>
                        $355 vs $429
                      </p>
                    </dd>
                  </div>
                </li>

                <li className="col-span-1 bg-white rounded-lg shadow">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Repair Price 10 Years Trend
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6  rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-bdLightNavy rounded-md p-3">
                        <span className="text-white">TS</span>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Two Year Trend
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        -17.25%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                        <span className="sr-only"> Increased by </span>
                        $355 vs $429
                      </p>
                    </dd>
                  </div>
                </li>

                <li className="col-span-1 bg-white rounded-lg shadow">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          Test Price 10 Years Trend
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6  rounded-lg overflow-hidden">
                    <dt>
                      <div className="absolute bg-bdLightNavy rounded-md p-3">
                        <span className="text-white">TS</span>
                      </div>
                      <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                        Two Year Trend
                      </p>
                    </dt>
                    <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">
                        -17.25%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                        <span className="sr-only"> Increased by </span>
                        $355 vs $429
                      </p>
                    </dd>
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

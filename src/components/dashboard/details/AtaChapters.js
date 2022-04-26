import React from 'react';
import {
  PaperAirplaneIcon,
  SearchIcon,
  DocumentReportIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

export default function AtaChapters() {
  return (
    <div>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              ATA Chapters
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
                className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1"
              >
                <li className="col-span-1 bg-white rounded-lg shadow">
                  <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                      <div className="ml-4 mt-2">
                        <h3 className="text-sm leading-6 font-medium text-gray-900">
                          ATA Chapters
                        </h3>
                      </div>

                      <div>
                        <label htmlFor="search-ata" className="sr-only">
                          Search
                        </label>
                        <input
                          type="text"
                          name="search-ata"
                          id="search-ata"
                          className="shadow-sm focus:ring-bdLightNavy border focus:border-bdLightNavy block w-full sm:text-sm p-2 border-gray-200 rounded-md"
                          placeholder="Search..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-white sm:pt-2 rounded-lg overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            ATA Number
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            ATA Chapter Name
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan="2"
                            scope="colgroup"
                            className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-bdNavy sm:px-6"
                          >
                            AIRFRAME SYSTEMS
                          </th>
                        </tr>

                        <tr className="border-t border-gray-300">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                            ATA 20
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Standard Practices - Airframe
                          </td>
                        </tr>

                        <tr className="border-t border-gray-200">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                            ATA 21
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Air Conditioning
                          </td>
                        </tr>

                        <tr className="border-t border-gray-200">
                          <th
                            colSpan="2"
                            scope="colgroup"
                            className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-bdNavy sm:px-6"
                          >
                            POWER PLANT
                          </th>
                        </tr>
                        <tr className="border-t border-gray-300">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                            ATA 71
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Power Plant
                          </td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                            ATA 72
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            Engine
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

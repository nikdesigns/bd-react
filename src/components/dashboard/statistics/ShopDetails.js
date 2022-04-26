import React from 'react';
import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';
import {
  PaperAirplaneIcon,
  SearchIcon,
  DocumentReportIcon,
} from '@heroicons/react/outline';

const applications = [
  {
    applicant: {
      name: 'Summit Aerospace, Inc.',
      email: 'sales@summitmro.com',
      location: 'NV, United States',
      imageUrl:
        'https://www.the145.com/FacilityImages/logo/MyFacilityImage_2483_1482330357.jpg',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Cross-Check Aviation',
      email: 'service@crosscheckaviation.com',
      location: 'Fl, United States',
      imageUrl: 'https://www.the145.com/FacilityImages/logo/cross-check.jpg',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Precision Aero Technology',
      email: 'mstemwedel@pat-pag.com',
      location: 'Fl, United States',
      imageUrl:
        'https://www.the145.com/FacilityImages/logo/MyFacilityImage_2481_1527020220.jpg',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
];

export default function ShopDetails() {
  return (
    <div>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Shop Details
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
                          Shop Details
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
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                      <ul role="list" className="divide-y divide-gray-200">
                        {applications.map((application) => (
                          <li key={application.applicant.email}>
                            <a
                              href={application.href}
                              className="block hover:bg-gray-50"
                            >
                              <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="min-w-0 flex-1 flex items-center">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-12 w-12 rounded-full"
                                      src={application.applicant.imageUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>
                                      <p className="text-sm font-medium text-bdLightNavy truncate">
                                        {application.applicant.name}
                                      </p>
                                      <p className="mt-2 flex items-center text-sm text-gray-500">
                                        <div className="sm:flex">
                                          <p className="flex items-center text-sm text-gray-500 font-light">
                                            <MailIcon
                                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            {application.applicant.email}
                                          </p>
                                          <p className="mt-2 flex items-center text-sm text-bdText font-light sm:mt-0 sm:ml-6">
                                            <LocationMarkerIcon
                                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            {application.applicant.location}
                                          </p>
                                        </div>
                                      </p>
                                    </div>
                                    <div className="hidden md:block">
                                      <div>
                                        <p className="text-sm text-gray-500">
                                          MRO Capabilities:{' '}
                                          <span className="text-gray-800">
                                            {/* {application.dateFull} */}
                                            24545
                                          </span>
                                        </p>
                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                          <CheckCircleIcon
                                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                            aria-hidden="true"
                                          />
                                          {application.stage}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <ChevronRightIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
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

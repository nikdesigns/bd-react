import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

export default function Pricing() {
  return (
    <div className="bg-bdNavy">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Pricing
            </h2>
            <p className="text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              Flexible pricing to suit{' '}
              <span className="text-bdOrange"> every budget</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-bdNavy"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-bdLightNavy"
                      id="tier-standard"
                    >
                      Search
                    </h3>
                    <p className="mt-5 text-lg text-gray-800">
                      Unique Part Searches
                    </p>
                  </div>
                  {/* <div className="mt-4 flex items-baseline text-6xl font-extrabold text-bdNavy">
                    $49
                    <span className="ml-1 text-2xl font-medium text-bdText">
                      {' '}
                      /mo{' '}
                    </span>
                  </div> */}

                  <div>
                    <div className="flex items-center justify-between mt-6">
                      <h2 className="text-sm font-medium text-gray-900">
                        Search Quota
                      </h2>
                      <a
                        href="#"
                        className="text-sm font-medium text-bdLightNavy hover:text-indigo-500"
                      >
                        Search reset's every month.
                      </a>
                    </div>

                    <fieldset className="mt-2">
                      <legend className="sr-only">
                        Choose a memory option
                      </legend>
                      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3">
                        {/* <!--
        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
        Active: "ring-2 ring-offset-2 ring-indigo-500"
        Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
      --> */}
                        <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                          <input
                            type="radio"
                            name="memory-option"
                            value="4 GB"
                            className="sr-only"
                            aria-labelledby="memory-option-0-label"
                          />
                          <p id="memory-option-0-label text-xs">1000/mo.</p>
                        </label>

                        {/* <!--
        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
        Active: "ring-2 ring-offset-2 ring-indigo-500"
        Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
      --> */}
                        <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                          <input
                            type="radio"
                            name="memory-option"
                            value="8 GB"
                            className="sr-only"
                            aria-labelledby="memory-option-1-label"
                          />
                          <p id="memory-option-1-label">2500/mo.</p>
                        </label>

                        {/* <!--
        In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
        Active: "ring-2 ring-offset-2 ring-indigo-500"
        Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
      --> */}
                        <label className="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer focus:outline-none">
                          <input
                            type="radio"
                            name="memory-option"
                            value="16 GB"
                            className="sr-only"
                            aria-labelledby="memory-option-2-label"
                          />
                          <p id="memory-option-2-label">5000/mo.</p>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <fieldset>
                    <legend className="sr-only">Server size</legend>
                    <div className="space-y-4">
                      {/* <!--
      Checked: "border-transparent", Not Checked: "border-gray-300"
      Active: "border-indigo-500 ring-2 ring-indigo-500"
    --> */}
                      <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                        <input
                          type="radio"
                          name="server-size"
                          value="Business"
                          className="sr-only"
                          aria-labelledby="server-size-2-label"
                          aria-describedby="server-size-2-description-0 server-size-2-description-1"
                        />
                        <div className="flex items-center">
                          <div className="text-sm">
                            <p
                              id="server-size-2-label"
                              className="font-medium text-gray-900"
                            >
                              1 Year Access
                            </p>
                            <div
                              id="server-size-2-description-0"
                              className="text-gray-500"
                            >
                              <p className="sm:inline">
                                1000 searches per month, Billed annually
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="server-size-2-description-1"
                          className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                        >
                          <div className="font-medium text-gray-900">$399</div>
                          <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
                        </div>
                        {/* <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-500", Not Checked: "border-transparent"
      --> */}
                        <div
                          className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </label>

                      {/* <!--
      Checked: "border-transparent", Not Checked: "border-gray-300"
      Active: "border-indigo-500 ring-2 ring-indigo-500"
    --> */}
                      <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                        <input
                          type="radio"
                          name="server-size"
                          value="Enterprise"
                          className="sr-only"
                          aria-labelledby="server-size-3-label"
                          aria-describedby="server-size-3-description-0 server-size-3-description-1"
                        />
                        <div className="flex items-center">
                          <div className="text-sm">
                            <p
                              id="server-size-3-label"
                              className="font-medium text-gray-900"
                            >
                              1 Month Access
                            </p>
                            <div
                              id="server-size-3-description-0"
                              className="text-gray-500"
                            >
                              <p className="sm:inline">1000 searches</p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="server-size-3-description-1"
                          className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                        >
                          <div className="font-medium text-gray-900">$599</div>
                          <div className="ml-1 text-gray-500 sm:ml-0">/mo</div>
                        </div>
                        {/* <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-500", Not Checked: "border-transparent"
      --> */}
                        <div
                          className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </label>
                    </div>
                  </fieldset>

                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bdLightNavy hover:bg-bdNavy"
                      aria-describedby="tier-standard"
                    >
                      {' '}
                      Buy Now{' '}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-bdLightNavy"
                      id="tier-standard"
                    >
                      Intelligence
                    </h3>
                    <p className="mt-5 text-lg text-gray-800">
                      Intelligence Report
                    </p>
                  </div>
                  {/* <div className="mt-4 flex items-baseline text-6xl font-extrabold text-bdNavy">
                    $49
                    <span className="ml-1 text-2xl font-medium text-bdText">
                      {' '}
                      /mo{' '}
                    </span>
                  </div> */}
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <fieldset>
                    <legend className="sr-only">Server size</legend>
                    <div className="space-y-4">
                      {/* <!--
      Checked: "border-transparent", Not Checked: "border-gray-300"
      Active: "border-indigo-500 ring-2 ring-indigo-500"
    --> */}
                      <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                        <input
                          type="radio"
                          name="server-size"
                          value="Business"
                          className="sr-only"
                          aria-labelledby="server-size-2-label"
                          aria-describedby="server-size-2-description-0 server-size-2-description-1"
                        />
                        <div className="flex items-center">
                          <div className="text-sm">
                            <p
                              id="server-size-2-label"
                              className="font-medium text-gray-900"
                            >
                              Top 100 on The 145
                            </p>
                            <div
                              id="server-size-2-description-0"
                              className="text-gray-500"
                            >
                              <p className="sm:inline">Quantity: 1</p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="server-size-2-description-1"
                          className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                        >
                          <div className="font-medium text-gray-900">
                            $699.00
                          </div>
                        </div>
                        {/* <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-500", Not Checked: "border-transparent"
      --> */}
                        <div
                          className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </label>

                      {/* <!--
      Checked: "border-transparent", Not Checked: "border-gray-300"
      Active: "border-indigo-500 ring-2 ring-indigo-500"
    --> */}
                      <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                        <input
                          type="radio"
                          name="server-size"
                          value="Enterprise"
                          className="sr-only"
                          aria-labelledby="server-size-3-label"
                          aria-describedby="server-size-3-description-0 server-size-3-description-1"
                        />
                        <div className="flex items-center">
                          <div className="text-sm">
                            <p
                              id="server-size-3-label"
                              className="font-medium text-gray-900"
                            >
                              Top 200 on The 145
                            </p>
                            <div
                              id="server-size-3-description-0"
                              className="text-gray-500"
                            >
                              <p className="sm:inline">Quantity: 1</p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="server-size-3-description-1"
                          className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                        >
                          <div className="font-medium text-gray-900">
                            $1,299.00
                          </div>
                        </div>
                        {/* <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-500", Not Checked: "border-transparent"
      --> */}
                        <div
                          className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </label>
                      {/* <!--
      Checked: "border-transparent", Not Checked: "border-gray-300"
      Active: "border-indigo-500 ring-2 ring-indigo-500"
    --> */}
                      <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                        <input
                          type="radio"
                          name="server-size"
                          value="Business"
                          className="sr-only"
                          aria-labelledby="server-size-2-label"
                          aria-describedby="server-size-2-description-0 server-size-2-description-1"
                        />
                        <div className="flex items-center">
                          <div className="text-sm">
                            <p
                              id="server-size-2-label"
                              className="font-medium text-gray-900"
                            >
                              Top 1000 on The 145
                            </p>
                            <div
                              id="server-size-2-description-0"
                              className="text-gray-500"
                            >
                              <p className="sm:inline">Quantity: 1</p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="server-size-2-description-1"
                          className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                        >
                          <div className="font-medium text-gray-900">
                            $4,999.00
                          </div>
                        </div>
                        {/* <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-500", Not Checked: "border-transparent"
      --> */}
                        <div
                          className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </label>
                      {/* <!--
      Checked: "border-transparent", Not Checked: "border-gray-300"
      Active: "border-indigo-500 ring-2 ring-indigo-500"
    --> */}
                      <label className="relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none">
                        <input
                          type="radio"
                          name="server-size"
                          value="Business"
                          className="sr-only"
                          aria-labelledby="server-size-2-label"
                          aria-describedby="server-size-2-description-0 server-size-2-description-1"
                        />
                        <div className="flex items-center">
                          <div className="text-sm">
                            <p
                              id="server-size-2-label"
                              className="font-medium text-gray-900"
                            >
                              Top 100 Custom Report
                            </p>
                            <div
                              id="server-size-2-description-0"
                              className="text-gray-500"
                            >
                              <p className="sm:inline">Quantity: 1</p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="server-size-2-description-1"
                          className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                        >
                          <div className="font-medium text-gray-900">
                            $699.00
                          </div>
                        </div>
                        {/* <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-500", Not Checked: "border-transparent"
      --> */}
                        <div
                          className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                          aria-hidden="true"
                        ></div>
                      </label>
                    </div>
                  </fieldset>

                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bdLightNavy hover:bg-bdNavy"
                      aria-describedby="tier-standard"
                    >
                      {' '}
                      Buy Now{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Discounted
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Get full access to all of standard license features for solo
                  projects that make less than $20k gross revenue for{' '}
                  <span className="font-semibold text-gray-900">$29</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  {' '}
                  Buy Discounted License{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

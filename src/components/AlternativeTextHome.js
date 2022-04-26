import React from 'react';
import {
  PresentationChartLineIcon,
  DocumentReportIcon,
} from '@heroicons/react/outline';

export default function AlternativeTextHome() {
  return (
    <div className="relative bg-white pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-bdLightNavy">
                  <PresentationChartLineIcon className="h-6 w-6 text-white" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-light tracking-tight text-bdNavy">
                  How competitive are my capabilities?
                </h2>
                <p className="mt-4 text-lg text-bdText">
                  Repair centers spend tens of millions of dollars each year on
                  capability development. Choosing the right parts to repair is
                  expensive and can make or break your business. So, to help
                  shops reduce risks and research costs, The 145 has come up
                  with Big Data, a system that helps you accurately analyze all
                  facets of your existing repair capability and offer
                  suggestions about other parts you should consider repairing.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-bdOrange hover:bg-indigo-700"
                  >
                    {' '}
                    Get started{' '}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-bdText">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://145bigdata.com/images/image02.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-bdLightNavy">
                  <DocumentReportIcon className="h-6 w-6 text-white" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-light tracking-tight text-bdNavy">
                  Analyze Easier. Invest Wiser. Succeed Faster.
                </h2>
                <p className="mt-4 text-lg text-bdText">
                  Gain valuable insights into the performance of millions of
                  repair capabilities. Select your search criteria, then review
                  the search results to identify critical trends for specific
                  part numbers. Evaluate the competition, price your repair
                  capabilities accordingly and then set your mind at ease
                  knowing you're investing in the best possible parts to repair.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-bdOrange hover:bg-indigo-700"
                  >
                    {' '}
                    Get started{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://145bigdata.com/images/image01.png"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

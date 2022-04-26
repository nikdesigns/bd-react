import React from 'react';
import {
  TrendingUpIcon,
  SearchIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';

export default function FeaturedSection() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-semibold uppercase tracking-wider text-bdOrange">
          Find Repair Capabilities with High demand and Low Competition
        </h2>

        <p className="mx-auto mt-3 max-w-prose text-base text-bdText">
          Many companies focus on how to "beat" the competition instead of
          finding ways to make them irrelevant. With 145 Big Data you'll not
          only find parts with low competition, you'll also find hot parts with
          NO competition.
        </p>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-bdLightNavy p-3 shadow-lg">
                      <TrendingUpIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-bdLightNavy">
                    Spot Trends
                  </h3>
                  <p className="mt-5 text-base text-bdText">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-bdLightNavy p-3 shadow-lg">
                      <SearchIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-bdLightNavy">
                    Find Hot Parts
                  </h3>
                  <p className="mt-5 text-base text-bdText">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-bdLightNavy p-3 shadow-lg">
                      <ClipboardCheckIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-bdLightNavy">
                    Analyze Prices
                  </h3>
                  <p className="mt-5 text-base text-bdText">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-bdLightNavy p-3 shadow-lg">
                      <ClipboardListIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-bdLightNavy">
                    Customize Reports
                  </h3>
                  <p className="mt-5 text-base text-bdText">
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

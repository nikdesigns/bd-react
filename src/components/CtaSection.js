import React from 'react';

export default function CtaSection() {
  return (
    <div className="bg-bdLightNavy2">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-white sm:text-4xl">
          <span className="block">Boost your productivity.</span>
          <span className="block">Start using Workflow today.</span>
        </h2>
        <p className="mt-4 text-lg leading-8 font-light text-white">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bdOrange hover:bg-bdLightNavy sm:w-auto"
        >
          {' '}
          Try 14 days free trial{' '}
        </a>
      </div>
    </div>
  );
}

import React from 'react';

export default function ClientLogos() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 single-item place-items-center">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="images/sponsor_logos/vse_color.svg"
            alt="VSE Aviation"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="images/sponsor_logos/lift_color.svg"
            alt="Lift Aerospace"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="images/sponsor_logos/aels_color.svg"
            alt="Aircraft End-of-life Solutions"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="images/sponsor_logos/cavu_color.svg"
            alt="Cavu Aerospace"
          />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <img
            className="h-12"
            src="images/sponsor_logos/vas_color.svg"
            alt="Vas Aero Services"
          />
        </div>
      </div>
    </div>
  );
}

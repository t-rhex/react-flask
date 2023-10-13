import React from "react";

const HeroSection = () => (
  <div>
    <div className="mx-auto max-w-6xl hero min-h-[600px]">
      <div className="grid justify-items-stretch grid-cols-2  gap-4">
          <div>
              <h1 className="text-6xl object-left-top">Hello World</h1>
          </div>
          <div>
              <h1>Hello World from Second </h1>
          </div>
      </div>
    </div>
  </div>
);

export default HeroSection;

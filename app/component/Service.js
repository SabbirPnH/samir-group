import Image from "next/image";
import React from "react";
import { RxBorderStyle } from "react-icons/rx";
import { FaAnglesRight } from "react-icons/fa6";
const Service = () => {
  return (
    <div className="px-4 sm:px-20 bg-slate-100 py-10">
      {/* Section Header */}
      <div className="text-center pb-6" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <p className="text-[#5B8C51] flex justify-center text-lg font-semibold uppercase  inline-block py-1 rounded pt-3 sm:pt-0 sm:mb-2 flex items-center">
  <RxBorderStyle className="inline-flex text-2xl font-semibold mr-2" />
   Our Service 
  <RxBorderStyle className="inline-flex text-2xl font-semibold ml-2" />
</p>

        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-[#404A3D]">Services That We Offer Entrepreneurs</h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="relative bg-white flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 hover:opacity-100">
            <Image
              className="w-full h-full object-cover"
              src="/img/fish (1).jpg"
              alt="Best Animal Selection"
              width={400} height={400}
            />
          </div>
          <div className="flex-none p-6">
            <Image
              className="w-20 h-20 object-cover border-4 border-[#EDDD5E] rounded-full"
              src="/img/fish (1).jpg"
              alt="Care & Milking"
              width={400} height={400}
            />
          </div>
          <div className="p-5 flex-grow bg-white">
            <h5 className="text-xl font-semibold text-[#404A3D]">Best fish Selection</h5>
            <p className="text-gray-600 mb-4 text-[#404A3D]">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
            </p>
            <a className="inline-block bg-[#5B8C51] text-white rounded-full px-2 py-2" href="#">
            <FaAnglesRight />
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative bg-white flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 hover:opacity-100">
            <Image
              className="w-full h-full object-cover"
              src="/img/fish (2).jpg"
              alt="Breeding & Veterinary"
              width={400} height={400}
            />
          </div>
          <div className="flex-none p-6">
            <Image
              className="w-20 h-20 object-cover border-4 border-[#EDDD5E] rounded-full"
              src="/img/fish (2).jpg"
              alt="Care & Milking"
              width={400} height={400}
            />
          </div>
          <div className="p-5 flex-grow bg-white">
            <h5 className="text-xl font-semibold text-[#404A3D]">Fish Care Essentials</h5>
            <p className="text-gray-600 mb-4 text-[#404A3D]">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
            </p>
            <a className="inline-block bg-[#5B8C51] text-white rounded-full px-2 py-2" href="#">
            <FaAnglesRight />
            </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative bg-white flex flex-col h-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 hover:opacity-100">
            <Image
              className="w-full h-full object-cover"
              src="/img/fish (3).jpg"
              alt="Care & Milking"
              width={400} height={400}
            />
          </div>
          <div className="flex-none p-6">
            <Image
              className="w-20 h-20 object-cover border-4 border-[#EDDD5E] rounded-full"
              src="/img/fish (3).jpg"
              alt="Care & Milking"
              width={400} height={400}
            />
          </div>
          <div className="p-5 flex-grow bg-white">
            <h5 className="text-xl font-semibold text-[#404A3D]">Care & Fishing</h5>
            <p className="text-gray-600 mb-4 text-[#404A3D]">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
            </p>
            <a className="inline-block bg-[#5B8C51] text-white rounded-full px-2 py-2" href="#">
            <FaAnglesRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

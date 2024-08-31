import React, { useState } from 'react';
import Footer from '../../Footer/Footer';

const Innovations = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [coatingOpen, setCoatingOpen] = useState(false);

  return (
    <>
      {/* Top Banner Image with Text */}
      <div className="relative w-full h-[300px]">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/premium-photo/modern-kitchen-equipment-gray-stone-work-surface_269655-30696.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="topbanner"
        />
        <p className="absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 p-4 rounded-lg text-center">
          FAUCETS
        </p>
      </div>

      {/* Main Content with Two Sections */}
      <div className="flex flex-col lg:flex-row justify-center items-start p-4 gap-8 w-full lg:w-3/4 mx-auto">
        {/* First Section: Dropdowns with Checkboxes */}
        <div className="w-full lg:w-[300px] bg-gray-100 p-4 rounded-md shadow-md">
          <div>
            <h2
              className="text-lg font-semibold cursor-pointer"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              Filters {filtersOpen ? '▲' : '▼'}
            </h2>
            {filtersOpen && (
              <div className="mt-2">
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  Hot and Cold (0)
                </label>
                <label className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  Pull Out (0)
                </label>
                <label className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  Single Lever (0)
                </label>
              </div>
            )}
          </div>

          <div className="mt-6">
            <h2
              className="text-lg font-semibold cursor-pointer"
              onClick={() => setCoatingOpen(!coatingOpen)}
            >
              Coating {coatingOpen ? '▲' : '▼'}
            </h2>
            {coatingOpen && (
              <div className="mt-2">
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  Colors
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Image Sections */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {/* First Image Row */}
          <div className="flex flex-row justify-center items-center gap-4">
            <img
              src="https://www.alstonejindal.in/image/img1.jpg"
              alt="Image 1"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md   transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
            <img
              src="https://www.alstonejindal.in/image/img2.jpg"
              alt="Image 2"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md  transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
            <img
              src="https://www.alstonejindal.in/image/img3.jpg"
              alt="Image 3"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md  transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
          </div>

          {/* Second Image Row */}
          <div className="flex flex-row justify-center items-center gap-4">
            <img
              src="https://www.alstonejindal.in/image/img4.jpg"
              alt="Image 1"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md  transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
            <img
              src="https://www.alstonejindal.in/image/img5.jpg"
              alt="Image 2"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md  transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
            <img
              src="https://www.alstonejindal.in/image/img6.jpg"
              alt="Image 3"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
          </div>
          {/* third Image Row */}
          <div className="flex flex-row justify-center items-center gap-4">
            <img
              src="https://www.alstonejindal.in/image/img7.jpg"
              alt="Image 1"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md  transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
            <img
              src="https://www.alstonejindal.in/image/img1.jpg"
              alt="Image 2"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md  transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
            <img
              src="https://www.alstonejindal.in/image/img4.jpg"
              alt="Image 3"
              className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md  transition-transform transform hover:scale-110 duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>


      {/* This is the footer section */}
      <div className=' mt-10'>
      <Footer/>

      </div>
    </>

    
  );
};

export default Innovations;

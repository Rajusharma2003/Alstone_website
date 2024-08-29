import React from 'react'
import Footer from '../Footer/Footer'

const Download = () => {
  return (
    <>
        <div className="relative">
        <img
          className="w-full h-[300px] object-fill"
          src="https://img.freepik.com/premium-photo/modern-kitchen-equipment-gray-stone-work-surface_269655-30696.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="topbanner"
        />

        {/* Text on the left side */}
        <p className="absolute left-1/4 top-1/3 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 p-4 rounded-lg">
          FAUCETS
        </p>
      </div>


      <div className="w-9/12 mx-auto p-6">
      {/* This is first img section */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4">
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat1.jpg"
              alt="Sink 1"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 1</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat2.jpg"
              alt="Sink 2"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 2</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat3.jpg"
              alt="Sink 3"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 3</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat4.jpg"
              alt="Sink 4"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 4</p>
        </div>
      </div>

      {/* This is second img section */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4">
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat5.jpg"
              alt="Sink 1"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 5</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat6.jpg"
              alt="Sink 2"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 6</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat7.jpg"
              alt="Sink 3"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 7</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
          <a href="#">
            <img
              src="https://www.alstonejindal.in/sink/cat7.jpg"
              alt="Sink 4"
              className="w-full h-auto sm:h-[250px] md:h-[300px] object-cover rounded-lg mb-4 cursor-pointer"
            />
          </a>
          <p className="text-center text-gray-700 font-semibold">Sink 8</p>
        </div>
      </div>
    </div>

    {/* This is the footer section */}
    <div className='mt-10'>
    <Footer/>
    </div>
   

    </>
  )
}

export default Download
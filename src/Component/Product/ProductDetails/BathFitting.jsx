import React from 'react'
import Footer from '../../Footer/Footer'

const BathFitting = () => {
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
        BATH FITTING
        </p>

        
      </div>

      <div className='mt-36'>
        <Footer/>
      </div>
    </>
    

     
  )
}

export default BathFitting
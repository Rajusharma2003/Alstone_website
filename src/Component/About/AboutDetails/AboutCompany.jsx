import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import HomePageContent from '../../../HomePage/HomePageContent';
import Footer from '../../Footer/Footer';
const AboutCompany = () => {
  return (
     
    <div className="relative">
        <img
          className="w-full h-[300px] object-fill bg-opacity-50"
          src="https://img.freepik.com/premium-photo/modern-kitchen-equipment-gray-stone-work-surface_269655-30696.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="topbanner"
        />

        {/* Text on the left side */}
        <p className="absolute left-1/4 top-2  text-white p-4 rounded-lg">
         
         <div className='flex items-center gap-2 '> 
         <a href="/" className='hover:text-red-500'> Home </a>
         <FaAngleRight /> 
         <a href="/about-company" className='hover:text-red-500'>About</a>
         </div>
        
        </p>


        {/* This is home page content */}
        <HomePageContent />

        {/* Footer Section */}
        <Footer/>


      </div>
    
  )
}

export default AboutCompany
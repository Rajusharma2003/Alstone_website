import React from 'react'
import { FaAngleRight, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (

    <>
    <div className=' relative'> 

       <img
          className="w-full h-[300px] object-fill bg-opacity-100 backdrop-blur-3xl"
          src="https://img.freepik.com/premium-photo/modern-bathroom-with-plants-wooden-accents_21085-113330.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="topbanner"
        />

        {/* Text on the left side */}
        <p className="absolute left-1/4 top-2  text-white font-extrabold p-4 rounded-lg">
         
         <div className='flex items-center gap-2 '> 
         <a href="/" className='hover:text-red-500'> Home </a>
         <FaAngleRight /> 
         <a href="/contact" className='hover:text-red-500'>Contact</a>
         </div>
        
        </p>
    </div> 
    
    <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 border-t-2 border-b-2">Contact Us</h1>
                    <p className="text-lg text-gray-600">Have Questions? Send us a Message</p>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell Us About Project*</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Get in Touch
                            </button>
                        </form>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0 bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                        <div className="flex items-start mb-4">
                            <FaPhoneAlt className="h-6 w-6 text-gray-500 mr-4" />
                            <p className="text-lg text-gray-600">Call Us: <span className="font-semibold">011-46710423</span></p>
                        </div>
                        <div className="flex items-start mb-4">
                            <FaPhoneAlt className="h-6 w-6 text-gray-500 mr-4" />
                            <p className="text-lg text-gray-600">Alternate Numbers: <span className="font-semibold">9810069551, 9810059551</span></p>
                        </div>
                        <div className="flex items-start mb-4">
                            <FaEnvelope className="h-6 w-6 text-gray-500 mr-4" />
                            <p className="text-lg text-gray-600">Email: <span className="font-semibold">alstonesanitaryware@gmail.com</span></p>
                        </div>
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="h-6 w-6 text-gray-500 mr-4" />
                            <p className="text-lg text-gray-600">Our Location: <span className="font-semibold">Alstone Sanitaryware No. 262, Swarn Park, Udyog Nagar Mundka, Mundaka, New Delhi-110041, Delhi, India</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-2 border-t-2">Our Location</h1>
                </div>
                <div className="flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7000.231761353815!2d77.033504!3d28.68618!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzEwLjMiTiA3N8KwMDInMDkuOSJF!5e0!3m2!1sen!2sin!4v1724934912770!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-lg w-full"
                    ></iframe>
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

export default Contact
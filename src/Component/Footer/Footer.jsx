import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

import catalog from '../../Images/ALSTONECatalog.pdf'



const Footer = () => {

  const [showPopup, setShowPopup] = useState(false);



  // Function to handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // this is for whatsapp pop up
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Popup hides after 2 seconds
    }, 4000); // Popup shows every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src="https://www.alstonejindal.in/image/logo.png"
              alt="Logo"
              className="h-12 w-auto mb-4 md:mb-0 bg-white rounded-md mx-auto md:mx-16"
            />
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Download Catalogues */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Download Catalogues</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href={catalog} className="text-gray-400 hover:text-white">Faucet Catalogue</a>
                    </li>
                    <li>
                      <a href={catalog} className="text-gray-400 hover:text-white">Bath Fittings Catalogue</a>
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">About Us</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Gallery</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Products</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Interior</a>
                    </li>
                  </ul>
                </div>

                {/* Social Media */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Social Media</h3>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a
                      href="https://instagram.com/alstonejindal"
                      className="text-gray-400 hover:text-white text-2xl"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://facebook.com/alstonesanitaryware"
                      className="text-gray-400 hover:text-white text-2xl"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://twitter.com"
                      className="text-gray-400 hover:text-white text-2xl"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      className="text-gray-400 hover:text-white text-2xl"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://www.youtube.com"
                      className="text-gray-400 hover:text-white text-2xl"
                      aria-label="YouTube"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                </div>

                {/* Media */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Media</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">News</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Photo Gallery</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Video Gallery</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <p className="text-gray-400 mt-2">
              Alstone Sanitaryware No. 262, Swarn Park, Udyog Nagar Mundka, Mundaka, New Delhi-110041, Delhi, India
            </p>

            <div>
            <p className="text-gray-400 mt-2">
              Phone: 9810069551, 9810059551
            </p>
            <p className="text-gray-400 mt-2">
              Email: <a href="mailto:alstonesanitaryware@gmail.com" className="hover:text-white">alstonesanitaryware@gmail.com</a>
            </p>
            </div>
            
            <p className='mt-9'>@Alstone All Rights Reserved by Designed by SHOPWEB</p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-24 right-10 flex flex-col items-center">
      {/* Popup Message */}
      {showPopup && (
        <div className="absolute bottom-16 right-10  w-64 h-24 bg-white text-black p-4 rounded-lg shadow-lg border border-gray-300 transform scale-100 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center">
        <p className="text-lg font-semibold mb-2">Contact Us</p>
        <p className="text-sm">We're here to help you!</p>
      </div>
      )}

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/9810069551" // Replace with your WhatsApp number
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <FaArrowUp className="text-2xl" />
      </button>
    </div>
  );
};

export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TopPost = () => {
  return (
    <div className='bg-red-700 h-auto flex flex-col md:flex-row justify-evenly items-center px-4 py-2'>
      {/* Left Section */}
      <div className='text-center md:text-left mb-2 md:mb-0'>
        <a className='text-white text-sm md:text-base' href="">Download Distributorship Form</a>
      </div>

      {/* Center Section */}
      <div className='text-center md:text-left mb-2 md:mb-0'>
        <a className='text-white text-sm md:text-base' href='mailto:alstonesanitaryware@gmail.com'>
          Email: alstonesanitaryware@gmail.com | Call Us: +91 9810069551, 9810059551
        </a>
      </div>

      {/* Right Section */}
      <div className='flex justify-center md:justify-start gap-4 '>
        <a 
          href="https://facebook.com/alstonesanitaryware" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-white text-2xl md:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125'>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a 
          href="https://instagram.com/alstonejindal" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-white text-2xl md:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-white text-2xl md:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-125'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}

export default TopPost;

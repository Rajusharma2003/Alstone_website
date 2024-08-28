import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TopPost = () => {
  return (
    <div className='bg-red-700 h-10 flex justify-around items-center'>
    
      <div>
        <a className='text-white' href="" >Download Distributorship Form</a>
      </div>

      <div className='flex gap-9'>
        <a className='text-white' href='https://alstonesanitaryware@gmail.com'>Email: alstonesanitaryware@gmail.com | Call Us: +91 9810069551 , 9810059551</a>

        <div className='text-white'>
          <a 
            href="https://facebook.com/alstonesanitaryware" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a 
            href="https://instagram.com/alstonejindal" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        
      </div>
  
    </div>
  )
}

export default TopPost;

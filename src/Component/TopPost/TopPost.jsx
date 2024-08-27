import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TopPost = () => {
  return (
    <div className='bg-red-700 h-10 flex justify-around items-center'>
    
    <div>
        <a className='text-white' href="" >Download Distributorship Form</a>
    </div>

    <div className='flex gap-9'>
        <p className='text-white'>Email: info@example.com | Call Us: +91 1145525900</p>

        <div className='text-white'>
            <a  href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a  href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a  href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
        
    </div>
  
    </div>
  )
}

export default TopPost
import React from 'react';
import HomeCarousel from './HomeCarousel';
import { FaCogs, FaHeadset,  FaRegLightbulb, FaWhatsapp,  } from 'react-icons/fa'; // Example icons, you can replace these with your preferred ones
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';  

// This is for the images.
import hero from '../Images/hero.jpg'



const Home = () => {

  return (
    <>
    {/* This is the carousel section */}
    <HomeCarousel/>
    <div className="p-4">

<div className='w-full md:w-10/12 lg:w-8/12 mx-auto'>
  <div className="w-full px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Column */}
      <div className="p-6 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-right text-blue-600">
          ENHANCING MODERN LIFESTYLE
        </h2>
      </div>

      {/* Second Column */}
      <div className="p-6 rounded-lg shadow-lg">
        <h2 className="text-lg md:text-xl font-extrabold mb-4 text-blue-600">
          Additional Content
        </h2>
        <p className="text-base md:text-lg mb-4">
          Our design process is guided by a profound understanding of technology, functionality, and innovation. 
          Our products not only enhance your kitchen experience but also elevate the very essence of your home. Our
          advanced engineering and stringent quality measures guarantee that all our products will be the epitome of performance, durability, and style.
        </p>
      </div>
    </div>
  </div>

  <h2 className="mb-8 p-6 pt-9 rounded-lg shadow-lg text-center text-xl font-extrabold tracking-widest">
    POPULAR CATEGORIES
  </h2>

  <div>
      <img src={hero} alt="hero" className="w-full h-auto" />
  </div>

</div>

<div className="w-full p-6 mt-12 bg-gray-400">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Text Column */}
    <div className="flex flex-col justify-center text-center md:text-right">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-500">
        A STEP TOWARDS <br />
        <span className="text-blue-600 text-3xl md:text-4xl">SUSTAINABILITY</span>
      </h2>
      <p className="text-lg">
        Today it is imperative that companies rethink their sustainable practices. Carysil understood this very well early on. Our approach to sustainability doesn't stop at material innovation. It's a holistic approach binding all stakeholders from manufacturing to people. In our endeavor towards a sustainable future, we have created a Green Sink with colors of nature. A sink that uses 100% bio-based fillers and natural pigments is our way of making a difference and leading the way to a greener future.
      </p>
    </div>

    {/* Video Column with Thumbnail and Play Icon */}
  {/* Video Column with Thumbnail and Play Button */}
<div className="flex justify-center items-center relative">
  <img
    src="https://www.alstonejindal.in/img/img5.jpg"
    alt="Sustainability Thumbnail"
    className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
    id="thumbnail"
  />

  {/* Play Button */}
  <a
    href="https://www.youtube.com/embed/your-video-id?autoplay=1"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 flex justify-center items-center"
  >
    <div className="bg-red-600 text-black rounded-full p-4 shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-5.197-3.682A1 1 0 008 8.131v7.738a1 1 0 001.555.832l5.197-3.682a1 1 0 000-1.664z"
        />
      </svg>
    </div>
  </a>
</div>

  </div>
</div>



{/* New Collection Section */}
<div className='w-full md:w-10/12 lg:w-8/12 mx-auto'>
  <h2 className="mt-12 p-6 rounded-lg shadow-lg text-center text-xl font-extrabold tracking-widest">
    NEW COLLECTION
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* First Column */}
    <div className="p-6 rounded-lg shadow-lg">
      <h2 className="text-xl mb-4 text-left">
        <span className='text-blue-600 font-bold text-xl tracking-widest '>SOMMELIER</span><br />
        <p className='mt-3'>
          Elevate your wine experience with a built-in tabletop wine cooler featuring touch control. Intelligently maintaining the ideal temperature, this sleek cooler, integrated into your kitchen island or worktop, ensures every sip is perfectly chilled. Gather around and indulge in the art of wine enjoyment, from the first glass to the last.
        </p>
      </h2>
    </div>

    {/* Second Column */}
    <div className="p-6 rounded-lg shadow-lg">
      <img src="https://img.freepik.com/premium-photo/modern-kitchen-with-kitchen-sink-with-stylish-faucet-white-cabinets-wooden-counter-luxurious-tex_1151968-539.jpg?semt=ais_hybrid" alt="img" className="w-full h-auto" />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* First Column */}
    <div className="p-6 rounded-lg shadow-lg">
      <img src="https://www.alstonejindal.in/img/img6.jpg" alt="img" className="w-full h-auto" />
    </div>

    {/* Second Column */}
    <div className="p-6 rounded-lg shadow-lg text-xl">
      <span className='text-blue-600 font-bold text-xl tracking-widest'>WALTZ WORKSTATION SINK</span> <br />
      <p className='mt-3'>
        Elevate your culinary experience with the Waltz Workstation Sink—a harmonious blend of style and functionality. 
        This innovative sink comes complete with kitchen accessories, ensuring seamless meal preparation.
        From chopping to cleaning, the Waltz Workstation Sink is designed to enhance your kitchen, making cooking an effortless and enjoyable affair.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* First Column */}
    <div className="p-6 rounded-lg shadow-lg h-[430px]">
      <h2 className="text-xl mb-4"> <span className='text-blue-600 font-bold text-xl tracking-widest'>BARISTA 6-IN-1 TAP</span> <br />
        <p className='mt-3'>
          The Barista 6-in-1 Tap transforms kitchens, offering chilled sparkling, boiling, chilled, and domestic hot/cold water in one faucet. 
          The ambient filter water feature ensures your hydration is pure and crisp. Child-lock ensures safety, and three chic colors—copper, brass, and gun metal—add style to any modern kitchen.
        </p>
      </h2>
    </div>

    {/* Second Column */}
    <div className="p-6 rounded-lg shadow-lg h-[430px]">
      <img src="https://img.freepik.com/premium-photo/bowl-fruit-sitting-kitchen-counter-sink_1072138-199385.jpg?semt=ais_hybrid" alt="img" className="w-full h-[390px]" />
    </div>
  </div>
</div>

{/* Three Card Section */}
<section className="py-12 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <div className="text-blue-500 text-3xl mb-4">
          <FaCogs />
        </div>
        <h3 className="text-xl font-semibold mb-2">German-engineered</h3>
        <p className="text-gray-700">
          Our kitchenware reflects the pinnacle of German engineering excellence. Experience the harmonious blend of form and function with our products!
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <div className="text-blue-500 text-3xl mb-4">
          <FaHeadset />
        </div>
        <h3 className="text-xl font-semibold mb-2">24x7 Support</h3>
        <p className="text-gray-700">
          Our commitment to your satisfaction goes beyond just crafting exceptional kitchenware; it extends to providing you with continuous support.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <div className="text-blue-500 text-3xl mb-4">
          <FaRegLightbulb />
        </div>
        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
        <p className="text-gray-700">
          Our values are underpinned by innovation. We strive to redefine kitchen solutions through constant innovation and cutting edge technology.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Next Section */}
<section className="py-12 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Video Section */}
      <div className="flex-1">
        <video
          controls
          className="w-full h-auto rounded-lg shadow-lg"
          src="https://www.alstonejindal.in/img/vedio1.mp4"
          alt="Video"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Paragraph Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">AROUND THE WORLD</h2>
        <p className="text-gray-700">
          You can discover our entire kitchen range in 6 continents and in over 50+ countries through our established and ever-expanding worldwide network of retail partners including North and South America, United Kingdom, Canada, China, Germany, France, the Far East, and the Gulf States; and through our subsidiaries in the UK, Germany, and the United States of America.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Footer Section */}
<footer className="bg-gray-800 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Download Catalogues */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Download Catalogues</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Faucet Catalogue
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Bath Fittings Catalogue 
            </a>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Interior
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Social Media</h3>
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/alstonejindal"
            className="text-gray-400 hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://facebook.com/alstonesanitaryware"
            className="text-gray-400 hover:text-white"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-gray-400 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com"
            className="text-gray-400 hover:text-white"
            aria-label="YouTube"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>
      </div>

      {/* Media */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Media</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              News
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Photo Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Video Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Contact Information */}
    <div className="mt-12 border-t border-gray-700 pt-6 text-center">
      <h3 className="text-lg font-semibold">Contact Information</h3>
      <p className="text-gray-400 mt-2">
        Alstone Sanitaryware No. 262, Swarn Park, Udyog Nagar Mundka, Mundaka, New Delhi-110041, Delhi, India
      </p>
      <p className="text-gray-400 mt-2">
        Phone:  9810069551 , 9810059551 
      </p>
      <p className="text-gray-400 mt-2">
        Email: <a href="https://alstonesanitaryware@gmail.com" className="hover:text-white">alstonesanitaryware@gmail.com</a>
      </p>
    </div>
  </div>
</footer>

{/* WhatsApp Icon */}
<a
  href="https://wa.me/9810069551" // Replace with your WhatsApp number
  className="fixed bottom-10 right-10 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="text-2xl" />
</a>

</div>


    </>
   
  )
}

export default Home
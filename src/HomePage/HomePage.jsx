import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomePageContent from './HomePageContent';
import Footer from '../Component/Footer/Footer';




const Home = () => {

  return (
    <>
    {/* This is the carousel section */}
    <HomeCarousel/>
    
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

          
    {/* This is home page content  */}
    <HomePageContent/>

    {/* Footer Section */}
    <Footer/>

 </>
 
   )
   }

            export default Home
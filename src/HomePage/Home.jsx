import React from 'react'
import HomeCarousel from './HomeCarousel'

const Home = () => {
  return (
    <>
    <HomeCarousel/>
  <div className="p-4">

    <div className='w-7/12 mx-auto'>

    <div className="grid grid-cols-2 gap-6">
    {/* <!-- First Column --> */}
    <div className=" p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-right">ENHANCING MODERN LIFESTYLE</h2>
      
    </div>

    {/* <!-- Second Column --> */}
    <div className=" p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-extrabold mb-4">Additional Content</h2>
      <p className="mb-4 text-lg">
      Our design process is guided by a profound understanding of technology, functionality, and innovation. 
      Our products not only enhance your kitchen experience but also elevate the very essence of your home. Our
       advanced engineering and stringent quality measures guarantee that all our products will be the epitome of performance, durability and style.
      </p>
      
    </div>
  </div>

      <h2 className=" mb-8 p-6 pt-9 rounded-lg shadow-lg text-center text-xl font-extrabold tracking-widest">
        POPULAR CATEGORIES
      </h2>

      <div>

  <div className='flex relative'>
    <div className='relative'>
      <img className='w-[690px] h-[400px]' src="https://www.alstonejindal.in/sink/6.jpg" alt="img" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Text Overlay 1</h2>
      </div>
    </div>
    <div className='relative ml-1'>
      <img className='w-[390px] h-[400px]' src="https://www.alstonejindal.in/sink/6.jpg" alt="img" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Text Overlay 2</h2>
      </div>
    </div>
  </div>

  <div className='flex mt-1 relative'>
    <div className='relative'>
      <img className='w-[690px] h-[400px]' src="https://www.alstonejindal.in/sink/6.jpg" alt="img" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Text Overlay 3</h2>
      </div>
    </div>
    <div className='relative ml-1'>
      <img className='w-[390px] h-[400px]' src="https://www.alstonejindal.in/sink/6.jpg" alt="img" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">Text Overlay 4</h2>
      </div>
    </div>
  </div>
</div>

    </div>


    <div className="w-full h-96 p-6 mt-[100px] bg-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl text-right font-bold mb-2 text-gray-500">A STEP TOWARDS <br /> <span className='text-blue-600 text-3xl'>SUSTAINABILITY</span></h2>
          <p className="text-lg text-right ">
            Today it is imperative that companies rethink their sustainable practices. Carysil understood this very well early on. Our approach to sustainability doesn't stop at material innovation. It's a holistic approach binding all stakeholders from manufacturing to people. In our endeavor towards a sustainable future, we have created a Green Sink with colors of nature. A sink that uses 100% bio-based fillers and natural pigments is our way of making a difference and leading the way to a greener future.
          </p>
        </div>

        {/* Video Column */}
        <div className="flex justify-center items-center h-96">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            title="Sustainability Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-auto rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>



    <div className='w-7/12 mx-auto'>
    <h2 className=" mt-12 p-6  rounded-lg shadow-lg text-center text-xl font-extrabold tracking-widest">
        NEW COLLECTION
      </h2>

  <div className="grid grid-cols-2 gap-6">
    {/* <!-- First Column --> */}
    <div className=" p-6 rounded-lg shadow-lg">
      <h2 className="text-xl  mb-4 text-left"><span  className='text-blue-600 font-bold text-xl tracking-widest'>SOMMELIER</span><br />
      Elevate your wine experience with a built-in tabletop wine cooler featuring touch control. Intelligently maintaining the ideal temperature,
      this sleek cooler, integrated into your kitchen island or worktop, ensures every sip is perfectly chilled. Gather around and indulge in the art of wine enjoyment, 
      from the first glass to the last.
 </h2>
      
    </div>

    {/* <!-- Second Column --> */}
    <div className=" p-6 rounded-lg shadow-lg ">
    <img src="https://www.alstonejindal.in/img/img6.jpg" alt="img" />
    </div>

  </div>


  <div className="grid grid-cols-2 gap-6">
    {/* <!-- First Column --> */}
    <div className=" p-6 rounded-lg shadow-lg">
    <img src="https://www.alstonejindal.in/img/img6.jpg" alt="img" />
      
      
    </div>

    {/* <!-- Second Column --> */}
    <div className=" p-6 rounded-lg shadow-lg text-xl">
     <span className='text-blue-600 font-bold text-xl tracking-widest'>WALTZ WORKSTATION SINK</span> <br />

    Elevate your culinary experience with the Waltz Workstation Sink—a harmonious blend of style and functionality. 
    This innovative sink comes complete with kitchen accessories, ensuring seamless meal preparation.
    From chopping to cleaning, the Waltz Workstation Sink is designed to enhance your kitchen, making cooking an effortless and enjoyable affair.
    </div>
  </div>
  <div className="grid grid-cols-2 gap-6">
    {/* <!-- First Column --> */}
    <div className=" p-6 rounded-lg shadow-lg">
      <h2 className="text-xl  mb-4 "> <span className='text-blue-600 font-bold text-xl tracking-widest' >BARISTA 6-IN-1 TAP</span> <br />

      The Barista 6-in-1 Tap transforms kitchens, offering chilled sparkling, boiling, chilled, and domestic hot/cold water in one faucet. 
      The ambient filter water feature ensures your hydration is pure and crisp. Child-lock ensures safety, and three chic colors—copper, brass,
      and gun metal—add style to any modern kitchen.
 </h2>
      
    </div>

    {/* <!-- Second Column --> */}
    <div className=" p-6 rounded-lg shadow-lg">
    <img src="https://www.alstonejindal.in/img/img8.jpg" alt="img" />
      
    </div>
  </div>

      
    </div>
    

</div>

    </>
   
  )
}

export default Home
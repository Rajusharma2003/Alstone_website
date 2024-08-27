import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselData from './HomeCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const items = carouselData.map((item) => (
    <img
      className="w-full object-cover" // Responsive classes
      src={item.image}
      alt="image"
    />
  ));
  
 
const HomeCarousel = () => (
    <AliceCarousel
    autoHeight  
    infinite
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000} 


    items={items}
/>
);

export default HomeCarousel
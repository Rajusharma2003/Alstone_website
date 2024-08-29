import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselData from './HomeCarouselData';

const items = carouselData.map((item) => (
  <img
    className="w-full object-cover h-auto max-h-[770px]" // Responsive classes
    src={item.image}
    alt="image"
  />
));

const HomeCarousel = () => (
  <AliceCarousel 
    infinite
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000} 
    items={items}
  />
);

export default HomeCarousel;

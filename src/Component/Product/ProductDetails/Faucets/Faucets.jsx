import React from 'react';
import ProductRow from './FaucetsData';
import { product1, product2, product3 } from './FaucetsAllData';


const Faucets = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[300px] object-fill"
          src="https://img.freepik.com/premium-photo/modern-kitchen-equipment-gray-stone-work-surface_269655-30696.jpg?ga=GA1.1.2025242279.1724825934&semt=ais_hybrid"
          alt="topbanner"
        />

        {/* Text on the left side */}
        <p className="absolute left-1/4 top-1/3 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 p-4 rounded-lg">
          FAUCETS
        </p>
      </div>

      {/* ProductRow component to display products */}
      <ProductRow products={product1} />  
      <ProductRow  products={product2}/>  
      <ProductRow products={product3}/>  
      <ProductRow />  
      <ProductRow />  
    </>
  );
};

export default Faucets;

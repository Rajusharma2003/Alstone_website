import React from 'react';
import ProductRow from './FaucetsUI';
import { product1, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product2, product20, product21, product22, product23, product24, product25, product26, product27, product28, product29, product3, product30, product31, product32, product33, product34, product35, product36, product37, product38, product39, product4, product40, product41, product42, product43, product44, product45, product46, product47, product48, product49, product5, product50, product6, product7, product8, product9 } from './FaucetsAllData';
import Footer from '../../../Footer/Footer';


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
      <ProductRow products={product4}/>  
      <ProductRow products={product5}/>  
      <ProductRow products={product6}/>  
      <ProductRow products={product7}/>  
      <ProductRow products={product8}/>  
      <ProductRow products={product9}/>  
      <ProductRow products={product10}/>  
      <ProductRow products={product11}/>  
      <ProductRow products={product12}/>  
      <ProductRow products={product13}/>  
      <ProductRow products={product14}/>  
      <ProductRow products={product15}/>  
      <ProductRow products={product16}/>  
      <ProductRow products={product17}/>  
      <ProductRow products={product18}/>  
      <ProductRow products={product19}/>  
      <ProductRow products={product20}/>  
      <ProductRow products={product21}/>  
      <ProductRow products={product22}/>  
      <ProductRow products={product23}/>  
      <ProductRow products={product24}/>  
      <ProductRow products={product25}/>  
      <ProductRow products={product26}/>  
      <ProductRow products={product27}/>  
      <ProductRow products={product28}/>  
      <ProductRow products={product29}/>  
      <ProductRow products={product30}/>  
      <ProductRow products={product31}/>  
      <ProductRow products={product32}/>  
      <ProductRow products={product33}/>  
      <ProductRow products={product34}/>  
      <ProductRow products={product35}/>  
      <ProductRow products={product36}/>  
      <ProductRow products={product37}/>  
      <ProductRow products={product38}/>  
      <ProductRow products={product39}/>  
      <ProductRow products={product40}/>  
      <ProductRow products={product41}/>  
      <ProductRow products={product42}/>  
      <ProductRow products={product43}/>  
      <ProductRow products={product44}/>  
      <ProductRow products={product45}/>  
      <ProductRow products={product46}/>  
      <ProductRow products={product47}/>  
      <ProductRow products={product48}/>  
      <ProductRow products={product49}/>  
      <ProductRow products={product50}/>  


      {/* footer */}
      <Footer/>
    </>
  );
};

export default Faucets;

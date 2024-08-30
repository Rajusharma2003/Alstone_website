import React from 'react';
import { useParams } from 'react-router-dom';
import {   product1, product2, product3 , product4 , product5 , product6 , product7,  product8,  product9, product10, product11, product12, product13,  product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25,product26, product27, product28, product29, product30, product31, product32, product33, product34,product35,product36,product37,product38,product39,product40, product41, product42 ,product43, product44, product45 , product46 , product47, product48 , product49 , product50 } from '../Product/ProductDetails/Faucets/FaucetsAllData';
import Footer from '../Footer/Footer';

const allProducts = [...product1, ...product2, ...product3 , ...product4 , ...product5 , ...product6 , ...product7,  ...product8,  ...product9, ...product10, ...product11, ...product12, ...product13,  ...product14, ...product15, ...product16, ...product17, ...product18, ...product19, ...product20, ...product21, ...product22, ...product23, ...product24, ...product25,...product26, ...product27, ...product28, ...product29, ...product30, ...product31, ...product32, ...product33, ...product34,...product35,...product36,...product37,...product38,...product39,...product40, ...product41, ...product42 ,...product43, ...product44, ...product45 , ...product46 , ...product47, ...product48 , ...product49 , ...product50 ];

const ProductDetails = () => {
const { id } = useParams();

  
  // Find the product by ID
  console.log("productdetails" , allProducts)
  const product = allProducts.find((Product, index) => index + 1 === parseInt(id, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (

    <>
    
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
        <img
          src={product.img}
          alt={product.name}
          className="w-full md:w-2/5 h-auto object-fill"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{product.name}</h1>
          <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
            {product.description}
          </p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>


    <div className="mt-10">
        <Footer/>
    </div>
    </>
  );
};

export default ProductDetails;


import React from 'react';

const ProductRow = ({ products = [] }) => {
  return (
    <div className="w-9/12 mx-auto p-6">
      <div className="flex flex-wrap gap-4 sm:flex-nowrap">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 p-4 bg-white shadow-lg rounded-lg"
          >
            <a href={product.link} className="block relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto sm:h-[250px] md:h-[300px] object-fill rounded-lg mb-4 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </a>
            <p className="text-center text-gray-700 font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRow;

import React, { useState } from 'react';
import { useCart } from '../../CartContext'; // Import the Cart Context
import cake1 from '../../assets/cake1.jfif'; 
import cake2 from '../../assets/cake2.jfif'; 
import cake3 from '../../assets/cake3.jfif'; 
import cake4 from '../../assets/cake4.jfif'; 
import cake5 from '../../assets/cake5.jfif'; 
import cupcake1 from '../../assets/cupcake1.jfif'; 
import cupcake2 from '../../assets/cupcake2.jfif'; 
import cupcake3 from '../../assets/cupcake3.jfif'; 
import brownie from '../../assets/brownie.jfif'; 
import cookie1 from '../../assets/cookie1.jfif'; 
import download from '../../assets/download.jfif'; 
import Macaron from '../../assets/Macaron.jfif'; 

const ProductCard = ({ imgSrc, title, price, onClick }) => (
  <div className="card bg-blue-300 border border-gray-300 rounded-lg overflow-hidden shadow-md p-0">
    <img src={imgSrc} className="w-full h-[200px] object-cover" alt={title} />
    <div className="p-4">
      <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
      <p className="mb-4 text-center">Price: {price}/-</p>
      <div className="flex justify-center">
        <button onClick={onClick} className="bg-fuchsia-300 text-purple-900 py-2 px-4 rounded hover:bg-amber-400">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart(); // Get addToCart from CartContext

  const products = [
    { imgSrc: cake1, title: 'Rainbow Cake', price: '3000' },
    { imgSrc: cake2, title: 'Strawberry Short Cake', price: '3500' },
    { imgSrc: cupcake2, title: 'Lemon Tarte Cupcake', price: '3000' },
    { imgSrc: cake3, title: 'Lotus CheeseCake', price: '4000' },
    { imgSrc: cake4, title: 'Classic Cheese Cake', price: '1000' },
    { imgSrc: cake5, title: 'Chocolate Cake', price: '3000' },
    { imgSrc: cupcake1, title: 'Birthday Cupcake', price: '4000' },
    { imgSrc: cupcake3, title: 'Chocolate Cupcake', price: '500' },
    { imgSrc: download, title: 'Tiramisu', price: '800' },
    { imgSrc: cookie1, title: 'Surprised Cookie', price: '300' },
    { imgSrc: Macaron, title: 'Macaron', price: '600' },
    { imgSrc: brownie, title: 'Brownie with Ice Cream', price: '300' },
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetailedView = () => {
    setSelectedProduct(null);
  };

  const handleOrderClick = () => {
    if (selectedProduct) {
      addToCart(selectedProduct); // Add product to cart
      alert(`Added ${selectedProduct.title} to cart`);
    }
  };

  return (
    <div className="box bg-red-200">
      <div className="container px-0 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imgSrc={product.imgSrc}
              title={product.title}
              price={product.price}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-fuchsia-300 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button onClick={handleCloseDetailedView} className="absolute top-4 right-4 text-teal-950 hover:text-green-500 text-2xl font-bold">
              X
            </button>
            <div className="flex justify-center mb-4">
              <img
                src={selectedProduct.imgSrc}
                className="w-[300px] h-[250px] object-cover rounded-lg"
                alt={selectedProduct.title}
              />
            </div>
            <h2 className="text-2xl font-semibold text-center">{selectedProduct.title}</h2>
            <p className="text-lg mt-2 text-center">Price: {selectedProduct.price}/-</p>
            <div className="flex justify-center mt-4">
              <button onClick={handleOrderClick} className="bg-green-500 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

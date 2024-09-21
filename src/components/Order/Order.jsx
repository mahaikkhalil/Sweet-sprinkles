
import React from 'react';
import { useCart } from '../../CartContext'; 

const Order = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (

    <div className="bg-fuchsia-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-pink-200 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-fuchsia-400 text-white text-center py-4">
          <h1 className="text-3xl font-semibold">Your Cart</h1>
        </div>
        <div className="p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-slate-900">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-4">
                  <div className="flex items-center">
                    <img src={item.imgSrc} className="w-20 h-20 object-cover rounded-md mr-4" alt={item.title} />
                    <div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="text-gray-500">Price: {item.price}/-</p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">{item.price * item.quantity}/-</p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 text-right">rtt
            <h2 className="text-2xl font-semibold">Total: {calculateTotal()}/-</h2>
          </div>
        </div>
      </div>
    </div>


  
  );
};

export default Order;

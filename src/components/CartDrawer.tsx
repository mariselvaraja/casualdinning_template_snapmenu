import React, { useContext } from 'react';
import { CartContext, useCart } from '../context/CartContext';
import { Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const { isCartOpen, toggleCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  return (
    <div
      className={`fixed top-0 right-0 min-h-screen w-96 bg-black text-white shadow-2xl border-l border-zinc-800 z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6 flex flex-col h-full min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
        <button onClick={toggleCart} className="absolute top-4 right-4 text-gray-400 hover:text-gray-300">
          X
        </button>
        {cart.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ul className="overflow-y-auto">
              {cart.map((item) => (
                <li key={item.id} className="py-2 border-b border-zinc-800 flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>${item.price}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-zinc-900 hover:bg-zinc-700 text-white">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-zinc-900 hover:bg-zinc-700 text-white">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500 hover:text-red-700">
                    <Trash className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="font-semibold text-xl">
                Total: ${calculateTotal()}
              </div>
              <Link to="/checkout" className="w-full">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition w-full mt-4">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

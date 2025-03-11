import React from 'react';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Order Summary */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            {/* Add order summary items here */}
            <p>Subtotal: $XX.XX</p>
            <p>Shipping: $X.XX</p>
            <p className="text-xl font-semibold mt-4">Total: $XX.XX</p>
          </div>

          {/* Payment Information */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="cardholder" className="block text-gray-300 text-sm font-bold mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardholder"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-900 text-white"
                  placeholder="Enter cardholder name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cardnumber" className="block text-gray-300 text-sm font-bold mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardnumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-900 text-white"
                  placeholder="Enter card number"
                />
              </div>
              <div className="flex gap-4 mb-4">
                <div>
                  <label htmlFor="expiry" className="block text-gray-300 text-sm font-bold mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-900 text-white"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-300 text-sm font-bold mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-900 text-white"
                    placeholder="CVV"
                  />
                </div>
              </div>
              <button
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

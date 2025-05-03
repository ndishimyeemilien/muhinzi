import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash, Plus, Minus, ChevronRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const placeOrder = () => {
    // In a real application, this would submit the order to an API
    setOrderPlaced(true);
  };
  
  if (orderPlaced) {
    return (
      <div className="container-custom py-16 max-w-3xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We've received your request and will process it shortly.
            You will receive a confirmation via phone or email.
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  if (cart.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is empty</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      <div className="lg:flex gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            {cart.map(item => (
              <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  
                  <div className="sm:ml-6 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
                      </div>
                      <p className="font-bold text-primary-700 mt-2 sm:mt-0">
                        {item.price.toLocaleString()} RWF
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-l-md"
                        >
                          <Minus size={14} />
                        </button>
                        <input 
                          type="number" 
                          min="1" 
                          max={item.stock} 
                          value={item.quantity} 
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          className="w-12 h-8 border-t border-b border-gray-300 text-center text-sm"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-r-md"
                          disabled={item.quantity >= item.stock}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/products" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
            <ArrowLeft size={18} />
            <span>Continue Shopping</span>
          </Link>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            
            <div className="border-t border-b border-gray-200 py-4 my-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>{getTotalPrice().toLocaleString()} RWF</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span>2,000 RWF</span>
              </div>
            </div>
            
            <div className="flex justify-between mb-6">
              <span className="font-bold">Total</span>
              <span className="font-bold">{(getTotalPrice() + 2000).toLocaleString()} RWF</span>
            </div>
            
            <button 
              onClick={placeOrder}
              className="btn btn-primary w-full py-3 flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ChevronRight size={18} />
            </button>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>We accept:</p>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-1 border border-gray-300 rounded">Mobile Money</span>
                <span className="px-2 py-1 border border-gray-300 rounded">Bank Transfer</span>
                <span className="px-2 py-1 border border-gray-300 rounded">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
 

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ChevronLeft, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Cart is empty
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <ShoppingBag size={28} className="text-gray-500" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button 
                onClick={() => navigate("/store")}
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b text-sm font-medium text-gray-600">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              {/* Cart items */}
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                    {/* Product */}
                    <div className="col-span-6 flex items-center space-x-4">
                      {/* Product image */}
                      <Link to={`/product/${item.id}`} className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      
                      {/* Product details */}
                      <div className="flex-1 min-w-0">
                        <Link to={`/product/${item.id}`} className="text-gray-800 font-medium hover:text-blue-600 line-clamp-2">
                          {item.name}
                        </Link>
                        
                        {/* Mobile price */}
                        <div className="md:hidden flex justify-between items-center mt-2">
                          <span className="text-gray-600">${item.price.toFixed(2)}</span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Desktop remove button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="hidden md:block text-gray-500 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    {/* Price - desktop */}
                    <div className="hidden md:block col-span-2 text-center text-gray-700">
                      ${item.price.toFixed(2)}
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-gray-600 hover:text-gray-800"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="col-span-2 text-right text-gray-900 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Cart actions */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => navigate("/store")}
                className="flex items-center gap-2"
              >
                <ChevronLeft size={16} />
                Continue Shopping
              </Button>
              
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-600 border-red-200 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(totalPrice * 0.07).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-xl">${(totalPrice + totalPrice * 0.07).toFixed(2)}</span>
                </div>
              </div>
              
              <Button
                onClick={() => isAuthenticated 
                  ? alert("Checkout functionality would be implemented in a real app.") 
                  : navigate("/login?redirect=cart")
                }
                className="w-full bg-blue-600 hover:bg-blue-700 mb-4"
              >
                {isAuthenticated ? "Proceed to Checkout" : "Login to Checkout"}
              </Button>
              
              <div className="text-xs text-gray-500 space-y-1">
                <p>We accept the following payment methods:</p>
                <div className="flex gap-2 mt-2">
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-[10px] font-medium">VISA</div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-[10px] font-medium">MASTER</div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-[10px] font-medium">PAYPAL</div>
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-[10px] font-medium">APPLE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

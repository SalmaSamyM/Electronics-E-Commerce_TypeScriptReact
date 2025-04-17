
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Heart, 
  Share2, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  CheckCircle, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Minus,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/mockProducts";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get related products from the same category
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    } else {
      // Product not found, redirect to store
      navigate("/store");
    }

    // Reset state when product changes
    setQuantity(1);
    setActiveImageIndex(0);
    setActiveTab('description');
    
  }, [id, navigate]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.discount 
        ? Math.round((product.price - (product.price * product.discount / 100)) * 100) / 100 
        : product.price,
      image: product.image
    });
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePrevImage = () => {
    if (product.images) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === 0 ? product.images!.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (product.images) {
      setActiveImageIndex((prevIndex) => 
        prevIndex === product.images!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Calculate the discounted price
  const discountedPrice = product.discount 
    ? Math.round((product.price - (product.price * product.discount / 100)) * 100) / 100 
    : product.price;

  // Generate star rating elements
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star size={18} className="text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} size={18} className="text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/store" className="hover:text-blue-600">Store</a>
          <span className="mx-2">/</span>
          <a href={`/store?category=${product.category}`} className="hover:text-blue-600 capitalize">
            {product.category}
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        {/* Product Overview */}
        <div className="bg-white rounded-lg shadow-md mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden bg-gray-100 h-96 mb-4">
                <img 
                  src={product.images?.[activeImageIndex] || product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
                
                {/* Image Navigation Buttons */}
                {product.images && product.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.discount && product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      className={cn(
                        "rounded border-2 overflow-hidden h-20",
                        activeImageIndex === index ? "border-blue-500" : "border-gray-200 hover:border-gray-300"
                      )}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} - view ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Product Header */}
              <div className="mb-4">
                <span className="text-sm text-gray-500 uppercase">{product.brand}</span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                  {product.reviews && (
                    <span className="text-sm text-gray-500 ml-1">
                      ({product.reviews} reviews)
                    </span>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  {product.discount && product.discount > 0 && (
                    <span className="ml-3 text-lg text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {product.stock > 10 
                    ? <span className="text-green-600 flex items-center"><CheckCircle size={14} className="mr-1" /> In Stock</span>
                    : product.stock > 0 
                      ? <span className="text-orange-600">Only {product.stock} left in stock</span>
                      : <span className="text-red-600">Out of Stock</span>
                  }
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
                {/* Quantity Selector */}
                <div className="flex items-center border rounded-md w-32">
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    type="number"
                    className="w-full text-center border-0 focus:ring-0"
                    value={quantity}
                    min="1"
                    max={product.stock}
                    readOnly
                  />
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  onClick={handleAddToCart} 
                  disabled={product.stock === 0}
                  className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center flex-1"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                
                {/* Wishlist Button */}
                <Button variant="outline" className="px-4">
                  <Heart size={18} />
                </Button>
              </div>

              {/* Product Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center">
                  <Truck size={18} className="text-gray-600 mr-2" />
                  <span className="text-sm text-gray-600">Free 2-day shipping</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck size={18} className="text-gray-600 mr-2" />
                  <span className="text-sm text-gray-600">1-year warranty</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw size={18} className="text-gray-600 mr-2" />
                  <span className="text-sm text-gray-600">30-day returns</span>
                </div>
                <div className="flex items-center">
                  <Share2 size={18} className="text-gray-600 mr-2" />
                  <span className="text-sm text-gray-600">Share product</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-gray-700 mb-6 line-clamp-3">
                {product.description}
              </p>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="border-t">
            <div className="flex border-b px-6">
              <button
                className={cn(
                  "px-6 py-3 font-medium text-sm border-b-2 -mb-px",
                  activeTab === 'description'
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                )}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={cn(
                  "px-6 py-3 font-medium text-sm border-b-2 -mb-px",
                  activeTab === 'specifications'
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                )}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={cn(
                  "px-6 py-3 font-medium text-sm border-b-2 -mb-px",
                  activeTab === 'reviews'
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                )}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews {product.reviews && `(${product.reviews})`}
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div className="text-gray-700 space-y-4">
                  <p>{product.description}</p>
                  {product.features && (
                    <div className="mt-4">
                      <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Technical Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="py-2 border-b">
                        <span className="font-medium text-gray-700">{key}: </span>
                        <span className="text-gray-600">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="flex items-center">
                        <span className="text-3xl font-bold mr-2">{product.rating.toFixed(1)}</span>
                        <div className="flex">
                          {renderStars(product.rating)}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Based on {product.reviews || 0} reviews
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                      This is a demo product page. In a real application, customer reviews would be displayed here.
                    </p>
                    <Button variant="outline">Write a Review</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;

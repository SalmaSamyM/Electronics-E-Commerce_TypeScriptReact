
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  rating?: number;
  isNew?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  discount = 0,
  rating = 0,
  isNew = false,
  className
}) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, name, price: discountedPrice, image });
  };

  const discountedPrice = discount > 0
    ? Math.round((price - (price * discount / 100)) * 100) / 100
    : price;

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }

    return stars;
  };

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg group", className)}>
      <Link to={`/product/${id}`} className="block">
        <div className="relative">
          {/* Product Image */}
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            )}
            {discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-70 hover:opacity-100 transition-opacity">
            <Heart size={18} className="text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          {/* Category */}
          <div className="text-xs text-gray-500 uppercase mb-1">{category}</div>
          
          {/* Product Name */}
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{name}</h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex mr-1">{renderStars()}</div>
            <span className="text-xs text-gray-500">({rating.toFixed(1)})</span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-3">
            <span className="font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
            {discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
            size="sm"
          >
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

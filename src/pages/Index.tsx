
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Laptop, 
  Smartphone, 
  Headphones, 
  Monitor, 
  Camera,
  ChevronRight,
  Star,
  Truck,
  ShieldCheck,
  CreditCard,
  MessageCircle
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/mockProducts";

const Index = () => {
  // Get featured products (first 4 products with discount or new status)
  const featuredProducts = products
    .filter(product => product.isNew || product.discount)
    .slice(0, 4);

  // Popular categories
  const categories = [
    {
      title: "Laptops",
      icon: <Laptop size={24} />,
      path: "/store?category=laptops",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
    },
    {
      title: "Smartphones",
      icon: <Smartphone size={24} />,
      path: "/store?category=smartphones",
      imageUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
    },
    {
      title: "Accessories",
      icon: <Headphones size={24} />,
      path: "/store?category=accessories",
      imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80"
    },
    {
      title: "TVs",
      icon: <Monitor size={24} />,
      path: "/store?category=tvs",
      imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
    },
    {
      title: "Cameras",
      icon: <Camera size={24} />,
      path: "/store?category=cameras",
      imageUrl: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Fast Shipping",
      description: "Free 2-day delivery on all orders over $50",
      icon: <Truck className="text-blue-500" size={24} />
    },
    {
      title: "Warranty Protection",
      description: "1-year warranty on all products",
      icon: <ShieldCheck className="text-blue-500" size={24} />
    },
    {
      title: "Secure Payments",
      description: "Multiple secure payment methods",
      icon: <CreditCard className="text-blue-500" size={24} />
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it",
      icon: <MessageCircle className="text-blue-500" size={24} />
    }
  ];

  // Customer reviews
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Excellent shopping experience! The product came exactly as described and shipping was faster than expected.",
      date: "August 15, 2023"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Great selection of products at competitive prices. Customer service was responsive when I had questions.",
      date: "September 3, 2023"
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 5,
      text: "This is now my go-to electronics store! The website is easy to navigate and checkout was a breeze.",
      date: "October 21, 2023"
    }
  ];

  // Generate star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find the Perfect Electronics for Your Lifestyle
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Shop the latest tech gadgets, laptops, smartphones, and accessories with free shipping and easy returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  <Link to="/store">
                    <ShoppingBag size={20} className="mr-2" />
                    Shop Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  <Link to="/store?category=new">
                    New Arrivals
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt="Latest electronics"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg shadow-lg">
                Up to 40% Off
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our extensive selection of electronic products across various categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">{category.icon}</span>
                    <span className="font-medium">{category.title}</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/store" className="text-blue-600 hover:text-blue-800 flex items-center">
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                discount={product.discount}
                rating={product.rating}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read trusted reviews from our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our wide range of electronics and find exactly what you're looking for.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50"
          >
            <Link to="/store">
              <ShoppingBag size={20} className="mr-2" />
              Shop Now
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

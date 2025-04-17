import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ShoppingCart, 
  User, 
  Menu, 
  Search, 
  LogOut, 
  LogIn,
  UserPlus
} from "lucide-react";

const Header = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();  // To access the current location
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/store?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Function to handle the Backspace key press
    const handleBackspace = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        // Check if the current path is one of the store or related pages
        const isStorePage =
          location.pathname.includes("/store") || location.pathname === "/store";

        if (isStorePage) {
          // Redirect to the main page (home)
          navigate("/");
        }
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleBackspace);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("keydown", handleBackspace);
    };
  }, [location.pathname, navigate]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            ElectroShop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/store" className="text-gray-700 hover:text-blue-600 transition">
              Shop
            </Link>
            <Link to="/store?category=laptops" className="text-gray-700 hover:text-blue-600 transition">
              Laptops
            </Link>
            <Link to="/store?category=smartphones" className="text-gray-700 hover:text-blue-600 transition">
              Smartphones
            </Link>
            <Link to="/store?category=accessories" className="text-gray-700 hover:text-blue-600 transition">
              Accessories
            </Link>
          </nav>

          {/* Search Form - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none w-full focus:outline-none px-2 py-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="p-1">
              <Search size={20} className="text-gray-500" />
            </button>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative p-2">
              <ShoppingCart size={24} className="text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <Button variant="ghost" className="p-2">
                  <User size={24} className="text-gray-700" />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    Signed in as <span className="font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={() => logout()}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut size={16} className="mr-2" /> Sign out
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate("/login")}
                  className="flex items-center"
                >
                  <LogIn size={16} className="mr-1" /> Login
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={() => navigate("/register")}
                  className="flex items-center"
                >
                  <UserPlus size={16} className="mr-1" /> Register
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={toggleMobileMenu}>
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          {/* Search Form - Mobile */}
          <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-3 py-1 my-4">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none w-full focus:outline-none px-2 py-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="p-1">
              <Search size={20} className="text-gray-500" />
            </button>
          </form>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-3 py-3 border-t border-gray-200">
            <Link to="/store" className="text-gray-700 hover:text-blue-600 transition py-1">
              Shop All
            </Link>
            <Link to="/store?category=laptops" className="text-gray-700 hover:text-blue-600 transition py-1">
              Laptops
            </Link>
            <Link to="/store?category=smartphones" className="text-gray-700 hover:text-blue-600 transition py-1">
              Smartphones
            </Link>
            <Link to="/store?category=accessories" className="text-gray-700 hover:text-blue-600 transition py-1">
              Accessories
            </Link>
          </nav>

          {/* Mobile Auth Buttons */}
          {!user && (
            <div className="flex flex-col space-y-2 py-3 border-t border-gray-200">
              <Button 
                variant="outline" 
                onClick={() => navigate("/login")}
                className="w-full justify-center"
              >
                <LogIn size={16} className="mr-2" /> Login
              </Button>
              <Button 
                variant="default" 
                onClick={() => navigate("/register")}
                className="w-full justify-center"
              >
                <UserPlus size={16} className="mr-2" /> Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

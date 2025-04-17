import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ElectroShop</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all electronic needs. Quality products at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/store" className="text-gray-400 hover:text-white transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/store?category=laptops" className="text-gray-400 hover:text-white transition">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/store?category=smartphones" className="text-gray-400 hover:text-white transition">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/store?category=accessories" className="text-gray-400 hover:text-white transition">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Electronic Way, Tech City, TC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">support@electroshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

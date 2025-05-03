import  { Link } from 'react-router-dom';
import { Package, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold">AgroConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted provider of quality agricultural inputs in Rwanda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-500">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary-500">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-500">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-primary-500">Fertilizers</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary-500">Seeds</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary-500">Pesticides</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary-500">Farming Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">KK 15 Ave, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">+250 788 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">info@agroconnect.rw</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} AgroConnect Rwanda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
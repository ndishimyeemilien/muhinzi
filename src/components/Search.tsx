import  { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const toggleSearch = () => {
    setIsOpen(!isOpen);
    setSearchTerm('');
    setSearchResults([]);
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const filteredResults = products.filter(product => 
      product.name.toLowerCase().includes(value.toLowerCase()) || 
      product.description.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  };
  
  const closeSearch = () => {
    setIsOpen(false);
    setSearchTerm('');
    setSearchResults([]);
  };
  
  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="relative" ref={searchRef}>
      <button 
        onClick={toggleSearch} 
        className="text-gray-600 hover:text-primary-600"
        aria-label="Search"
      >
        <SearchIcon size={20} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-screen max-w-md bg-white rounded-lg shadow-lg z-20 overflow-hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-gray-500" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-10 py-3 border-b border-gray-200 focus:outline-none"
              placeholder="Search for products..."
              autoFocus
            />
            <button
              onClick={closeSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X size={18} className="text-gray-500 hover:text-gray-700" />
            </button>
          </div>
          
          {searchResults.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {searchResults.map(product => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={closeSearch}
                  className="block hover:bg-gray-50 px-4 py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                      <p className="text-sm font-semibold text-primary-600">{product.price.toLocaleString()} RWF</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            searchTerm.trim() !== '' && (
              <div className="py-6 px-4 text-center text-gray-500">
                <p>No products found matching "{searchTerm}"</p>
              </div>
            )
          )}
          
          {searchTerm.trim() === '' && (
            <div className="py-4 px-4">
              <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSearchTerm('fertilizer')}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                >
                  Fertilizer
                </button>
                <button 
                  onClick={() => setSearchTerm('seeds')}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                >
                  Seeds
                </button>
                <button 
                  onClick={() => setSearchTerm('organic')}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                >
                  Organic
                </button>
                <button 
                  onClick={() => setSearchTerm('pesticide')}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
                >
                  Pesticide
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
 
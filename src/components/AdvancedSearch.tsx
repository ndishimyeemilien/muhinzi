import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Filter } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';

const AdvancedSearch = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);
  const [inStock, setInStock] = useState(false);
  
  // Get min and max prices
  const maxPrice = Math.max(...products.map(product => product.price));
  
  useEffect(() => {
    setPriceRange([0, maxPrice]);
  }, [maxPrice]);
  
  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange([0, maxPrice]);
    setInStock(false);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build the query parameters
    const params = new URLSearchParams();
    
    if (searchTerm.trim()) {
      params.append('search', searchTerm.trim());
    }
    
    if (selectedCategory) {
      params.append('category', selectedCategory);
    }
    
    if (priceRange[0] > 0 || priceRange[1] < maxPrice) {
      params.append('minPrice', priceRange[0].toString());
      params.append('maxPrice', priceRange[1].toString());
    }
    
    if (inStock) {
      params.append('inStock', 'true');
    }
    
    // Navigate to products page with search params
    navigate({
      pathname: '/products',
      search: params.toString()
    });
    
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={toggleSearch}
        className="flex items-center gap-2 text-primary-600 hover:text-primary-700"
      >
        <Search size={18} />
        <span>Advanced Search</span>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between bg-primary-600 px-6 py-4 text-white">
              <h3 className="font-semibold text-lg">Advanced Search</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSearch} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 mb-1">
                    Search Term
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="searchTerm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search products..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.name.toLowerCase()}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range (0 - {priceRange[1].toLocaleString()} RWF)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>0 RWF</span>
                    <span>{priceRange[1].toLocaleString()} RWF</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="inStock"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="inStock" className="ml-2 block text-sm text-gray-700">
                    In Stock Only
                  </label>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                  >
                    Clear Filters
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <Filter size={18} />
                    <span>Apply Filters</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;
 
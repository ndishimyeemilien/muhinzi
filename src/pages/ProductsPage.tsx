import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import AdvancedSearch from '../components/AdvancedSearch';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';

const ProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const searchParam = queryParams.get('search');
  const minPriceParam = queryParams.get('minPrice');
  const maxPriceParam = queryParams.get('maxPrice');
  const inStockParam = queryParams.get('inStock');
  
  const [allProducts, setAllProducts] = useState<Product[]>(products);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPriceParam ? parseInt(minPriceParam) : 0,
    maxPriceParam ? parseInt(maxPriceParam) : 30000
  ]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    // Apply filters
    let result = allProducts;
    
    // Search term filter
    if (searchParam) {
      const searchTerms = searchParam.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerms) || 
        product.description.toLowerCase().includes(searchTerms) ||
        product.category.toLowerCase().includes(searchTerms)
      );
    }
    
    // Category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // In stock filter
    if (inStockParam === 'true') {
      result = result.filter(product => product.stock > 0);
    }
    
    setFilteredProducts(result);
  }, [searchParam, selectedCategory, priceRange, inStockParam, allProducts]);
  
  // Update filters when URL params change
  useEffect(() => {
    setSelectedCategory(categoryParam);
    
    if (minPriceParam || maxPriceParam) {
      setPriceRange([
        minPriceParam ? parseInt(minPriceParam) : 0,
        maxPriceParam ? parseInt(maxPriceParam) : 30000
      ]);
    }
  }, [categoryParam, minPriceParam, maxPriceParam]);
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange([priceRange[0], value]);
  };
  
  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 30000]);
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="container-custom py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">{searchParam ? `Search Results for "${searchParam}"` : 'Our Products'}</h1>
        <AdvancedSearch />
      </div>
      
      <div className="lg:flex gap-8">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={toggleFilters}
            className="w-full btn btn-outline flex items-center justify-center gap-2"
          >
            <Filter size={18} />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>
        
        {/* Filters sidebar - desktop & mobile */}
        <div 
          className={`
            ${showFilters ? 'block' : 'hidden'} 
            lg:block lg:w-64 mb-6 lg:mb-0
          `}
        >
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Clear All
              </button>
            </div>
            
            {/* Categories filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="all" 
                    name="category" 
                    checked={selectedCategory === null} 
                    onChange={() => handleCategoryChange(null)}
                    className="w-4 h-4 text-primary-600"
                  />
                  <label htmlFor="all" className="ml-2 text-gray-700">All Products</label>
                </div>
                
                {categories.map(category => (
                  <div className="flex items-center" key={category.id}>
                    <input 
                      type="radio" 
                      id={category.name} 
                      name="category" 
                      checked={selectedCategory === category.name.toLowerCase()} 
                      onChange={() => handleCategoryChange(category.name.toLowerCase())}
                      className="w-4 h-4 text-primary-600"
                    />
                    <label htmlFor={category.name} className="ml-2 text-gray-700">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price filter */}
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="mb-2">
                <input 
                  type="range" 
                  min="0" 
                  max="30000" 
                  step="1000" 
                  value={priceRange[1]} 
                  onChange={handlePriceRangeChange}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>0 RWF</span>
                <span>{priceRange[1].toLocaleString()} RWF</span>
              </div>
            </div>
            
            {/* Mobile close button */}
            <div className="mt-6 lg:hidden">
              <button 
                onClick={toggleFilters}
                className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                <X size={16} />
                <span>Close Filters</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600 mb-4">No products found matching your criteria.</p>
              <button 
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <p className="mb-4 text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
 
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Product } from '../types';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    setProducts(getFeaturedProducts());
  }, []);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link to="/products" className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
            <span>View All</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
 
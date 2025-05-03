import  { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };
  
  return (
    <Link to={`/products/${product.id}`} className="card group">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          {product.stock < 10 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              Low Stock
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{product.category}</p>
          </div>
          <p className="font-bold text-primary-700">{product.price.toLocaleString()} RWF</p>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="w-full mt-3 btn btn-primary flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
 
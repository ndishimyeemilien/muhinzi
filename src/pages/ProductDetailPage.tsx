import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ArrowLeft, Package, Truck, Shield } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products from the same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== productId)
          .slice(0, 4);
        
        setRelatedProducts(related);
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
  }, [id]);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <p>Product not found</p>
        <Link to="/products" className="btn btn-primary mt-4">
          Back to Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8">
      <Link to="/products" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6">
        <ArrowLeft size={18} />
        <span>Back to Products</span>
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="p-6 md:w-1/2">
            <div className="mb-4">
              <span className="text-sm text-gray-500 capitalize">{product.category}</span>
              <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            </div>
            
            <div className="mb-6">
              <p className="text-2xl font-bold text-primary-700">
                {product.price.toLocaleString()} RWF
              </p>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={product.stock > 0 ? 'text-green-700' : 'text-red-700'}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-md"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <input 
                  type="number" 
                  min="1" 
                  max={product.stock} 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md"
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary w-full py-3"
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  Quality assured: RICA certified products
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  Fast delivery within Rwanda (1-3 business days)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  Secure payment methods including Mobile Money and Bank Transfer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
 
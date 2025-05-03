import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, ArrowLeft, Trash, Image } from 'lucide-react';
import AdminLayout from '../components/AdminLayout';
import { getProductById, products } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';

const AdminProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  const defaultProduct: Product = {
    id: 0,
    name: '',
    category: 'fertilizers',
    price: 0,
    image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBzdXBwbGllcyUyMGZlcnRpbGl6ZXJ8ZW58MHx8fHwxNzQ2MTU4NjI0fDA&ixlib=rb-4.0.3',
    description: '',
    stock: 0,
    featured: false
  };
  
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (isEditMode && id) {
      const productId = parseInt(id);
      const existingProduct = getProductById(productId);
      
      if (existingProduct) {
        setProduct(existingProduct);
      } else {
        navigate('/admin/products');
      }
    }
  }, [id, isEditMode, navigate]);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!product.name.trim()) {
      newErrors.name = 'Product name is required';
    }
    
    if (!product.description.trim()) {
      newErrors.description = 'Product description is required';
    }
    
    if (product.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }
    
    if (product.stock < 0) {
      newErrors.stock = 'Stock cannot be negative';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to save the product
      if (isEditMode) {
        // Update existing product
        console.log('Updating product:', product);
      } else {
        // Create new product
        const newProduct = {
          ...product,
          id: Math.max(...products.map(p => p.id)) + 1
        };
        console.log('Creating product:', newProduct);
      }
      
      setIsSubmitting(false);
      navigate('/admin/products');
    }, 500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setProduct(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    setProduct(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  return (
    <AdminLayout title={isEditMode ? 'Edit Product' : 'Add New Product'}>
      <div className="mb-6">
        <button
          onClick={() => navigate('/admin/products')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
        >
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.name.toLowerCase()}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                  Price (RWF)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.price ? 'border-red-500' : 'border-gray-300'
                  }`}
                  min="0"
                  step="500"
                />
                {errors.price && (
                  <p className="text-red-600 text-sm mt-1">{errors.price}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="stock" className="block text-gray-700 font-medium mb-2">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.stock ? 'border-red-500' : 'border-gray-300'
                  }`}
                  min="0"
                  step="1"
                />
                {errors.stock && (
                  <p className="text-red-600 text-sm mt-1">{errors.stock}</p>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.description && (
                  <p className="text-red-600 text-sm mt-1">{errors.description}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={product.image}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter a URL for the product image
                </p>
              </div>
              
              <div className="flex items-center">
                <div>
                  {product.image && (
                    <img
                      src={product.image}
                      alt="Product preview"
                      className="h-20 w-20 object-cover rounded-md"
                    />
                  )}
                  {!product.image && (
                    <div className="h-20 w-20 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50">
                      <Image size={24} className="text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={product.featured || false}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-gray-700">
                  Featured Product
                </label>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-3 bg-gray-50 flex justify-between">
            {isEditMode && (
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this product?')) {
                    // Delete product logic would go here
                    navigate('/admin/products');
                  }
                }}
                className="flex items-center gap-2 text-red-600 hover:text-red-800"
              >
                <Trash size={18} />
                <span>Delete Product</span>
              </button>
            )}
            
            <div className="flex gap-3 ml-auto">
              <button
                type="button"
                onClick={() => navigate('/admin/products')}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary flex items-center gap-2"
                disabled={isSubmitting}
              >
                <Save size={18} />
                <span>{isSubmitting ? 'Saving...' : 'Save Product'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminProductForm;
 
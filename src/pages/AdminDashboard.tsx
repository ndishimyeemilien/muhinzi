import  { useState, useEffect } from 'react';
import { Package, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import AdminLayout from '../components/AdminLayout';
import { products } from '../data/products';

// Mock data
const DASHBOARD_DATA = {
  totalProducts: products.length,
  totalOrders: 56,
  totalCustomers: 124,
  revenue: 2350000, // RWF
  recentOrders: [
    { id: 'ORD-001', customer: 'John Muhire', date: '2023-05-10', amount: 45000, status: 'Delivered' },
    { id: 'ORD-002', customer: 'Alice Uwase', date: '2023-05-09', amount: 78000, status: 'Processing' },
    { id: 'ORD-003', customer: 'Eric Mugisha', date: '2023-05-08', amount: 32000, status: 'Pending' },
    { id: 'ORD-004', customer: 'Marie Niyigena', date: '2023-05-07', amount: 51000, status: 'Delivered' },
  ],
  topProducts: [
    { id: 1, name: 'NPK 17-17-17 Fertilizer', sales: 42, revenue: 1050000 },
    { id: 2, name: 'Certified Maize Seeds', sales: 38, revenue: 190000 },
    { id: 4, name: 'Organic Compost', sales: 35, revenue: 280000 },
    { id: 8, name: 'Irish Potato Seeds', sales: 30, revenue: 270000 },
  ]
};

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(DASHBOARD_DATA);
  
  // This would be a real API call in a production app
  useEffect(() => {
    // Simulate loading data
    const loadData = () => {
      setDashboardData(DASHBOARD_DATA);
    };
    
    loadData();
  }, []);
  
  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Products</p>
              <h3 className="text-2xl font-bold mt-1">{dashboardData.totalProducts}</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Orders</p>
              <h3 className="text-2xl font-bold mt-1">{dashboardData.totalOrders}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Customers</p>
              <h3 className="text-2xl font-bold mt-1">{dashboardData.totalCustomers}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold mt-1">{dashboardData.revenue.toLocaleString()} RWF</h3>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold">Recent Orders</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData.recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {order.amount.toLocaleString()} RWF
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-3 border-t border-gray-200">
            <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
              View All Orders
            </a>
          </div>
        </div>
        
        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold">Top Selling Products</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Units Sold
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData.topProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {product.sales} units
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {product.revenue.toLocaleString()} RWF
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-3 border-t border-gray-200">
            <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
              View All Products
            </a>
          </div>
        </div>
      </div>
      
      {/* Analytics Graph Placeholder */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">Sales Analytics</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center text-gray-500">
          <p>Sales analytics graph would go here</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
 
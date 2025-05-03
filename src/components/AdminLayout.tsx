import  { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  Settings, 
  Home,
  LayoutGrid, 
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const { logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex-shrink-0 hidden md:block">
        <div className="p-4 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary-500" />
            <span className="text-lg font-bold">AgroConnect</span>
          </Link>
        </div>
        
        <nav className="p-4">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Main</p>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/admin" 
                end
                className={({ isActive }) => `
                  flex items-center gap-3 p-2 rounded-md transition-colors 
                  ${isActive ? 'bg-gray-800 text-primary-500' : 'text-gray-300 hover:bg-gray-800'}
                `}
              >
                <LayoutGrid size={18} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/products"
                className={({ isActive }) => `
                  flex items-center gap-3 p-2 rounded-md transition-colors 
                  ${isActive ? 'bg-gray-800 text-primary-500' : 'text-gray-300 hover:bg-gray-800'}
                `}
              >
                <Package size={18} />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
                <ShoppingCart size={18} />
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
                <Users size={18} />
                <span>Customers</span>
              </a>
            </li>
          </ul>
          
          <p className="text-xs uppercase tracking-wider text-gray-500 mt-6 mb-2">System</p>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
                <Settings size={18} />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
                <Home size={18} />
                <span>Store Front</span>
              </Link>
            </li>
            <li>
              <button 
                onClick={() => logout()}
                className="flex items-center gap-3 p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors w-full text-left"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            
            {/* Mobile menu and user dropdown would go here */}
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
 
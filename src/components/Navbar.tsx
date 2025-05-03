import  { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, Package, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Search from './Search';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  
  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-primary-800">AgroConnect</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700 hover:text-primary-600"
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700 hover:text-primary-600"
                }
              >
                Products
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700 hover:text-primary-600"
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700 hover:text-primary-600"
                }
              >
                Contact
              </NavLink>
              {isAdmin() && (
                <NavLink 
                  to="/admin" 
                  className={({ isActive }) => 
                    isActive ? "font-semibold text-primary-600" : "text-gray-700 hover:text-primary-600"
                  }
                >
                  Admin
                </NavLink>
              )}
            </nav>

            <div className="flex items-center gap-4">
              <Search />
              <Link to="/cart" className="relative">
                <ShoppingCart size={20} className="text-gray-600 hover:text-primary-600" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              
              {/* User menu */}
              {user ? (
                <div className="relative">
                  <button 
                    onClick={toggleUserMenu}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary-600"
                  >
                    <User size={20} />
                    <span className="text-sm font-medium hidden sm:block">
                      {user.name}
                    </span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      {isAdmin() && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Search />
            <Link to="/cart" className="relative">
              <ShoppingCart size={20} className="text-gray-600" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-screen w-64 bg-white shadow-lg">
            <div className="p-4 flex justify-end">
              <button onClick={closeMenu}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <nav className="px-4 py-2 flex flex-col gap-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700"
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700"
                }
                onClick={closeMenu}
              >
                Products
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700"
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "font-semibold text-primary-600" : "text-gray-700"
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
              <Link to="/cart" className="flex items-center gap-2 text-gray-700" onClick={closeMenu}>
                <ShoppingCart size={18} />
                <span>Cart ({getTotalItems()})</span>
              </Link>
              
              {user ? (
                <>
                  {isAdmin() && (
                    <NavLink 
                      to="/admin" 
                      className={({ isActive }) => 
                        isActive ? "font-semibold text-primary-600" : "text-gray-700"
                      }
                      onClick={closeMenu}
                    >
                      Admin Dashboard
                    </NavLink>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                    className="flex items-center gap-2 text-gray-700 mt-2"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => 
                    isActive ? "font-semibold text-primary-600" : "text-gray-700"
                  }
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 
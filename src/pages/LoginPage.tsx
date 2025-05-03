import  { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const { login, error, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const loginAsAdmin = async () => {
    try {
      await login('admin@agroconnect.rw', 'admin123');
      navigate('/admin', { replace: true });
    } catch (err) {
      console.error('Admin login failed:', err);
    }
  };

  const loginAsUser = async () => {
    try {
      await login('user@example.com', 'password123');
      navigate('/', { replace: true });
    } catch (err) {
      console.error('User login failed:', err);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-bold text-center mb-6">Login to AgroConnect</h1>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-500" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-500" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="text-primary-600 hover:text-primary-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary py-2 flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  'Logging in...'
                ) : (
                  <>
                    <LogIn size={18} />
                    <span>Login</span>
                  </>
                )}
              </button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary-600 hover:text-primary-500 font-medium">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            
            <div className="mt-6 border-t border-gray-200 pt-4">
              <button
                type="button"
                onClick={() => setShowDemo(!showDemo)}
                className="text-primary-600 hover:text-primary-500 text-sm font-medium w-full text-center"
              >
                {showDemo ? 'Hide Demo Accounts' : 'Show Demo Accounts'}
              </button>
              
              {showDemo && (
                <div className="mt-4 space-y-3">
                  <button
                    onClick={loginAsAdmin}
                    className="w-full btn btn-outline py-2 flex items-center justify-center gap-2"
                  >
                    Login as Admin
                  </button>
                  <button
                    onClick={loginAsUser}
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md py-2 flex items-center justify-center gap-2"
                  >
                    Login as Customer
                  </button>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    <p>Admin: admin@agroconnect.rw / admin123</p>
                    <p>User: user@example.com / password123</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
 
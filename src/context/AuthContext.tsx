import  { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define User type
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

// Mock admin user for demonstration
const ADMIN_USER = {
  id: 1,
  name: 'Admin User',
  email: 'admin@agroconnect.rw',
  role: 'admin' as const
};

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for stored user on initialization
  useEffect(() => {
    const storedUser = localStorage.getItem('agroconnect_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      // For demo, we're allowing admin login with fixed credentials
      // and simulating user login with any other credentials
      
      if (email === 'admin@agroconnect.rw' && password === 'admin123') {
        setUser(ADMIN_USER);
        localStorage.setItem('agroconnect_user', JSON.stringify(ADMIN_USER));
      } else {
        // Mock user creation for non-admin
        const mockUser = {
          id: Math.floor(Math.random() * 1000) + 2,
          name: email.split('@')[0],
          email,
          role: 'user' as const
        };
        
        setUser(mockUser);
        localStorage.setItem('agroconnect_user', JSON.stringify(mockUser));
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      // For demo, we're just creating a user object
      const newUser = {
        id: Math.floor(Math.random() * 1000) + 2,
        name,
        email,
        role: 'user' as const
      };
      
      setUser(newUser);
      localStorage.setItem('agroconnect_user', JSON.stringify(newUser));
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('agroconnect_user');
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        login,
        register,
        logout,
        isAdmin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
 
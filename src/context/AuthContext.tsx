import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name: string) => void;
  logout: () => void;
  signup: (email: string, name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('glowskin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, name: string) => {
    const userData: User = { 
      id: Math.random().toString(36).substr(2, 9), 
      email, 
      name, 
      role: 'customer' 
    };
    setUser(userData);
    localStorage.setItem('glowskin_user', JSON.stringify(userData));
    localStorage.setItem('glowskin_token', 'mock_token_' + Date.now());
  };

  const signup = (email: string, name: string) => {
    const userData: User = { 
      id: Math.random().toString(36).substr(2, 9), 
      email, 
      name, 
      role: 'customer' 
    };
    setUser(userData);
    localStorage.setItem('glowskin_user', JSON.stringify(userData));
    localStorage.setItem('glowskin_token', 'mock_token_' + Date.now());
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('glowskin_user');
    localStorage.removeItem('glowskin_token');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, signup }}>
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

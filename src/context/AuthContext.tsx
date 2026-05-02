import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { supabase, signUp, signIn, signOut, getProfile } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signup: (email: string, password: string, fullName: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data: { user: authUser } } = await supabase.auth.getUser();
        
        if (authUser) {
          const { data: profile } = await getProfile(authUser.id);
          
          if (profile) {
            setUser({
              id: authUser.id,
              email: authUser.email!,
              name: profile.full_name || authUser.email!,
              phone: profile.phone,
              role: profile.role || 'customer',
            });
          }
        }
      } catch (error) {
        console.error('Auth init error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const { data: profile } = await getProfile(session.user.id);
          
          setUser({
            id: session.user.id,
            email: session.user.email!,
            name: profile?.full_name || session.user.email!,
            phone: profile?.phone,
            role: profile?.role || 'customer',
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const signup = async (email: string, password: string, fullName: string) => {
    const { data, error } = await signUp(email, password, fullName);
    
    if (!error && data?.user && data?.session) {
      // Profile is created by DB trigger, we just set the local user state
      setUser({
        id: data.user.id,
        email: data.user.email!,
        name: fullName,
        role: 'customer',
      });
    }
    
    return { data, error };
  };

  const login = async (email: string, password: string) => {
    const { data, error } = await signIn(email, password);
    
    if (!error && data.user) {
      const { data: profile } = await getProfile(data.user.id);
      
      setUser({
        id: data.user.id,
        email: data.user.email!,
        name: profile?.full_name || email,
        phone: profile?.phone,
        role: profile?.role || 'customer',
      });
    }
    
    return { error };
  };

  const logout = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

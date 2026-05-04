import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { supabase } from './supabaseClient';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signup: (email: string, name: string) => void;
  login: (email: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial check
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          // Set basic user immediately
          const basicUser: User = {
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.full_name || 'User',
            role: 'customer'
          };
          setUser(basicUser);
          setIsLoading(false);

          // Fetch profile in background
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (profile) {
            setUser({
              ...basicUser,
              name: profile.name || basicUser.name,
              role: profile.role || 'customer',
              phone: profile.phone,
              preferences: profile.preferences
            });
          }
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Session check failed:', error);
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Set basic user immediately to unlock UI
        const basicUser: User = {
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.full_name || 'User',
          role: 'customer'
        };
        setUser(basicUser);
        setIsLoading(false);

        // Fetch profile in background ONLY if it's a relevant event (like sign in)
        // or just always do it as it's non-blocking now
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profile) {
          setUser({
            ...basicUser,
            name: profile.name || basicUser.name,
            role: profile.role || 'customer',
            phone: profile.phone,
            preferences: profile.preferences
          });
        }
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = (email: string, name: string) => {
    // This is now handled by the onAuthStateChange listener
    // But we can keep it for immediate UI feedback if needed
    // Actually, onAuthStateChange is usually fast enough.
  };

  const signup = (email: string, name: string) => {
    // This is now handled by the onAuthStateChange listener
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, signup }}>
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

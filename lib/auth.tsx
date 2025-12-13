'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from './api';

interface User {
  id: string;
  email: string;
  role: 'admin' | 'staff' | 'customer';
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  register: (data: { email: string; password: string; firstName: string; lastName: string }) => Promise<{ error?: string }>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing token and fetch user
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await authApi.me();
      if (response.data) {
        setUser(response.data.user);
      } else {
        // Token invalid, clear storage
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
      }
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authApi.login(email, password);
      if (response.data) {
        localStorage.setItem('token', response.data.token);
        if (response.data.refreshToken) {
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        setUser(response.data.user);

        // Redirect based on role
        if (response.data.user.role === 'admin') {
          router.push('/portal/admin/dashboard');
        } else if (response.data.user.role === 'staff') {
          router.push('/portal/staff/dashboard');
        } else {
          router.push('/portal/customer/dashboard');
        }

        return {};
      } else {
        return { error: response.error || 'Login failed' };
      }
    } catch (error) {
      return { error: 'Network error' };
    }
  };

  const register = async (data: { email: string; password: string; firstName: string; lastName: string }) => {
    try {
      const response = await authApi.register(data);
      if (response.data) {
        localStorage.setItem('token', response.data.token);
        if (response.data.refreshToken) {
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        setUser(response.data.user);
        router.push('/portal/customer/dashboard');
        return {};
      } else {
        return { error: response.error || 'Registration failed' };
      }
    } catch (error) {
      return { error: 'Network error' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setUser(null);
    router.push('/portal/login');
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return;

    try {
      const response = await authApi.refresh(refreshToken);
      if (response.data) {
        localStorage.setItem('token', response.data.token);
        if (response.data.refreshToken) {
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
      } else {
        // Refresh failed, logout
        logout();
      }
    } catch (error) {
      logout();
    }
  };

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout, refreshToken }}>
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


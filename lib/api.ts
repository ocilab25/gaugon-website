// API Client for Backend Communication

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = typeof window !== 'undefined' 
      ? localStorage.getItem('token') 
      : null;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || 'Request failed' };
      }

      return { data };
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Network error' };
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  async put<T>(endpoint: string, body?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const api = new ApiClient(API_URL);

// Auth API helpers
export const authApi = {
  login: (email: string, password: string) =>
    api.post<{ token: string; refreshToken: string; user: any }>('/auth/login', { email, password }),
  
  register: (data: { email: string; password: string; firstName: string; lastName: string }) =>
    api.post<{ token: string; refreshToken: string; user: any }>('/auth/register', data),
  
  refresh: (refreshToken: string) =>
    api.post<{ token: string; refreshToken: string }>('/auth/refresh', { refreshToken }),
  
  logout: () => api.post('/auth/logout'),
  
  me: () => api.get<any>('/auth/me'),
};

// Admin API helpers
export const adminApi = {
  getCustomers: () => api.get<{ customers: any[] }>('/admin/customers'),
  getCustomer: (id: string) => api.get<{ customer: any }>(`/admin/customers/${id}`),
  getStaff: () => api.get<{ staff: any[] }>('/admin/staff'),
  createStaff: (data: any) => api.post<{ staff: any }>('/admin/staff', data),
  getAdmins: () => api.get<{ admins: any[] }>('/admin/admins'),
};

// Customer API helpers
export const customerApi = {
  getProfile: () => api.get<{ customer: any }>('/customer/profile'),
  updateProfile: (data: any) => api.put<{ customer: any }>('/customer/profile', data),
  getSubscription: () => api.get<{ subscription: any }>('/customer/subscription'),
};

// Subscription API helpers
export const subscriptionApi = {
  getAll: () => api.get<{ subscriptions: any[] }>('/subscriptions'),
  getByCustomer: (customerId: string) => api.get<{ subscriptions: any[] }>(`/subscriptions/${customerId}`),
  create: (data: any) => api.post<{ subscription: any }>('/subscriptions', data),
  update: (id: string, data: any) => api.put<{ subscription: any }>(`/subscriptions/${id}`, data),
};


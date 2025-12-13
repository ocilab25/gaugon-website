'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  UserCog, 
  CreditCard, 
  TrendingUp,
  Settings,
  HelpCircle,
  User,
  FileText,
  HeadphonesIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';
import { Badge } from '@/components/ui/badge';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  roles: ('admin' | 'staff' | 'customer')[];
}

const adminNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/portal/admin/dashboard', icon: LayoutDashboard, roles: ['admin'] },
  { label: 'Analytics', href: '/portal/admin/analytics', icon: BarChart3, roles: ['admin'] },
  { label: 'Customers', href: '/portal/admin/customers', icon: Users, roles: ['admin'] },
  { label: 'Staff Management', href: '/portal/admin/staff', icon: UserCog, roles: ['admin'] },
  { label: 'Subscriptions', href: '/portal/admin/subscriptions', icon: CreditCard, roles: ['admin'] },
  { label: 'Revenue', href: '/portal/admin/revenue', icon: TrendingUp, roles: ['admin'] },
  { label: 'Settings', href: '/portal/admin/settings', icon: Settings, roles: ['admin'] },
  { label: 'Help Center', href: '/portal/admin/help', icon: HelpCircle, roles: ['admin'] },
];

const staffNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/portal/staff/dashboard', icon: LayoutDashboard, roles: ['staff'] },
  { label: 'My Customers', href: '/portal/staff/customers', icon: Users, roles: ['staff'] },
  { label: 'Subscriptions', href: '/portal/staff/subscriptions', icon: CreditCard, roles: ['staff'] },
  { label: 'Reports', href: '/portal/staff/reports', icon: FileText, roles: ['staff'] },
  { label: 'Settings', href: '/portal/staff/settings', icon: Settings, roles: ['staff'] },
];

const customerNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/portal/customer/dashboard', icon: LayoutDashboard, roles: ['customer'] },
  { label: 'My Profile', href: '/portal/customer/profile', icon: User, roles: ['customer'] },
  { label: 'My Subscription', href: '/portal/customer/subscription', icon: CreditCard, roles: ['customer'] },
  { label: 'Usage & Analytics', href: '/portal/customer/usage', icon: BarChart3, roles: ['customer'] },
  { label: 'Support', href: '/portal/customer/support', icon: HeadphonesIcon, roles: ['customer'] },
  { label: 'Settings', href: '/portal/customer/settings', icon: Settings, roles: ['customer'] },
];

export function PortalSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  if (!user) return null;

  const getNavItems = () => {
    if (user.role === 'admin') return adminNavItems;
    if (user.role === 'staff') return staffNavItems;
    return customerNavItems;
  };

  const navItems = getNavItems();

  return (
    <div className="portal-sidebar fixed left-0 top-0 h-screen w-64 bg-[#1A1A1A] border-r border-[#2A2A2A] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#2A2A2A]">
        <Link href="/portal" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-white font-semibold">Gaugon Portal</span>
        </Link>
      </div>

      {/* User Account */}
      <div className="p-4 border-b border-[#2A2A2A]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#242424] flex items-center justify-center border border-[#2A2A2A]">
            <span className="text-[#A0A0A0] text-lg">#</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium text-sm truncate">
              {user.role === 'customer' && (user as any).profile 
                ? `${(user as any).profile.firstName} ${(user as any).profile.lastName}`
                : user.email.split('@')[0]}
            </div>
            <div className="text-[#A0A0A0] text-xs truncate">{user.email}</div>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-600"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "portal-nav-item flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                isActive && "active"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <Badge variant="success" className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}


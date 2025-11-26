import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  CreditCard, 
  Star, 
  HelpCircle,
  Calculator,
  Target,
  ShoppingBag,
  BarChart3,
  Gift,
  Users,
  Settings, 
  Bell,
  User
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: ShoppingCart, badge: '16' },
    { id: 'products', label: 'Products', icon: Package, badge: '63' },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'supports', label: 'Support', icon: HelpCircle },
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'selling-fees', label: 'Selling Fees Calculator', icon: Calculator },
    { id: 'credit-card', label: 'Credit Card Management', icon: CreditCard },
    { id: 'scoring', label: 'Scoring', icon: Target },
    { id: 'abandoned-cart', label: 'Abandoned Cart', icon: ShoppingBag },
    { id: 'sales-report', label: 'Sales Report', icon: BarChart3 },
    { id: 'promotion', label: 'Promotion', icon: Gift },
    { id: 'membership', label: 'Membership', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-[#00666B] text-white min-h-screen fixed flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-gray-800 flex-shrink-0">
        <h1 className="text-lg font-bold">Marketplace</h1>
        <p className="text-gray-400 text-xs">Seller Dashboard</p>
      </div>

      {/* Navigation - Scrollable */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#005257] text-sm ${
                    activeTab === item.id
                      ? 'bg-[#008b91] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="px-4 py-3 border-t border-gray-800 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <User size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">John Seller</p>
            <p className="text-gray-400 text-xs truncate">Premium Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
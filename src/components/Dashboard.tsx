import React, { useState } from 'react';
import {
  ShoppingCart,
  Package,
  TrendingUp,
  Star,
  ChevronDown,
  DollarSign,
  Users,
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  Eye
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 7 days');
  const [dateRange, setDateRange] = useState('Jan 1-Dec 31, 2023');

  const salesData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 72 },
    { month: 'Mar', value: 78 },
    { month: 'Apr', value: 68 },
    { month: 'May', value: 85 },
    { month: 'Jun', value: 95 },
    { month: 'Jul', value: 88 },
    { month: 'Aug', value: 92 },
    { month: 'Sep', value: 87 },
    { month: 'Oct', value: 90 },
    { month: 'Nov', value: 98 },
    { month: 'Dec', value: 85 }
  ];

  const latestOrders = [
    {
      id: '100000001',
      date: 'Jun 14, 2024 8:45 PM',
      customer: 'John Doe',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$140.00',
      purchaseTotal: '$150.00',
      tax: 'test tax',
      status: 'Processing'
    },
    {
      id: '100000002',
      date: 'Jun 14, 2024 7:30 PM',
      customer: 'Jane Smith',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$120.00',
      purchaseTotal: '$130.00',
      tax: 'test tax',
      status: 'Completed'
    },
    {
      id: '100000003',
      date: 'May 16, 2024 6:15 PM',
      customer: 'Mike Johnson',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$100.00',
      purchaseTotal: '$110.00',
      tax: 'test tax',
      status: 'Completed'
    },
    {
      id: '100000004',
      date: 'May 15, 2024 5:20 PM',
      customer: 'Sarah Wilson',
      products: ['Cheesecake Slice Red Velvet Cake 80 g/2.82 oz', 'Cheesecake Slice Red Velvet Cake', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$85.00',
      purchaseTotal: '$95.00',
      tax: 'test tax',
      status: 'Processing'
    }
  ];

  const recentProducts = [
    {
      id: 1,
      name: 'Cheesecake Slice Red Velvet',
      price: '$15.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-REDVELVET',
      createdAt: 'Jul 31, 2024 8:30 PM',
      quantity: 'Catalog, Search',
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      name: 'test product',
      price: '$10.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-TEST',
      createdAt: 'Jul 31, 2024 10:45 AM',
      quantity: 'Catalog, Search',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      name: 'Ring - Accessories',
      price: '$25.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-RING',
      createdAt: 'Jul 30, 2024 3:20 PM',
      quantity: 'Catalog, Search',
      image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      name: 'Bag - Women Product',
      price: '$45.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-BAG',
      createdAt: 'Jul 29, 2024 11:10 AM',
      quantity: 'Catalog, Search',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const sellerTickets = [
    {
      id: '10000016',
      message: 'Help Req',
      department: 'buyer_dept',
      agentName: 'admin',
      status: 'Open',
      priority: 'Normal'
    }
  ];

  const recentTransactions = [
    {
      type: 'order',
      incomeAmount: '$250.00',
      expenseAmount: '$225.00',
      netAmount: '$25.00',
      status: 'completed',
      createdDate: '2024-06-14 04:12:06'
    },
    {
      type: 'order',
      incomeAmount: '$180.00',
      expenseAmount: '$160.00',
      netAmount: '$20.00',
      status: 'completed',
      createdDate: '2024-06-13 02:30:15'
    }
  ];

  const productReviews = [
    {
      id: 1,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Bread Product',
      reviewText: 'It is a long established fact that a reader will be distracted by the readable...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 2,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Bread ring',
      reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 3,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Red Velvet',
      reviewText: 'I recently purchased this ring and I couldn\'t be happier! The craftsmanship is a...',
      rating: 5,
      reviewSummary: 'for client'
    },
    {
      id: 4,
      customer: 'Ring',
      productSku: 'ZUUROAD1701-REDVELVET',
      product: 'Red Velvet',
      reviewText: 'I recently purchased this ring and I couldn\'t be happier! The craftsmanship is a...',
      rating: 5,
      reviewSummary: 'for client'
    }
  ];

  const shippingOrders = [
    {
      id: '100000002',
      customer: 'ZUUROAD02',
      shipment: 'ZUUROAD02',
      date: 'Jun 14, 2024 8:45 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000003',
      customer: 'ZUUROAD03',
      shipment: 'ZUUROAD03',
      date: 'Jun 14, 2024 7:30 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000004',
      customer: 'ZUUROAD04',
      shipment: 'ZUUROAD04',
      date: 'Jun 14, 2024 6:15 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000005',
      customer: 'ZUUROAD05',
      shipment: 'ZUUROAD05',
      date: 'Jun 14, 2024 5:20 PM',
      products: ['Cheesecake Slice Red Velvet Cake 80 g/2.82 oz', 'Cheesecake Slice Red Velvet Cake', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000006',
      customer: 'ZUUROAD06',
      shipment: 'ZUUROAD06',
      date: 'Jun 14, 2024 4:10 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    }
  ];

  const transactions = [
    { id: 'MRKPL00001', customer: 'Test Customer', amount: '$150.00' },
    { id: 'MRKPL00002', customer: 'Test Customer', amount: '$89.99' },
    { id: 'MRKPL00003', customer: 'Test Customer', amount: '$75.50' }
  ];

  const activities = [
    { time: 'Jun 14', activity: 'New order received' },
    { time: 'Jun 13', activity: 'Product updated' },
    { time: 'Jun 12', activity: 'Customer inquiry' }
  ];

  const LineChart = ({ data, height = 120, color = '#3B82F6' }: { data: any[], height?: number, color?: string }) => {
    const max = Math.max(...data.map(d => d.value));
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = height - (d.value / max) * height;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width="100%" height={height} className="overflow-visible">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={points}
          vectorEffect="non-scaling-stroke"
        />
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = height - (d.value / max) * height;
          return (
            <circle
              key={i}
              cx={`${x}%`}
              cy={y}
              r="3"
              fill={color}
            />
          );
        })}
      </svg>
    );
  };

  const MultiSegmentDonutChart = () => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    const approved = 3;
    const pending = 1;
    const disapproved = 2;
    const total = approved + pending + disapproved;

    const approvedPercentage = (approved / total) * 100;
    const pendingPercentage = (pending / total) * 100;
    const disapprovedPercentage = (disapproved / total) * 100;

    const approvedDash = (approvedPercentage / 100) * circumference;
    const pendingDash = (pendingPercentage / 100) * circumference;
    const disapprovedDash = (disapprovedPercentage / 100) * circumference;

    return (
      <div className="relative w-40 h-40 mx-auto">
        <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#14B8A6"
            strokeWidth="18"
            strokeDasharray={`${approvedDash} ${circumference - approvedDash}`}
            strokeLinecap="round"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="18"
            strokeDasharray={`${pendingDash} ${circumference - pendingDash}`}
            strokeDashoffset={-approvedDash}
            strokeLinecap="round"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="#EF4444"
            strokeWidth="18"
            strokeDasharray={`${disapprovedDash} ${circumference - disapprovedDash}`}
            strokeDashoffset={-(approvedDash + pendingDash)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-xs text-gray-500">Total</div>
          <div className="text-3xl font-bold text-gray-900">{total}</div>
          <div className="text-xs text-gray-500">Products</div>
        </div>
      </div>
    );
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  const totalOrders = latestOrders.length;
  const totalProducts = recentProducts.length + 59;
  const totalRevenue = latestOrders.reduce((sum, order) => {
    const amount = parseFloat(order.purchaseTotal.replace('$', ''));
    return sum + amount;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Sales */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-lg">
              <DollarSign size={24} />
            </div>
            <div className="text-right">
              <div className="text-sm font-medium opacity-90">Total Sales</div>
              <div className="text-3xl font-bold">${totalRevenue.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex items-center text-sm opacity-90">
            <TrendingUp size={16} className="mr-1" />
            <span>+12.5% from last month</span>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-lg">
              <ShoppingCart size={24} />
            </div>
            <div className="text-right">
              <div className="text-sm font-medium opacity-90">Orders</div>
              <div className="text-3xl font-bold">{totalOrders}</div>
            </div>
          </div>
          <div className="flex items-center text-sm opacity-90">
            <TrendingUp size={16} className="mr-1" />
            <span>+8.3% from last month</span>
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-lg">
              <Package size={24} />
            </div>
            <div className="text-right">
              <div className="text-sm font-medium opacity-90">Products</div>
              <div className="text-3xl font-bold">{totalProducts}</div>
            </div>
          </div>
          <div className="flex items-center text-sm opacity-90">
            <TrendingUp size={16} className="mr-1" />
            <span>+5 new this week</span>
          </div>
        </div>
      </div>

      {/* Three Column Section: Product Status, Shop Review, Order Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-orange-500 px-6 py-4 flex items-center space-x-2">
            <Package size={20} className="text-white" />
            <h3 className="text-lg font-semibold text-white">Products Status</h3>
          </div>
          <div className="p-6">
            <MultiSegmentDonutChart />
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Approved</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">1</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Disapproved</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">2</span>
              </div>
            </div>
            <button className="mt-6 w-full px-4 py-3 bg-white text-gray-700 text-sm font-medium rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors">
              View Details
            </button>
          </div>
        </div>

        {/* Shop Review */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star size={20} className="text-yellow-400 fill-current" />
              <h3 className="text-lg font-semibold text-gray-900">Shop Review</h3>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All
            </button>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900">4.8</div>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Based on 245 reviews</p>
            </div>

            <div className="space-y-3">
              {[
                { rating: 5, count: 180, percentage: 73 },
                { rating: 4, count: 45, percentage: 18 },
                { rating: 3, count: 15, percentage: 6 },
                { rating: 2, count: 3, percentage: 1 },
                { rating: 1, count: 2, percentage: 1 }
              ].map((item) => (
                <div key={item.rating} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-12">
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                    <Star size={14} className="text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Map */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Order Locations</h3>
            <p className="text-sm text-gray-500 mt-1">Where orders are coming from</p>
          </div>
          <div className="p-6">
            <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                <path
                  d="M120,80 L150,90 L170,70 L200,75 L230,85 L260,80 L290,90 L320,95 L350,85 L380,80 L410,75 L440,70 L470,75 L500,80 L530,85 L560,90 L590,95 L620,100 L650,105 L680,110 L710,115 L740,120 M120,120 L130,140 L140,130 L150,145 L160,135 L170,150 L180,140 L190,155 L200,145 L210,160 L220,150 L230,165 L240,155 L250,170 L260,160 L270,175 L280,165 L290,180 L300,170 L310,185 L320,175 L330,190 L340,180 L350,195 L360,185 L370,200 L380,190 L390,205 L400,195 L410,210 L420,200 L430,215 L440,205 L450,220 L460,210 L470,225 L480,215 L490,230 L500,220 L510,235 L520,225 L530,240 L540,230 L550,245 L560,235 L570,250 L580,240 L590,255 L600,245 L610,260 L620,250 L630,265 L640,255 L650,270 L660,260 L670,275 L680,265 L690,280 L700,270 L710,285 L720,275 L730,290 L740,280 M100,200 L110,220 L115,215 L120,235 L125,225 L130,245 L135,235 L140,255 L145,245 L150,265 L155,255 L160,275 L165,265 L170,285 L175,275 L180,295"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                <circle cx="200" cy="150" r="5" fill="#3B82F6" className="animate-pulse" />
                <circle cx="350" cy="120" r="4" fill="#10B981" className="animate-pulse" />
                <circle cx="500" cy="180" r="6" fill="#F59E0B" className="animate-pulse" />
                <circle cx="620" cy="140" r="4" fill="#EF4444" className="animate-pulse" />
                <circle cx="280" cy="200" r="5" fill="#8B5CF6" className="animate-pulse" />
              </svg>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">United States</span>
                </div>
                <span className="font-semibold text-gray-900">1,344</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">India</span>
                </div>
                <span className="font-semibold text-gray-900">632</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">Cayman</span>
                </div>
                <span className="font-semibold text-gray-900">156</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Poland</span>
                </div>
                <span className="font-semibold text-gray-900">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Chart and Financial Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Over Time Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sales Overview</h3>
              <p className="text-sm text-gray-500 mt-1">Monthly sales performance</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">2023</span>
              </div>
            </div>
          </div>
          <div className="mt-4 relative">
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            <div className="ml-8">
              <LineChart data={salesData} height={200} color="#3B82F6" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 text-xs text-gray-500 ml-8">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500">Highest</p>
                <p className="text-lg font-bold text-gray-900">$98K</p>
                <p className="text-xs text-gray-400">November</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Lowest</p>
                <p className="text-lg font-bold text-gray-900">$65K</p>
                <p className="text-xs text-gray-400">January</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Average</p>
                <p className="text-lg font-bold text-gray-900">$83.5K</p>
                <p className="text-xs text-gray-400">Per month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Financial Summary</h3>

          {/* Earned, Withdrawn, Balance Cards */}
          <div className="space-y-4 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <ArrowUpCircle size={20} className="text-green-600" />
                <span className="text-xs font-medium text-green-700">Total Earned</span>
              </div>
              <p className="text-2xl font-bold text-green-900">$315.49</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <ArrowDownCircle size={20} className="text-red-600" />
                <span className="text-xs font-medium text-red-700">Withdrawn</span>
              </div>
              <p className="text-2xl font-bold text-red-900">$0.00</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <Wallet size={20} className="text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Balance</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">$315.49</p>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activities</h4>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500">{activity.time}</div>
                    <div className="text-sm text-gray-700">{activity.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Three Column Section: Average Order Value, Recent Transactions, Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Average Order Value */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Average Order Value</h3>
            <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
          </div>
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900">$127.50</div>
              <div className="flex items-center justify-center mt-2 text-sm text-green-600">
                <TrendingUp size={16} className="mr-1" />
                <span>+8.2% from last period</span>
              </div>
            </div>
            <div className="h-32">
              <LineChart
                data={[
                  { month: 'Week 1', value: 115 },
                  { month: 'Week 2', value: 122 },
                  { month: 'Week 3', value: 118 },
                  { month: 'Week 4', value: 135 }
                ]}
                height={120}
                color="#10B981"
              />
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Highest Order</span>
                <span className="font-semibold text-gray-900">$285.00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Lowest Order</span>
                <span className="font-semibold text-gray-900">$45.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
              <p className="text-sm text-gray-500 mt-1">Latest payments</p>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              View All
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      parseFloat(transaction.netAmount.replace('$', '')) > 0
                        ? 'bg-green-100'
                        : 'bg-red-100'
                    }`}>
                      <DollarSign size={20} className={
                        parseFloat(transaction.netAmount.replace('$', '')) > 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      } />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 capitalize">
                        {transaction.type} Transaction
                      </div>
                      <div className="text-xs text-gray-500">{transaction.createdDate}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">{transaction.netAmount}</div>
                    <div className="text-xs text-gray-500 capitalize">{transaction.status}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Net Income</span>
                <span className="text-lg font-bold text-green-600">$45.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Products by Units Sold */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
            <p className="text-sm text-gray-500 mt-1">By units sold</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: 'Cheesecake Slice Red Velvet', units: 245, revenue: '$3,917.55', image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Ring - Accessories', units: 189, revenue: '$4,912.11', image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Bag - Women Product', units: 156, revenue: '$7,174.44', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100' },
                { name: 'Test Product', units: 98, revenue: '$1,077.02', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=100' }
              ].map((product, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">
                      {product.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {product.units} units sold
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">{product.revenue}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Units</span>
                <span className="text-lg font-bold text-gray-900">688</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

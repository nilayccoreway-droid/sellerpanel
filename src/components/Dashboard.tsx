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

  const DonutChart = ({ percentage, color }: { percentage: number, color: string }) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg width="192" height="192" viewBox="0 0 192 192" className="transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="20"
          />
          <circle
            cx="96"
            cy="96"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-sm text-gray-600">Approved Products</div>
          <div className="text-4xl font-bold text-gray-900">{recentProducts.length}</div>
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

      {/* Product Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-orange-500 px-6 py-4 flex items-center space-x-2">
          <Package size={20} className="text-white" />
          <h3 className="text-lg font-semibold text-white">Products Status</h3>
        </div>
        <div className="p-8">
          <DonutChart percentage={100} color="#14B8A6" />
          <button className="mt-6 w-full px-4 py-3 bg-white text-gray-700 text-sm font-medium rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors">
            View Details
          </button>
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

      {/* Top Products - Card View */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
            <p className="text-sm text-gray-500 mt-1">Best selling products</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View All <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {product.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">SKU:</span>
                    <span className="text-xs font-medium text-gray-700">{product.sku}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Price:</span>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Eye size={16} />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <p className="text-sm text-gray-500 mt-1">Latest transaction history</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-5 border border-gray-200 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <DollarSign size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 capitalize">{transaction.type} Transaction</h4>
                    <p className="text-xs text-gray-500 mt-1">{transaction.createdDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 capitalize">
                    {transaction.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-gray-500 mb-1">Income</p>
                  <p className="text-lg font-bold text-green-600">{transaction.incomeAmount}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-200">
                  <p className="text-xs text-gray-500 mb-1">Expense</p>
                  <p className="text-lg font-bold text-red-600">{transaction.expenseAmount}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="text-xs text-gray-500 mb-1">Net Amount</p>
                  <p className="text-lg font-bold text-blue-600">{transaction.netAmount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Latest Orders</h3>
            <p className="text-sm text-gray-500 mt-1">Recent customer orders</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Products</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Total</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {latestOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="max-w-xs truncate">
                      {order.products[0]}
                      {order.products.length > 1 && ` +${order.products.length - 1} more`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.purchaseTotal}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Seller Tickets */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Latest Seller Tickets</h3>
          <p className="text-sm text-gray-500 mt-1">Support tickets and inquiries</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Ticket ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Message</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Agent</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sellerTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{ticket.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{ticket.message}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ticket.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ticket.agentName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ticket.priority}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Reply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Reviews */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Product Reviews</h3>
          <p className="text-sm text-gray-500 mt-1">Customer feedback and ratings</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Product SKU</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Review</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{review.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{review.productSku}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{review.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">{review.reviewText}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                      <span className="text-xs text-gray-500">({review.reviewSummary})</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shipping Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Shipping Orders</h3>
          <p className="text-sm text-gray-500 mt-1">Orders ready for shipment</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Shipment</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Products</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shippingOrders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.shipment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="max-w-xs truncate">
                      {order.products[0]}
                      {order.products.length > 1 && ` +${order.products.length - 1} more`}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

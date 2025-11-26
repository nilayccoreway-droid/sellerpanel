import React, { useState } from 'react';
import {
  ShoppingCart,
  Package,
  TrendingUp,
  Star,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  Users,
  DollarSign,
  BarChart3
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last year');
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

  const sessionsData = [
    { month: 'Jan', value: 320 },
    { month: 'Feb', value: 450 },
    { month: 'Mar', value: 480 },
    { month: 'Apr', value: 620 },
    { month: 'May', value: 580 },
    { month: 'Jun', value: 720 },
    { month: 'Jul', value: 850 },
    { month: 'Aug', value: 920 },
    { month: 'Sep', value: 1100 },
    { month: 'Oct', value: 1350 },
    { month: 'Nov', value: 1550 },
    { month: 'Dec', value: 1694 }
  ];

  const conversionData = [
    { month: 'Jan', value: 0.02 },
    { month: 'Feb', value: 0.03 },
    { month: 'Mar', value: 0.025 },
    { month: 'Apr', value: 0.04 },
    { month: 'May', value: 0.05 },
    { month: 'Jun', value: 0.045 },
    { month: 'Jul', value: 0.038 },
    { month: 'Aug', value: 0.055 },
    { month: 'Sep', value: 0.048 },
    { month: 'Oct', value: 0.042 },
    { month: 'Nov', value: 0.052 },
    { month: 'Dec', value: 0.06 }
  ];

  const productSales = [
    { name: 'Gross sales', value: 'PD 00' },
    { name: 'Discounts', value: 'PD 00' },
    { name: 'Returns', value: 'PD 00' },
    { name: 'Net sales', value: 'PD 00' },
    { name: 'Balance charges', value: 'PD 00' },
    { name: 'Return fees', value: 'PD 00' },
    { name: 'Taxes', value: 'PD 00' },
    { name: 'Total sales', value: 'PD 00' }
  ];

  const deviceTypes = [
    { name: 'Desktop', value: 1.6, percentage: 85, color: '#3B82F6' },
    { name: 'Mobile', value: 0.3, percentage: 15, color: '#A855F7' }
  ];

  const locationData = [
    { location: 'United States - Alpha - Generic Scams', count: 1344 },
    { location: 'United States - Alpha - None', count: 632 },
    { location: 'Cayman - Ahmedabad', count: 156 },
    { location: 'Poland - None', count: 89 },
    { location: 'India - Maharashtra - Mumbai', count: 67 }
  ];

  const referrerData = [
    { source: 'Direct - None - Generic Scams', count: 1344 },
    { source: 'Direct - None - None', count: 632 }
  ];

  const landingPages = [
    { page: 'Homepage /', count: 1256 },
    { page: 'Home - /products_preview', count: 62 },
    { page: 'Product - /products/coastal-cabin-assembly', count: 18 },
    { page: 'Collection - /collection/cabin-assembly', count: 7 },
    { page: 'Product - /products/coastal-cabin-assembly-copy', count: 3 },
    { page: 'Product - /products/home-coastal-main-single-cone-far-right-cabin', count: 2 },
    { page: 'Product - /products/home-main-single-cone-far-right-cabin', count: 2 },
    { page: 'Collection - /collection/cabin-assembly', count: 2 }
  ];

  // Latest Orders data
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

  // Recently Added Products
  const recentProducts = [
    {
      id: 1,
      name: 'Cheesecake Slice Red Velvet',
      price: '$15.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-REDVELVET',
      createdAt: 'Jul 31, 2024 8:30 PM',
      quantity: 'Catalog, Search'
    },
    {
      id: 2,
      name: 'test product',
      price: '$10.99',
      status: 'Approved',
      type: 'simple',
      sku: 'ZUUROAD1701-REDVELVET',
      createdAt: 'Jul 31, 2024 10:45 AM',
      quantity: 'Catalog, Search'
    }
  ];

  // Latest Seller Tickets
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

  // Recently Transaction
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

  // Recently Product Review
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

  // Shipping Order
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
    },
    {
      id: '100000007',
      customer: 'ZUUROAD07',
      shipment: 'ZUUROAD07',
      date: 'Jun 14, 2024 3:30 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000008',
      customer: 'ZUUROAD08',
      shipment: 'ZUUROAD08',
      date: 'Jun 14, 2024 2:45 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000009',
      customer: 'ZUUROAD09',
      shipment: 'ZUUROAD09',
      date: 'Jun 14, 2024 1:20 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    },
    {
      id: '100000010',
      customer: 'ZUUROAD10',
      shipment: 'ZUUROAD10',
      date: 'Jun 14, 2024 12:15 PM',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2']
    }
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

  const BarChart = ({ data, height = 140 }: { data: any[], height?: number }) => {
    const max = Math.max(...data.map(d => d.value));
    const barWidth = 100 / data.length;

    return (
      <svg width="100%" height={height}>
        {data.map((d, i) => {
          const barHeight = (d.value / max) * height * 0.8;
          const x = i * barWidth;
          const y = height - barHeight;
          return (
            <rect
              key={i}
              x={`${x}%`}
              y={y}
              width={`${barWidth * 0.8}%`}
              height={barHeight}
              fill="#3B82F6"
              rx="2"
            />
          );
        })}
      </svg>
    );
  };

  const DonutChart = ({ data }: { data: any[] }) => {
    const total = data.reduce((sum, d) => sum + d.percentage, 0);
    let currentAngle = -90;

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg width="192" height="192" viewBox="0 0 192 192">
          {data.map((item, index) => {
            const angle = (item.percentage / total) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = 96 + 70 * Math.cos(startRad);
            const y1 = 96 + 70 * Math.sin(startRad);
            const x2 = 96 + 70 * Math.cos(endRad);
            const y2 = 96 + 70 * Math.sin(endRad);

            const largeArcFlag = angle > 180 ? 1 : 0;

            const pathData = [
              `M 96 96`,
              `L ${x1} ${y1}`,
              `A 70 70 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              'Z'
            ].join(' ');

            return (
              <path
                key={index}
                d={pathData}
                fill={item.color}
              />
            );
          })}
          <circle cx="96" cy="96" r="45" fill="white" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-3xl font-bold text-gray-900">1.7K</div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Header Controls */}
      <div className="flex items-center justify-between bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            {selectedTimeframe}
          </button>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>{dateRange}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">EZ MKT F</span>
          </div>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800">
          New dashboard
        </button>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-4 gap-4">
        {/* Gross Sales */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Gross sales</h3>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-gray-900">PD</span>
            <span className="text-sm text-gray-500">PD</span>
          </div>
        </div>

        {/* Returning Customer Rate */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Returning customer rate</h3>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-gray-900">0%</span>
          </div>
        </div>

        {/* Orders Fulfilled */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Orders fulfilled</h3>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-gray-900">9</span>
            <span className="text-sm text-blue-600 flex items-center">
              <TrendingUp size={14} className="mr-1" />
            </span>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Orders</h3>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-gray-900">{latestOrders.length}</span>
            <span className="text-sm text-blue-600 flex items-center">
              <TrendingUp size={14} className="mr-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Total Sales Over Time */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Total sales over time</h3>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-2xl font-bold text-gray-900">PD</span>
                <span className="text-sm text-gray-500">PD</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <LineChart data={salesData} height={120} color="#3B82F6" />
          </div>
          <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
        </div>

        {/* Average Order Value */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Average order value over time</h3>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="text-2xl font-bold text-gray-900">PD</span>
                <span className="text-sm text-gray-500">PD</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <LineChart data={salesData} height={120} color="#10B981" />
          </div>
          <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
            {['Jan', 'May', 'Sep', 'Nov'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
        </div>

        {/* Total Sales Breakdown */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Total sales breakdown</h3>
          <div className="space-y-3">
            {productSales.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-blue-600">{item.name}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Sales by Channel */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Total sales by sales channel</h3>
          <div className="h-32 flex items-center justify-center text-sm text-gray-500">
            No data for this date range
          </div>
        </div>

        {/* Sales by Product */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Total sales by product</h3>
          <div className="h-32 flex items-center justify-center text-sm text-gray-500">
            No data for this date range
          </div>
        </div>

        {/* Sales by Social Referrer */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Total sales by social referrer</h3>
          <div className="h-32 flex items-center justify-center text-sm text-gray-500">
            No data for this date range
          </div>
        </div>
      </div>

      {/* Sessions and Conversion Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Sessions Over Time */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-900">Sessions over time</h3>
            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl font-bold text-gray-900">{sessionsData[sessionsData.length - 1].value}</span>
              <span className="text-sm text-gray-500">800</span>
            </div>
          </div>
          <div className="mt-4">
            <LineChart data={sessionsData} height={120} color="#06B6D4" />
          </div>
          <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
            {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-900">Conversion rate over time</h3>
            <div className="flex items-baseline space-x-2 mt-2">
              <span className="text-2xl font-bold text-gray-900">0.06%</span>
              <span className="text-sm text-gray-500">0.3%</span>
            </div>
          </div>
          <div className="mt-4">
            <LineChart data={conversionData} height={120} color="#8B5CF6" />
          </div>
          <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
            {['Jan', 'May', 'Sep', 'Nov'].map((month, i) => (
              <span key={i}>{month}</span>
            ))}
          </div>
        </div>

        {/* Conversion Breakdown */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Conversion rate breakdown</h3>
          <div className="mb-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">0.06%</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Sessions', value: '100%', subValue: '0.41%', change: '74.7%' },
              { label: 'Added to cart', value: '0.41%', subValue: '0.53%', change: '9.9%' },
              { label: 'Reached checkout', value: '0.53%', subValue: '0.06%', change: '0.6%' },
              { label: 'Completed', value: '0.06%', subValue: '', change: '' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="text-sm text-gray-900">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.value}</div>
                </div>
                {item.subValue && (
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{item.subValue}</div>
                    <div className="text-xs text-gray-500">{item.change}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <BarChart data={[{ value: 100 }, { value: 42 }, { value: 25 }, { value: 15 }]} height={80} />
          </div>
        </div>
      </div>

      {/* Device Types and Location Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Sessions by Device */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Sessions by device type</h3>
          <DonutChart data={deviceTypes} />
          <div className="mt-4 space-y-2">
            {deviceTypes.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.color }}></div>
                  <span className="text-sm text-gray-700">{device.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{device.value}K</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions by Location */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Sessions by location</h3>
          <div className="space-y-2">
            {locationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="text-sm text-gray-900 truncate">{item.location}</div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(item.count / locationData[0].count) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">{item.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions by Landing Page */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Sessions by landing page</h3>
          <div className="space-y-2">
            {landingPages.slice(0, 7).map((item, index) => (
              <div key={index} className="flex items-center justify-between py-1.5">
                <div className="flex-1 truncate">
                  <span className="text-sm text-gray-900">{item.page}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 ml-4">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - Referrers and More */}
      <div className="grid grid-cols-3 gap-4">
        {/* Sessions by Referrer */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Sessions by referrer</h3>
          <div className="space-y-3">
            {referrerData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm text-gray-900 truncate">{item.source}</div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500 rounded-full"
                        style={{ width: `${(item.count / referrerData[0].count) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{item.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-32 flex items-center justify-center text-sm text-gray-500">
            Additional data visualization
          </div>
        </div>

        {/* Sales Referrer */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Total sales by referrer</h3>
          <div className="h-40 flex items-center justify-center text-sm text-gray-500">
            No data for this date range
          </div>
        </div>

        {/* Sales Attribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Sales attributed for marketing</h3>
          <div className="h-40 flex items-center justify-center text-sm text-gray-500">
            No data for this date range
          </div>
        </div>
      </div>

      {/* Customer Cohort Analysis */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Customer cohort analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Cohort</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Customers</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Retention r...</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Month 0</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Month 1</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Month 2</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Month 3</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Month 4</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Month 5</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">Month 6</th>
              </tr>
            </thead>
            <tbody>
              {['All cohorts', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'May 2025'].map((cohort, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-3 py-2 text-sm text-gray-900">{cohort}</td>
                  <td className="px-3 py-2 text-sm text-gray-900">0</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                  <td className="px-3 py-2 text-sm text-gray-600">0.0%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-base font-semibold text-gray-900">Latest Orders</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {latestOrders.slice(0, 5).map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="max-w-xs truncate">
                      {order.products[0]}
                      {order.products.length > 1 && ` +${order.products.length - 1} more`}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.purchaseTotal}</td>
                  <td className="px-6 py-4">
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

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-base font-semibold text-gray-900">Top Products</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">8</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$127.92</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-900">5.0</span>
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
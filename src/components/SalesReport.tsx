import React, { useState } from 'react';
import { Download } from 'lucide-react';

const SalesReport: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Choose categories (2)');
  const [selectedStatus, setSelectedStatus] = useState('Choose Order Status (2)');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const salesData = [
    { date: '5/29/24', orders: 2, totalItems: 2, revenues: '₹108' },
    { date: '5/28/24', orders: 1, totalItems: 1, revenues: '₹72' },
    { date: '5/6/25', orders: 1, totalItems: 1, revenues: '₹98,098.00' },
    { date: '5/6/25', orders: 1, totalItems: 1, revenues: '₹18,389' },
    { date: '5/5/25', orders: 1, totalItems: 2, revenues: '₹110,738.00' },
    { date: '5/12/25', orders: 1, totalItems: 2, revenues: '₹80,077,700' },
    { date: '5/23/25', orders: 1, totalItems: 1, revenues: '₹98,098.00' },
    { date: '5/30/25', orders: 1, totalItems: 1, revenues: '₹26,888.89' },
    { date: '6/10/25', orders: 2, totalItems: 2, revenues: '₹972,395.80' }
  ];

  const bestCustomers = [
    {
      id: 1,
      customer: 'test test',
      registrationDate: '2024-06-12 22:20:04',
      lastPurchase: '2024-06-10 18:02:02',
      totalOrders: 16,
      totalSpent: '₹17,672,380.00'
    },
    {
      id: 2,
      customer: 'Dammar Mo',
      registrationDate: '2024-01-30 19:26:39',
      lastPurchase: '2024-02-09 16:36:31',
      totalOrders: 1,
      totalSpent: '₹64'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Marketplace Advance Report</h2>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-[#00666B] text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download size={16} className="mr-2" />
          Export Report
        </button>
      </div>

      {/* Sales and Orders Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales and Orders</h3>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Choose categories (2)</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Garden</option>
          </select>
          
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Choose Order Status (2)</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Cancelled</option>
          </select>
          
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
            Generate Reports
          </button>
        </div>

        {/* Chart Area */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-gray-900">Sales and orders</h4>
            <div className="flex space-x-4 text-sm">
              <span className="text-gray-600">Day</span>
              <span className="text-gray-600">Week</span>
              <span className="text-gray-600">Month</span>
              <span className="text-gray-600">Year</span>
            </div>
          </div>
          
          {/* Chart placeholder */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 800 200">
                <polyline
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="2"
                  points="50,150 150,120 250,80 350,40 450,60 550,100 650,130 750,140"
                />
              </svg>
            </div>
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Sales</span>
            </div>
          </div>
        </div>

        {/* Date Range Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start On Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End On Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button className="bg-[#00666B] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Filter Result
            </button>
          </div>
        </div>

        {/* Sales Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#00666B] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Total Orders</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Total Items Sold</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Revenues</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salesData.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{data.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{data.orders}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{data.totalItems}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{data.revenues}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600">0 item(s)</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show</span>
            <select 
              value={recordsPerPage}
              onChange={(e) => setRecordsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-600">per page</span>
          </div>
        </div>
      </div>

      {/* Top On Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales By Geo/Location */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Sales By Geo/Location</h3>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Year</option>
              <option>Month</option>
              <option>Week</option>
            </select>
          </div>
          
          {/* Map placeholder */}
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
              <div className="flex items-center justify-center h-full">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-xs text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>1,075,408.4</span>
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>85,437,062</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Selling Products</h3>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Year</option>
              <option>Month</option>
              <option>Week</option>
            </select>
          </div>
          
          {/* Pie chart placeholder */}
          <div className="h-64 flex items-center justify-center">
            <div className="relative">
              <svg width="200" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="#22c55e" stroke="white" strokeWidth="2" />
                <path d="M 100 20 A 80 80 0 0 1 180 100 L 100 100 Z" fill="#3b82f6" stroke="white" strokeWidth="2" />
                <path d="M 180 100 A 80 80 0 0 1 100 180 L 100 100 Z" fill="#8b5cf6" stroke="white" strokeWidth="2" />
              </svg>
              <div className="absolute top-4 right-0 space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Ring - Accessories Ring Product</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Champagne Gold 18K Ring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Cheesecake Slice Luk Ring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Customers */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Customers</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#00666B] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">Id</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Customer</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Date Of Registration</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Last Purchase Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Total Orders</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Total Spent(₹)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bestCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{customer.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{customer.customer}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{customer.registrationDate}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{customer.lastPurchase}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{customer.totalOrders}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{customer.totalSpent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
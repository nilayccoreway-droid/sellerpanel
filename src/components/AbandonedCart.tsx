import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const AbandonedCart: React.FC = () => {
  const [recordsPerPage, setRecordsPerPage] = useState(20);

  const abandonedCarts = [
    {
      id: 1,
      productName: 'Champagne Gold 18K Ring',
      price: '₹109099980',
      qty: 10000,
      lastUpdated: '2025-08-29 09:50:04'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Marketplace Abandoned Cart</h2>
        </div>
        <div className="flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <Filter size={16} className="mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Abandoned Cart Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header with controls */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {abandonedCarts.length} records found
            </div>
            <div className="flex items-center space-x-2">
              <select 
                value={recordsPerPage}
                onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-600">per page</span>
              <div className="flex items-center space-x-2 ml-4">
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹</button>
                <span className="text-sm text-gray-600">1 of 1</span>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">›</button>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#00666B] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium">Product Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Qty</th>
                <th className="px-6 py-4 text-left text-sm font-medium">Last Updated</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {abandonedCarts.map((cart) => (
                <tr key={cart.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                    {cart.productName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{cart.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{cart.qty}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{cart.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AbandonedCart;
import React, { useState } from 'react';
import { Filter, Eye, ChevronDown, Columns, Edit } from 'lucide-react';

interface ProductsProps {
  onEditProduct?: () => void;
}

const Products: React.FC<ProductsProps> = ({ onEditProduct }) => {
  const [recordsPerPage, setRecordsPerPage] = useState(20);

  const products = [
    {
      id: 226,
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      name: 'sdffsdf',
      attributeSet: 'Necklaces',
      productStatus: 'Disabled',
      status: 'Disapproved',
      type: 'Simple',
      sku: 'ZUS14439-010-5851921',
      qty: 1,
      qtySold: 0,
      qtyConfirmed: 0,
      qtyPending: 0,
      price: '¥12,312',
      createdAt: 'Jul 11, 2025 7:29:23 PM',
      visibility: 'Catalog, Search'
    },
    {
      id: 227,
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      name: 'wefwwe',
      attributeSet: 'Ring',
      productStatus: 'Disabled',
      status: 'Disapproved',
      type: 'Simple',
      sku: 'ZUS14439-011-3843095',
      qty: 1,
      qtySold: 0,
      qtyConfirmed: 0,
      qtyPending: 0,
      price: '¥123,123',
      createdAt: 'Jul 11, 2025 7:43:23 PM',
      visibility: 'Catalog, Search'
    },
    {
      id: 228,
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      name: 'Champagne Gold 14K Ring',
      attributeSet: 'Ring',
      productStatus: 'Disabled',
      status: 'Disapproved',
      type: 'Simple',
      sku: 'ZUS14439-011-8424306',
      qty: 1,
      qtySold: 0,
      qtyConfirmed: 0,
      qtyPending: 0,
      price: '¥1,111,111',
      createdAt: 'Jul 28, 2025 12:10:22 AM',
      visibility: 'Catalog, Search'
    },
    {
      id: 229,
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      name: 'Gold ring with ruby diamond',
      attributeSet: 'Ring',
      productStatus: 'Enabled',
      status: 'Disapproved',
      type: '',
      sku: 'ZUS141-011-6876592',
      qty: 1,
      qtySold: 0,
      qtyConfirmed: 0,
      qtyPending: 0,
      price: '¥90,000',
      createdAt: 'Sep 12, 2025 7:34:52 PM',
      visibility: 'Not Visible Individually'
    },
    {
      id: 230,
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      name: 'Silver ring with diamond',
      attributeSet: 'Ring',
      productStatus: 'Enabled',
      status: 'Disapproved',
      type: '',
      sku: 'ZUS142-011-7377707',
      qty: 1,
      qtySold: 0,
      qtyConfirmed: 0,
      qtyPending: 0,
      price: '¥50,000',
      createdAt: 'Sep 19, 2025 6:45:44 PM',
      visibility: 'Not Visible Individually'
    },
    {
      id: 231,
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      name: 'Silver ring with diamond',
      attributeSet: 'Ring',
      productStatus: 'Enabled',
      status: 'Disapproved',
      type: '',
      sku: 'ZUS142-011-9405877',
      qty: 1,
      qtySold: 0,
      qtyConfirmed: 0,
      qtyPending: 0,
      price: '¥50,000',
      createdAt: 'Sep 19, 2025 6:50:17 PM',
      visibility: 'Not Visible Individually'
    },
    {
      id: 232,
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
      name: 'Silver ring with diamond',
      attributeSet: 'Ring',
      productStatus: 'Enabled',
      status: 'Approved',
      type: '',
      sku: 'ZUS142-011-7190617',
      qty: 1,
      qtySold: 0,
      qtyConfirmed: 0,
      qtyPending: 0,
      price: '¥50,000',
      createdAt: 'Sep 19, 2025 6:50:43 PM',
      visibility: 'Not Visible Individually'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'text-green-600';
      case 'Disapproved': return 'text-red-600';
      case 'Enabled': return 'text-green-600';
      case 'Disabled': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Marketplace Product List</h2>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Actions</option>
                <option>Delete Selected</option>
                <option>Enable Selected</option>
                <option>Disable Selected</option>
              </select>
              <div className="text-sm text-gray-600">
                67 records found
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Filter size={16} className="mr-2" />
                Filters
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Eye size={16} className="mr-2" />
                Default View
                <ChevronDown size={16} className="ml-1" />
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Columns size={16} className="mr-2" />
                Columns
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-end">
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
                <span className="text-sm text-gray-600">4 of 4</span>
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
                <th className="px-4 py-3 text-left text-sm font-medium">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">ID ↓</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Thumbnail</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Attribute Set</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Product Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium">SKU</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Qty</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Qty Sold</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Qty Confirmed</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Qty Pending</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Price</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Created At</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Visibility</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={product.id} className={`hover:bg-gray-50 transition-colors ${index % 2 === 1 ? 'bg-blue-50' : ''}`}>
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.id}</td>
                  <td className="px-4 py-3">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.attributeSet}</td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-medium ${getStatusColor(product.productStatus)}`}>
                      ● {product.productStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-medium ${getStatusColor(product.status)}`}>
                      ● {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.sku}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.qty}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.qtySold}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.qtyConfirmed}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.qtyPending}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{product.price}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.createdAt}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.visibility}</td>
                  <td className="px-4 py-3">
                    <button 
                      onClick={onEditProduct}
                      className="text-blue-600 hover:text-blue-900 transition-colors"
                    >
                      <Edit size={16} />
                    </button>
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

export default Products;
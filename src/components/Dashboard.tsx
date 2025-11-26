import React, { useState } from 'react';
import {
  ShoppingCart,
  Package,
  CreditCard,
  TrendingUp,
  Eye,
  Calendar,
  MapPin,
  Star,
  DollarSign,
  ChevronDown,
  ArrowUpCircle,
  ArrowDownCircle,
  Wallet
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Last 7 days');

  // Stats data
  const stats = [
    { label: 'Orders', value: '16', color: 'bg-orange-500' },
    { label: 'Products', value: '63', color: 'bg-gray-700' }
  ];

  // Transaction data
  const transactions = [
    { id: 'MRKPL00001', customer: 'Test Customer', amount: '$150.00' },
    { id: 'MRKPL00002', customer: 'Test Customer', amount: '$89.99' },
    { id: 'MRKPL00003', customer: 'Test Customer', amount: '$75.50' }
  ];

  // Activities data
  const activities = [
    { time: 'Jun 14', activity: 'New order received' },
    { time: 'Jun 13', activity: 'Product updated' },
    { time: 'Jun 12', activity: 'Customer inquiry' }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Open': return 'bg-green-100 text-green-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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

  return (
    <div className="space-y-6">
      {/* Top Row - Stats, Lifetime Sales, Map, Transactions, Activities */}
      <div className="grid grid-cols-12 gap-6">
        {/* Stats */}
        <div className="col-span-2 space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-8 h-8 ${stat.color} rounded`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Sales */}
        <div className="col-span-3 bg-slate-700 text-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium mb-2">Lifetime Sales</h3>
          <p className="text-2xl font-bold">₹ 320.29K</p>
          <div className="mt-4 h-32 bg-slate-600 rounded flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-slate-300 mx-auto mb-2" />
              <p className="text-xs text-slate-300">Sales visualization</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-span-4 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="h-48 bg-gray-50 rounded flex items-center justify-center relative">
            <div className="absolute inset-0 bg-green-50 rounded">
              <div className="flex items-center justify-center h-full">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-xs text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>₹85,156 ₹ 85,156.4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions & Activities */}
        <div className="col-span-3 space-y-4">
          {/* Transactions */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Transaction</h3>

            {/* Financial Summary Cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Total Earned */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <ArrowUpCircle size={20} className="text-green-600" />
                  <span className="text-xs font-medium text-green-700">Earned</span>
                </div>
                <p className="text-lg font-bold text-green-900">$315.49</p>
              </div>

              {/* Total Withdrawn */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-3 border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <ArrowDownCircle size={20} className="text-red-600" />
                  <span className="text-xs font-medium text-red-700">Withdrawn</span>
                </div>
                <p className="text-lg font-bold text-red-900">$0.00</p>
              </div>

              {/* Balance */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <Wallet size={20} className="text-blue-600" />
                  <span className="text-xs font-medium text-blue-700">Balance</span>
                </div>
                <p className="text-lg font-bold text-blue-900">$315.49</p>
              </div>
            </div>

            {/* Transaction List */}
            <div className="space-y-2">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center text-sm py-1">
                  <span className="text-gray-600">{transaction.id}</span>
                  <span className="font-medium text-gray-900">{transaction.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Activities</h3>
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <div key={index} className="text-sm">
                  <div className="text-gray-500">{activity.time}</div>
                  <div className="text-gray-700">{activity.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest Orders */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Latest Orders</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead style={{ backgroundColor: '#00666B' }}>
              <tr>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Order</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Date/Time</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Products</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Base Total</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Purchase Total</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Tax</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Status</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>View</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {latestOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    <div className="space-y-1">
                      {order.products.slice(0, 2).map((product, idx) => (
                        <div key={idx}>{product}</div>
                      ))}
                      {order.products.length > 2 && (
                        <div className="text-gray-400">+{order.products.length - 2} more</div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.baseTotal}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.purchaseTotal}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{order.tax}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Added Products */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recently Added Products</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead style={{ backgroundColor: '#00666B' }}>
              <tr>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Product Name</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Price</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Status</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Type</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>SKU</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Created At</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Visibility</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{product.price}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.type}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.sku}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.createdAt}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Latest Seller Tickets */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Latest Seller Tickets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead style={{ backgroundColor: '#00666B' }}>
              <tr>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Ticket Id</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Message</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Department</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Agent Name</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Status</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Priority</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sellerTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{ticket.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.message}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.department}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.agentName}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ticket.priority}</td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Reply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Transaction */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recently Transaction</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Transaction
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead style={{ backgroundColor: '#00666B' }}>
              <tr>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Transaction Type</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Income Amount</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Expense Amount</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Net Amount</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Status</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Created Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{transaction.type}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{transaction.incomeAmount}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{transaction.expenseAmount}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{transaction.netAmount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{transaction.createdDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recently Product Review */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recently Product Review</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead style={{ backgroundColor: '#00666B' }}>
              <tr>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Customer Name</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Product Sku</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Review Title</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Review Text</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Rating Summary for client</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{review.customer}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{review.productSku}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{review.product}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{review.reviewText}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-600">{review.reviewSummary}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shipping Order */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Shipping Order</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead style={{ backgroundColor: '#00666B' }}>
              <tr>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>#</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Order</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Shipment</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Date/Time</th>
                <th className="px-4 text-left text-xs font-semibold text-white uppercase tracking-wider" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>Products</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shippingOrders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{order.shipment}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    <div className="space-y-1">
                      {order.products.slice(0, 2).map((product, idx) => (
                        <div key={idx}>{product}</div>
                      ))}
                      {order.products.length > 2 && (
                        <div className="text-gray-400">+{order.products.length - 2} more</div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Shipping Pickup */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Order Shipping Pickup</h3>
        </div>
        <div className="p-4">
          <div className="text-center text-gray-500">
            <p>No scheduled pickup records</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
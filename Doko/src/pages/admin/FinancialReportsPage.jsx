import React, { useState } from 'react';
import { DollarSign, Calendar, CreditCard, PieChart } from 'lucide-react';

const FinancialReportsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedYear, setSelectedYear] = useState('2024');

  const financialData = {
    totalRevenue: 125000,
    totalCommission: 15000,
    totalPayouts: 110000,
    netProfit: 12500,
    taxCollected: 8750,
    processingFees: 2750,
    refunds: 1250,
    chargebacks: 350
  };

  const recentTransactions = [
    { id: 'TXN-001', type: 'Commission', amount: 250, date: '2024-07-15', status: 'completed', seller: 'TechStore Pro' },
    { id: 'TXN-002', type: 'Payout', amount: -2500, date: '2024-07-14', status: 'completed', seller: 'Fashion Hub' },
    { id: 'TXN-003', type: 'Refund', amount: -89.99, date: '2024-07-13', status: 'processing', seller: 'Electronics World' },
    { id: 'TXN-004', type: 'Commission', amount: 180, date: '2024-07-12', status: 'completed', seller: 'Home Goods' },
    { id: 'TXN-005', type: 'Chargeback', amount: -299.99, date: '2024-07-11', status: 'disputed', seller: 'TechStore Pro' }
  ];

  const topSellersByRevenue = [
    { name: 'TechStore Pro', revenue: 45000, commission: 4500, orders: 234 },
    { name: 'Fashion Hub', revenue: 38000, commission: 3800, orders: 189 },
    { name: 'Electronics World', revenue: 32000, commission: 3200, orders: 156 },
    { name: 'Home Goods Central', revenue: 28000, commission: 2800, orders: 134 },
    { name: 'Sports Equipment', revenue: 25000, commission: 2500, orders: 123 }
  ];

  const formatCurrency = (amount) => {
    return `Rs. ${amount.toLocaleString()}`;
  };

  const FinancialCard = ({ title, amount, color, description, icon }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(amount)}</p>
          {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        </div>
        <div className={`p-3 rounded-full bg-${color}-50 text-${color}-600`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Financial Reports</h1>
          <div className="flex space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FinancialCard
            title="Total Revenue"
            amount={financialData.totalRevenue}
            color="blue"
            description="Platform total revenue"
            icon={<DollarSign className="w-6 h-6" />}
          />
          <FinancialCard
            title="Commission Earned"
            amount={financialData.totalCommission}
            color="green"
            description="From seller transactions"
            icon={<DollarSign className="w-6 h-6" />}
          />
          <FinancialCard
            title="Seller Payouts"
            amount={financialData.totalPayouts}
            color="purple"
            description="Paid to sellers"
            icon={<CreditCard className="w-6 h-6" />}
          />
          <FinancialCard
            title="Net Profit"
            amount={financialData.netProfit}
            color="yellow"
            description="After all expenses"
            icon={<PieChart className="w-6 h-6" />}
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Sellers by Revenue</h3>
          <div className="space-y-3">
            {topSellersByRevenue.map((seller, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-red-700">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{seller.name}</p>
                    <p className="text-xs text-gray-500">{seller.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{formatCurrency(seller.revenue)}</p>
                  <p className="text-xs text-gray-500">Commission: {formatCurrency(seller.commission)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className={transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}>
                        {formatCurrency(Math.abs(transaction.amount))}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.seller}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Revenue Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Product Sales</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(110000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Commission</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(15000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Processing Fees</span>
                  <span className="text-sm font-medium text-red-600">-{formatCurrency(2750)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium text-gray-900">Net Revenue</span>
                  <span className="text-sm font-bold text-green-600">{formatCurrency(122250)}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Expense Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Seller Payouts</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(110000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Refunds</span>
                  <span className="text-sm font-medium text-red-600">{formatCurrency(1250)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Chargebacks</span>
                  <span className="text-sm font-medium text-red-600">{formatCurrency(350)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-sm font-medium text-gray-900">Total Expenses</span>
                  <span className="text-sm font-bold text-red-600">{formatCurrency(111600)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FinancialReportsPage;

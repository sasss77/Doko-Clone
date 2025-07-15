
import React, { useState } from 'react';
import { Search, ChevronDown, Bell, Menu, X, TrendingUp, ArrowUpRight, MoreHorizontal } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const productData = [
    {
      id: '022231',
      name: 'Kanky Kitaakaka (Green)',
      price: '$20.00',
      sales: 3000,
      status: 'Success',
      image: '👟'
    },
    {
      id: '022231',
      name: 'Kanky Kitaakaka (Green)',
      price: '$20.00',
      sales: 2311,
      status: 'Success',
      image: '👟'
    },
    {
      id: '022231',
      name: 'Kanky Kitaakaka (Green)',
      price: '$20.00',
      sales: 2111,
      status: 'Success',
      image: '👟'
    },
    {
      id: '022231',
      name: 'Kanky Kitaakaka (Green)',
      price: '$20.00',
      sales: 1661,
      status: 'Success',
      image: '👟'
    }
  ];

  const StatusBadge = ({ status }) => (
    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
      {status}
    </span>
  );

  const MetricCard = ({ title, value, change, changeText, color = "blue", icon }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border transition-transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon && <ArrowUpRight className="w-4 h-4 text-gray-400" />}
      </div>
      <div className="mb-2">
        <span className={`text-2xl font-bold ${color === 'red' ? 'text-red-500' : 'text-blue-500'}`}>
          {value}
        </span>
      </div>
      <div className="flex items-center text-sm">
        <span className={`${change?.startsWith('+') ? 'text-green-500' : 'text-red-500'} font-medium`}>
          {change}
        </span>
        <span className="text-gray-500 ml-1">{changeText}</span>
      </div>
    </div>
  );

  const ProgressBar = ({ value, max, color = "red" }) => (
    <div className="relative">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`bg-${color}-500 h-2 rounded-full transition-all duration-500`}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
      <div 
        className="absolute top-0 w-6 h-6 bg-gray-400 rounded-full -mt-2 border-2 border-white shadow transition-all duration-300"
        style={{ left: `${(value / max) * 100}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">▲</span>
              </div>
              <span className="font-bold text-lg">Culters</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">GENERAL</h3>
          </div>
          
          <div className="space-y-1">
            <div className="bg-blue-50 text-blue-600 border-r-2 border-blue-500">
              <div className="flex items-center px-4 py-2">
                <span className="text-sm">📊 Dashboard</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
                <span className="text-sm">📦 Product (119)</span>
                <ChevronDown size={16} className="ml-auto" />
              </div>
              <div className="pl-8 space-y-1">
                <div className="py-1 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">— Sneakers</div>
                <div className="py-1 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">— Jacket</div>
                <div className="py-1 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">— T-Shirt</div>
                <div className="py-1 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">— Bag</div>
              </div>
            </div>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <span className="text-sm">💳 Transaction (441)</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <span className="text-sm">👥 Customers</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
              <span className="text-sm">📈 Product</span>
            </a>
          </div>
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold">GH</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Guy Hawkins</p>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu size={20} />
              </button>
              
              <div className="relative max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search product"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold">GH</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">Guy Hawkins</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="p-4 lg:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
            <p className="text-sm text-gray-600">Dashboard</p>
          </div>
          
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* Sales Target */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Sales Target</h3>
                  <p className="text-xs text-gray-500">In Progress</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Sales Target</p>
                  <p className="text-sm font-medium">$500,000.00</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">$231,032,444</span>
              </div>
              <ProgressBar value={231032444} max={500000000} />
            </div>
            
            {/* Total Revenue */}
            <div className="bg-red-500 text-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Total Revenue</h3>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold">$81,000</span>
              </div>
              <div className="text-sm opacity-90">From last week</div>
            </div>
            
            {/* Total Customer */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600">Total Customer</h3>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="mb-2">
                <span className="text-2xl font-bold text-blue-500">5,000</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-500 font-medium">+7.18%</span>
                <span className="text-gray-500 ml-1">From last week</span>
              </div>
            </div>
          </div>
          
          {/* Second Row Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Total Transactions"
              value="12,000"
              change="+3.6%"
              changeText="From last week"
              color="blue"
              icon={true}
            />
            <MetricCard
              title="Total Product"
              value="5,000"
              change="-1.8%"
              changeText="From last week"
              color="blue"
              icon={true}
            />
            
            {/* Purple Card */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Increase your sales</h3>
              <p className="text-sm opacity-90 mb-4">
                Discover the Proven Methods to Skyrocket Your Sales! Unleash the 
                Potential of Your Business and Achieve Remarkable Growth. Whether 
                you're a seasoned entrepreneur or just starting out.
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Charts and Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Chart */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Your Sales this year</h3>
                <button className="text-sm text-blue-500 hover:text-blue-700 flex items-center">
                  Show All <ArrowUpRight size={16} className="ml-1" />
                </button>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Average Sale Value</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Average Item per sale</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="text-center">
                  <div className="text-xs text-gray-500">Sep 2023</div>
                  <div className="text-lg font-semibold">$211,411,223</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Sep 2024</div>
                  <div className="text-lg font-semibold text-green-500">$339,091,888</div>
                </div>
              </div>
              
              {/* Simple Chart Representation */}
              <div className="h-40 bg-gray-50 rounded-lg flex items-end justify-between px-4 py-4">
                <div className="text-xs text-gray-500 space-y-8">
                  <div>Jan</div>
                  <div>Feb</div>
                  <div>Mar</div>
                  <div>Apr</div>
                  <div>Jun</div>
                  <div>Jul</div>
                  <div>Aug</div>
                  <div>Sep</div>
                  <div>Oct</div>
                  <div>Nov</div>
                  <div>Dec</div>
                </div>
                <div className="flex-1 h-full relative ml-4">
                  <svg className="w-full h-full">
                    <polyline
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      points="0,120 50,100 100,80 150,90 200,70 250,60 300,50 350,40 400,30 450,35 500,25"
                    />
                    <polyline
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      points="0,140 50,130 100,110 150,120 200,100 250,90 300,80 350,70 400,60 450,55 500,45"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Customer Growth */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Customer Growth</h3>
                    <p className="text-sm text-gray-600">3 Province</p>
                  </div>
                  <button className="text-sm text-blue-500 hover:text-blue-700 flex items-center">
                    Show All <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">East Java (50%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Kalimantan (50%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Bali (45%)</span>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Indonesia Map Visualization</div>
                </div>
              </div>
              
              {/* Product Popular */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Product Popular</h3>
                  <button className="text-sm text-blue-500 hover:text-blue-700 flex items-center">
                    Show All <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="text-xs text-gray-500 uppercase">
                      <tr>
                        <th className="text-left py-2">Product</th>
                        <th className="text-left py-2">Price</th>
                        <th className="text-left py-2">Sales</th>
                        <th className="text-left py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {productData.map((product, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                                <span className="text-lg">{product.image}</span>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">{product.id}</div>
                                <div className="font-medium">{product.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3">{product.price}</td>
                          <td className="py-3">{product.sales}</td>
                          <td className="py-3">
                            <StatusBadge status={product.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
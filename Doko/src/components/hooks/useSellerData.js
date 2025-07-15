import { useState, useEffect } from 'react';

const useSellerData = () => {
  const [data, setData] = useState({
    stats: {
      totalProducts: 0,
      totalOrders: 0,
      totalRevenue: 0,
      totalCustomers: 0
    },
    products: [],
    orders: [],
    customers: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        // Replace with actual API calls
        const mockData = {
          stats: {
            totalProducts: 156,
            totalOrders: 2340,
            totalRevenue: 45670,
            totalCustomers: 890
          },
          products: [
            { 
              id: 1, 
              name: 'T-shirt with Tape Details', 
              price: 1749, 
              stock: 45, 
              rating: 4.5, 
              reviews: 123,
              category: 'clothing',
              description: 'Premium quality t-shirt with unique tape details'
            },
            { 
              id: 2, 
              name: 'Designer Hoodie', 
              price: 2890, 
              stock: 23, 
              rating: 4.7, 
              reviews: 89,
              category: 'clothing',
              description: 'Comfortable designer hoodie for casual wear'
            },
            { 
              id: 3, 
              name: 'Casual Jeans', 
              price: 1249, 
              stock: 67, 
              rating: 4.3, 
              reviews: 156,
              category: 'clothing',
              description: 'Stylish casual jeans for everyday wear'
            }
          ],
          orders: [
            { id: '#ORD001', customer: 'John Doe', amount: 1749, status: 'pending', date: '2024-01-15' },
            { id: '#ORD002', customer: 'Jane Smith', amount: 2890, status: 'shipped', date: '2024-01-14' },
            { id: '#ORD003', customer: 'Mike Johnson', amount: 1249, status: 'delivered', date: '2024-01-13' },
            { id: '#ORD004', customer: 'Sarah Wilson', amount: 3450, status: 'pending', date: '2024-01-12' }
          ],
          customers: [
            { 
              id: 1, 
              name: 'John Doe', 
              email: 'john@example.com', 
              phone: '+977-9841234567',
              address: 'Kathmandu, Nepal',
              orders: 15,
              totalSpent: 45670,
              joinedDate: '2023-06-15'
            },
            { 
              id: 2, 
              name: 'Jane Smith', 
              email: 'jane@example.com', 
              phone: '+977-9841234568',
              address: 'Pokhara, Nepal',
              orders: 8,
              totalSpent: 23450,
              joinedDate: '2023-08-22'
            }
          ]
        };

        setData({ ...mockData, loading: false, error: null });
      } catch (error) {
        setData(prev => ({ ...prev, loading: false, error: error.message }));
      }
    };

    fetchData();
  }, []);

  const updateProduct = (productId, updates) => {
    setData(prev => ({
      ...prev,
      products: prev.products.map(product =>
        product.id === productId ? { ...product, ...updates } : product
      )
    }));
  };

  const addProduct = (newProduct) => {
    setData(prev => ({
      ...prev,
      products: [...prev.products, { ...newProduct, id: Date.now() }]
    }));
  };

  const deleteProduct = (productId) => {
    setData(prev => ({
      ...prev,
      products: prev.products.filter(product => product.id !== productId)
    }));
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setData(prev => ({
      ...prev,
      orders: prev.orders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    }));
  };

  return {
    ...data,
    updateProduct,
    addProduct,
    deleteProduct,
    updateOrderStatus
  };
};

export default useSellerData;

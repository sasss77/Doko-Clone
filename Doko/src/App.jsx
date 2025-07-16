import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
import Analytics from "./pages/seller/Analytics.jsx";
import Customer from './pages/seller/Customers.jsx';
import Dashboard from './pages/seller/Dashboard.jsx';
import Orders from './pages/seller/Orders.jsx'
import Products from './pages/seller/Products.jsx'
import Settings from './pages/seller/Settings.jsx'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="customers" element={<Customer />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="settings" element={<Settings />} />
        
      </Routes>
    </Router>
  );
};

export default App;

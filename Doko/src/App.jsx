import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cart from "./cart";
import About from "./About";
import Wishlist from "./Wishlist";
import Product from "./Product";
import HomePage from "./Homepage";
import Contact from "./Contact";
import MyAccount from "./MyAccount";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import ProductAdmin from './ProductAdmin';
import AddProduct from './AddProduct';
import Customer from './Customer';
import AddCustomer from './AddCustomer';
import EditProduct from './EditProduct';
import PersonalAccount from './PersonalAccount';
import Order from './Order';
import Seller from './Seller';
import AddSeller from './AddSeller';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';

import OverviewPage from "./Admin/Overview";
import FinancialReportsPage from "./Admin/FinancialReportsPage";
import NotificationsPage from "./Admin/Notificationspage";
import OrderManagementPage from "./Admin/OrderManagement";
import ProductManagementPage from "./Admin/ProductManagements";
import SellerManagementPage from "./Admin/SellerManagement";
import UserManagementPage from "./Admin/Usermanagement";
import AdminProfile from "./Admin/AdminProfile";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/account" element={<MyAccount />} />  
        <Route path="/Dashboard" element={<Dashboard />} />  
        <Route path="/ProductAdmin" element={<ProductAdmin />} />  
        <Route path="/AddProduct" element={<AddProduct />} />  
        <Route path="/Customer" element={<Customer />} />  
        <Route path="/AddCustomer" element={<AddCustomer />} />  
        <Route path="/EditProduct" element={<EditProduct />} />  
        <Route path="/PersonalAccount" element={<PersonalAccount />} />  
        <Route path="/Order" element={<Order />} />  
        
        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<OverviewPage />} />
        <Route path="/admin/UserManagement" element={<UserManagementPage />} />
        <Route path="/admin/Financial" element={<FinancialReportsPage />} />
        <Route path="/admin/Notifications" element={<NotificationsPage />} />
        <Route path="/admin/OrderManagement" element={<OrderManagementPage />} />
        <Route path="/admin/Product" element={<ProductManagementPage />} />
        <Route path="/admin/sellermanagement" element={<SellerManagementPage />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        
        {/* Catch all route - should be last */}
        <Route path="/*" element={<NotFound />} />  
      </Routes>
    </Router>
  );
};


export default App;

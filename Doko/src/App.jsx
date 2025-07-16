import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
import Login from "./pages/Login";
import Cart from "./cart";
import About from "./About";
import Wishlist from "./Wishlist";
import Product from "./Product";
import HomePage from "./Homepage";
import Contact from "./Contact";
import MyAccount from "./MyAccount";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import ProductAdmin from "./ProductAdmin";
import AddProduct from "./AddProduct";
import Customer from "./Customer";
import AddCustomer from "./AddCustomer";
import EditProduct from "./EditProduct";
import PersonalAccount from "./PersonalAccount";
import Security from "./Security";
import Order from "./Order";
import Seller from "./Seller";
import AddSeller from "./AddSeller";
import AdminDashboard from "./AdminDashboard";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";
import SellerLayout from "./components/seller/layout/SellerLayout";
import UserRegister from "./pages/UserRegister";
import SellerRegister from "./pages/SellerRegister";

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
        <Route path="/*" element={<NotFound />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ProductAdmin" element={<ProductAdmin />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/AddCustomer" element={<AddCustomer />} />
        <Route path="/EditProduct" element={<EditProduct />} />
        <Route path="/PersonalAccount" element={<PersonalAccount />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/AddSeller" element={<AddSeller />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/sellerpanel" element={<SellerLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/sellerregister" element={<SellerRegister />} />
      </Routes>
    </Router>
  );
};

export default App;

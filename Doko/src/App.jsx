import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


// Context Providers
import { AuthProvider, AuthContext } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import { WishlistProvider } from './context/WishlistContext';

// Layout Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';

// Public Pages
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Authentication Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Protected User Pages
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ThankYouPage from './pages/ThankYouPage';
import ProfilePage from './pages/ProfilePage';
import WishlistPage from './pages/WishlistPage';

// Error Pages
import NotFoundPage from './components/error/NotFoundPage';

// Import Styles
import './styles/globals.css';
import './styles/components.css';
import './styles/animations.css';


// Protected Route Component
const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: window.location.pathname }} replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

// Public Route Component (redirects authenticated users)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  
  if (isAuthenticated) {
    // Redirect based on user role
    switch (user?.role) {
      case 'admin':
        return <Navigate to="/admin/dashboard" replace />;
      case 'seller':
        return <Navigate to="/seller/dashboard" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }
  
  return children;
};

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <Router>
                <div className="App min-h-screen bg-gray-50 flex flex-col">
                  <Header />
                  <main className="flex-1">
                    <Routes>
                      {/* Public Routes */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/home" element={<Navigate to="/" replace />} />
                      
                      {/* Product & Category Routes */}
                      <Route path="/categories" element={<CategoriesPage />} />
                      <Route path="/products" element={<Navigate to="/categories" replace />} />
                      <Route path="/products/:category" element={<ProductListingPage />} />
                      <Route path="/product/:id" element={<ProductDetailsPage />} />
                      <Route path="/search" element={<SearchResultsPage />} />
                      
                      {/* Information Pages */}
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      
                      {/* Authentication Routes (Public Only) */}
                      <Route path="/login" element={
                        <PublicRoute>
                          <LoginPage />
                        </PublicRoute>
                      } />
                      <Route path="/register" element={
                        <PublicRoute>
                          <RegisterPage />
                        </PublicRoute>
                      } />
                      <Route path="/signup" element={<Navigate to="/register" replace />} />
                      <Route path="/signin" element={<Navigate to="/login" replace />} />
                      
                      {/* Protected Customer Routes */}
                      <Route path="/cart" element={
                        <ProtectedRoute>
                          <CartPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/checkout" element={
                        <ProtectedRoute>
                          <CheckoutPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/order-confirmation" element={
                        <ProtectedRoute>
                          <OrderConfirmationPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/thank-you" element={
                        <ProtectedRoute>
                          <ThankYouPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/profile" element={
                        <ProtectedRoute>
                          <ProfilePage />
                        </ProtectedRoute>
                      } />
                      <Route path="/account" element={<Navigate to="/profile" replace />} />
                      <Route path="/wishlist" element={
                        <ProtectedRoute>
                          <WishlistPage />
                        </ProtectedRoute>
                      } />
                      <Route path="/favorites" element={<Navigate to="/wishlist" replace />} />
                      <Route path="/orders" element={
                        <ProtectedRoute>
                          <ProfilePage />
                        </ProtectedRoute>
                      } />
                      
                      {/* Category Specific Routes */}
                      <Route path="/musical-instruments" element={<Navigate to="/products/musical-instruments" replace />} />
                      <Route path="/handicrafts" element={<Navigate to="/products/handicrafts" replace />} />
                      <Route path="/clothing" element={<Navigate to="/products/clothing" replace />} />
                      <Route path="/tools-crafts" element={<Navigate to="/products/tools-crafts" replace />} />
                      <Route path="/grocery" element={<Navigate to="/products/grocery" replace />} />
                      
                      {/* Admin Routes (Future Implementation) */}
                      <Route path="/admin/*" element={
                        <ProtectedRoute requiredRole="admin">
                          <div className="text-center py-20">
                            <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
                            <p className="text-gray-600">Admin panel coming soon...</p>
                          </div>
                        </ProtectedRoute>
                      } />
                      
                      {/* Seller Routes (Future Implementation) */}
                      <Route path="/seller/*" element={
                        <ProtectedRoute requiredRole="seller">
                          <div className="text-center py-20">
                            <h1 className="text-2xl font-bold text-gray-900 mb-4">Seller Dashboard</h1>
                            <p className="text-gray-600">Seller panel coming soon...</p>
                          </div>
                        </ProtectedRoute>
                      } />
                      
                      {/* Legacy/Alternative Route Names */}
                      <Route path="/shop" element={<Navigate to="/categories" replace />} />
                      <Route path="/store" element={<Navigate to="/categories" replace />} />
                      <Route path="/basket" element={<Navigate to="/cart" replace />} />
                      <Route path="/bag" element={<Navigate to="/cart" replace />} />
                      <Route path="/payment" element={<Navigate to="/checkout" replace />} />
                      <Route path="/success" element={<Navigate to="/thank-you" replace />} />
                      
                      {/* 404 - Catch-all route */}
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </Router>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;

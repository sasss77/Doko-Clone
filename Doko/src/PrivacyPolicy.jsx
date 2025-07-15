import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Package, Truck, RotateCcw, MapPin } from 'lucide-react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const ShippingPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionHeader = ({ icon: Icon, title, sectionKey, children }) => (
    <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={() => toggleSection(sectionKey)}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
        {expandedSections[sectionKey] ? 
          <ChevronUp className="w-5 h-5 text-gray-500" /> : 
          <ChevronDown className="w-5 h-5 text-gray-500" />
        }
      </div>
      <div className={`transition-all duration-300 ease-in-out ${expandedSections[sectionKey] ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-4 pt-0 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-0 px-4 w-full max-w-screen mx-auto">
      <Navbar />
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8 max-w-full mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <Package className="w-8 h-8 text-orange-500" />
          <h2 className="text-lg font-semibold text-gray-800">Shipping Policy - Doko</h2>
        </div>
        <p className="text-gray-600">Complete information about our shipping and delivery policies</p>
      </div>

      {/* Delivery Charges */}
      <SectionHeader icon={Truck} title="1. Delivery Charges" sectionKey="delivery">
        <p className="text-gray-700 leading-relaxed">
          Delivery charges will be calculated based on the shipping address provided by the customer.
        </p>
      </SectionHeader>

      {/* Cash on Delivery Policy */}
      <SectionHeader icon={Package} title="2. Cash on Delivery (COD) Policy" sectionKey="cod">
        <div className="space-y-4">
          <div>
            <p className="text-gray-700 mb-2">Cash on Delivery (COD) allows you to pay in cash when Doko delivers your order to your specified address.</p>
            <p className="text-gray-700 mb-4">In this case, you don't pay online and instead pay cash directly to the courier. COD offers the flexibility to pay for full delivery orders that are above NPR 1000.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">COD is available for:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Only registered buyers (NPR) are accepted for COD payments</li>
              <li>Payments are made over credit/debit cards, checks, or any other means not accepted over COD. COD is strictly a cash-only payment method.</li>
            </ul>
          </div>
        </div>
      </SectionHeader>

      {/* Estimated Delivery Time */}
      <SectionHeader icon={MapPin} title="3. Estimated Delivery Time" sectionKey="delivery-time">
        <div className="space-y-4">
          <p className="text-gray-700">
            For online payments, free confirmation happens after payment authorization and verification.
          </p>
          <p className="text-gray-700">
            For cash on delivery (COD), the estimated delivery time depends on the Doko customer support, contact your order and shipping address.
          </p>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Delivery timeline:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Please allow 24-48 hours for the delivery/shipping via authorized delivery firms</li>
              <li>In some cases, delivery can take up to 5 working days due to clearing from partner shops or suppliers</li>
              <li>During festival seasons or high-demand periods, delivery may take longer than usual</li>
              <li>For remote areas, delivery times may be extended using our original payment method</li>
            </ul>
          </div>
        </div>
      </SectionHeader>

      {/* International Delivery */}
      <SectionHeader icon={Truck} title="4. International Delivery" sectionKey="international">
        <p className="text-gray-700">
          Currently, International delivery is not available.
        </p>
      </SectionHeader>

      {/* Contact Information */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8 max-w-full mx-auto px-6">
        <h3 className="font-semibold text-orange-800 mb-3">For any shipping-related queries:</h3>
        <div className="space-y-2">
          <p className="text-orange-700">📧 Email: <a href="mailto:support@doko.com.np" className="text-orange-600 hover:text-orange-800 transition-colors duration-200 underline">support@doko.com.np</a></p>
          <p className="text-orange-700">📞 Call: <a href="tel:+977-1-4990006" className="text-orange-600 hover:text-orange-800 transition-colors duration-200 underline">+977-1-4990006</a></p>
          <p className="text-orange-700">🌐 Website: <a href="https://doko.com.np" className="text-orange-600 hover:text-orange-800 transition-colors duration-200 underline">doko.com.np</a></p>
        </div>
      </div>

      {/* Return Policy */}
      <SectionHeader icon={RotateCcw} title="📦 Return Policy - Doko" sectionKey="return">
        <div className="space-y-6">
          <p className="text-gray-700">
            At Doko, we take full responsibility for the products you order we delivered as per your expectations. If you receive an incomplete, damaged/not incorrect item, please contact us within 48 hours of delivery for a return or exchange.
          </p>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Eligible Return Reasons:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>The product is entirely different from your order</li>
              <li>The product is damaged/defective (within 48 hours of delivery, items received through defective delivery in both cases)</li>
              <li>Items are expired within 7 months</li>
              <li>Warranty is expired/or incomplete as compared to the delivery (it's not covered if check your order thoroughly upon receiving)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Return Instructions:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Items must be original manufacturer's packaging (with labels, barcodes intact)</li>
              <li>Only products being as original can be returned</li>
              <li>All accessories, manual, and instructions must be included in the sales invoice</li>
              <li>The original invoice must be returned with the product</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Items Not Eligible for Return:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Opened bottles or partially used items</li>
              <li>Items damaged due to misuse (e.g., temperature-controlled products like toys, injections, vaccines, perfills)</li>
              <li>Items without original packaging or tags</li>
              <li>Items damaged due to wear and tear/misuse</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Return Exceptions:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>We won't acknowledge for injections, health/Medicine & equipment, online bargains</li>
              <li>Make sure you read the demands, and the product page has not eligible for return or refunds</li>
              <li>All returns must be made by visiting our city office</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">For any return-related queries:</h3>
            <div className="space-y-1">
              <p className="text-yellow-700">📧 Email: <a href="mailto:return@doko.com.np" className="text-yellow-600 hover:text-yellow-800 transition-colors duration-200 underline">return@doko.com.np</a></p>
              <p className="text-yellow-700">📞 Call: <a href="tel:+977-1-4990006" className="text-yellow-600 hover:text-yellow-800 transition-colors duration-200 underline">+977-1-4990006</a></p>
              <p className="text-yellow-700">🌐 Website: <a href="https://doko.com.np" className="text-yellow-600 hover:text-yellow-800 transition-colors duration-200 underline">doko.com.np</a></p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">We are committed to your satisfaction. Refunds are issued under the following conditions:</h3>
            <p className="text-gray-700 mb-2"><strong>Full Refund is Not Provided if:</strong></p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>The Item you received is defective</li>
              <li>The item was lost or damaged during transit</li>
              <li>The item was not as described</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Refund Processing Time:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Refund time may take depending on the original payment method</li>
              <li>For cash on delivery, refund depends on availability of Cash and (typically less than 3-10 working days)</li>
              <li>For online payments, refund depends on payment method and (typically less than 3-10 working days)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">How to Request a Refund:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Email your order details and the reason for the refund request</li>
              <li>Our customer service team will guide you through your city office</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">For refund assistance:</h3>
            <div className="space-y-1">
              <p className="text-red-700">📧 Email: <a href="mailto:refund@doko.com.np" className="text-red-600 hover:text-red-800 transition-colors duration-200 underline">refund@doko.com.np</a></p>
              <p className="text-red-700">📞 Call: <a href="tel:+977-1-4990006" className="text-red-600 hover:text-red-800 transition-colors duration-200 underline">+977-1-4990006</a></p>
              <p className="text-red-700">🌐 Website: <a href="https://doko.com.np" className="text-red-600 hover:text-red-800 transition-colors duration-200 underline">doko.com.np</a></p>
            </div>
          </div>
        </div>
      </SectionHeader>
{/* 
      <Footer /> */}
    </div>
  );
};

export default ShippingPolicy;

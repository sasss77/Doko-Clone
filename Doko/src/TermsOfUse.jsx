import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Shield,
  Users,
  CreditCard,
  Truck,
  RefreshCw,
  AlertTriangle,
  Eye,
  Mail
} from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionHeader = ({ icon: Icon, title, sectionKey, children }) => (
    <div className="mb-6 bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
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
    <div className="min-h-screen bg-gray-50">
      <div className="w-full">
        <Navbar />

        {/* Header */}
        <div className="bg-white border border-gray-100 p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Terms and Conditions - Doko</h1>
          </div>
          <p className="text-gray-600">Please read these terms and conditions carefully before using our services</p>
        </div>

        {/* Sections */}
        <SectionHeader icon={Shield} title="1. About Doko" sectionKey="about">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              This website is an online store that offers a complete selection of traditional Nepali dresses, books, crafts and art in one co-operative, all conveniently 
              done sourced with care from local artisans and communities. We aim to preserve and promote Nepal's rich cultural heritage by connecting 
              customers with authentic, responsibly produced items that reflect our history, traditions, and craftsmanship.
            </p>
            <p>
              By using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. These terms apply to all visitors, users, and customers 
              of our website, including without limitation customers who browse, vendor, customer, merchant, and/or contributors of content.
            </p>
            <p>
              By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy 
              and that you accept all terms and conditions contained herein. If you do not agree to these terms, please do not use our website.
            </p>
          </div>
        </SectionHeader>

        <SectionHeader icon={Users} title="2. Eligibility" sectionKey="eligibility">
          <div className="space-y-3 text-gray-700">
            <p>• You must be at least 18 years old to use our website.</p>
            <p>• You must be at least 18 years old to make purchases from a current guardian.</p>
            <p>• By using our website, you represent that you are legally capable of entering into Disputes laws.</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={FileText} title="3. Product Information" sectionKey="product">
          <div className="space-y-3 text-gray-700">
            <p>• We strive to provide accurate product descriptions, images, and prices.</p>
            <p>• All prices are subject to change without notice (NPR).</p>
            <p>• Products may vary slightly from images due to lighting, photography, or regional variations.</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={Shield} title="4. Orders & Acceptance" sectionKey="orders">
          <div className="space-y-3 text-gray-700">
            <p>• All orders are subject to availability and confirmation of the order price.</p>
            <p>• Doko reserves the right to refuse or cancel any order at any time.</p>
            <p>• You must be 18 or older to place an order.</p>
            <p>• Despite our best efforts, our website may have stock unavailable goods.</p>
            <p>• A contract between you and Doko will not be established until your order is confirmed.</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={CreditCard} title="5. Payment Terms" sectionKey="payment">
          <div className="space-y-3 text-gray-700">
            <p>• Payment is due at the time of purchase.</p>
            <p>• Cash on Delivery (COD) is with only.</p>
            <p>• Mobile wallets or online payment options (if available).</p>
            <p>• You are responsible for all charges and responsible for fees, including taxes and charges for COD.</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={Truck} title="6. Shipping & Delivery" sectionKey="shipping">
          <div className="space-y-3 text-gray-700">
            <p>• Delivery charges are calculated based on the shipping address.</p>
            <p>• Delivery times may vary depending on location and availability.</p>
            <p>• Delivery may take 3-to-7 working days for certain areas or specialty items.</p>
            <p>• Currently, we do not offer international delivery.</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={RefreshCw} title="7. Returns & Exchanges" sectionKey="returns">
          <div className="space-y-3 text-gray-700">
            <p>• You may return or exchange items within 3 working days of receipt if:</p>
            <p className="ml-4">- The item is defective or not as described</p>
            <p className="ml-4">- The item was damaged during shipping</p>
            <p className="ml-4">- The product or issue is supply before 7 months</p>
            <p>• Items must meet the following conditions:</p>
            <p className="ml-4">- Items must be in original packaging</p>
            <p className="ml-4">- Items must not be used or damaged</p>
            <p className="ml-4">- Items must have all original tags intact</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={RefreshCw} title="8. Refund Policy" sectionKey="refund">
          <div className="space-y-3 text-gray-700">
            <p>• Refunds are applicable in the following cases:</p>
            <p className="ml-4">- Faulty or defective products</p>
            <p className="ml-4">- Your order was lost or damaged during transit</p>
            <p className="ml-4">- The item is not as described</p>
            <p>• Refunds will be processed using the original payment method and may take 7-10 working days, depending on your bank or provider.</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={AlertTriangle} title="9. User Responsibilities" sectionKey="responsibilities">
          <div className="space-y-3 text-gray-700">
            <p>• You are responsible for the following:</p>
            <p className="ml-4">- Providing accurate information</p>
            <p className="ml-4">- Safeguard unauthorized access to your account</p>
            <p className="ml-4">- Reporting any suspicious activity</p>
            <p className="ml-4">- Complying with all applicable laws and our user agreements</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={Shield} title="10. Intellectual Property" sectionKey="intellectual">
          <div className="space-y-3 text-gray-700">
            <p>
              All website content, including but not limited to text, graphics, logos, images, descriptions, and designs – is the property of Doko and protected under applicable copyright 
              and trademark laws. You may not copy, distribute, or reproduce any content without our express written permission.
            </p>
          </div>
        </SectionHeader>

        <SectionHeader icon={Eye} title="11. Privacy" sectionKey="privacy">
          <div className="space-y-3 text-gray-700">
            <p>Your use of personal data is governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
            <p>By using our website, you consent to the collection and use of your personal information as described in our Privacy Policy.</p>
            <p>We reserve the right to update or change these Terms of Service at any time. Updates will be posted on this page, and your continued use of the site indicates acceptance of any changes.</p>
            <p>Last updated: [Insert Date]</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={AlertTriangle} title="12. Changes to Terms" sectionKey="changes">
          <div className="space-y-3 text-gray-700">
            <p>We reserve the right to update or change these Terms of Service at any time. Updates will be posted on this page, and your continued use of the site indicates acceptance of any changes.</p>
            <p>Last updated: [Insert Date]</p>
          </div>
        </SectionHeader>

        <SectionHeader icon={Mail} title="13. Contact Us" sectionKey="contact">
          <div className="space-y-3 text-gray-700">
            <p>For any questions or concerns regarding these Terms and Conditions, please contact:</p>
            <div className="bg-orange-50 border border-orange-200 p-4 mt-4">
              <div className="space-y-2 text-orange-700">
                <p>📧 Email: <a href="mailto:support@doko.com.np" className="text-orange-600 hover:text-orange-800 transition-colors duration-200 underline">support@doko.com.np</a></p>
                <p>📞 Phone: <a href="tel:+977-9801-099091" className="text-orange-600 hover:text-orange-800 transition-colors duration-200 underline">+977-9801-099091</a></p>
                <p>🌐 Website: <a href="https://doko.com.np" className="text-orange-600 hover:text-orange-800 transition-colors duration-200 underline">doko.com.np</a></p>
                <p>🏢 Address: [Insert Physical Address]</p>
              </div>
            </div>
          </div>
        </SectionHeader>

        {/* Footer */}
        <div className="bg-white border border-gray-100 p-6 text-center">
          <p className="text-gray-600 mb-2">
            By using our website, you acknowledge that you have read and understood these Terms and Conditions.
          </p>
          <p className="text-sm text-gray-500">
            Last updated: [Insert Date] | Thank you for choosing Doko
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TermsAndConditions;

import React from 'react'
import { Link } from 'react-router-dom'

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 p-6 rounded-xl mb-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Paumalu Innovations
          </div>
          <Link 
            to="/" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </header>
        
        {/* Policy Content */}
        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <div className="text-gray-600 dark:text-gray-400 mb-10 italic">
            <strong>Effective Date:</strong> January 2025<br />
            <strong>Last Updated:</strong> January 2025
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Paumalu Innovations ("we," "our," or "us") is committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your personal information. This Privacy Policy explains our practices regarding the collection and use of information when you use our services or interact with our website.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
              Types of Information Collected
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We collect the following types of personal information from our customers:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
              <li><strong>Business Information:</strong> Company name, business address, industry type</li>
              <li><strong>Payment Information:</strong> Credit card numbers, billing addresses, payment history</li>
              <li><strong>Service Information:</strong> Details about services requested, project specifications, communication preferences</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information when visiting our website</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
              How We Collect Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We collect customer information through the following methods:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
              <li><strong>Website Forms:</strong> Contact forms, service request forms, newsletter subscriptions</li>
              <li><strong>Direct Communication:</strong> Email exchanges, phone conversations, in-person meetings</li>
              <li><strong>Service Contracts:</strong> Information provided as part of our service agreements</li>
              <li><strong>Payment Processing:</strong> Information collected during billing and payment transactions</li>
              <li><strong>Verbal Consent:</strong> Information and consent collected during phone conversations</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We use the collected information for the following legitimate business purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
              <li><strong>Service Delivery:</strong> To provide our AI consulting and development services</li>
              <li><strong>Communication:</strong> To respond to inquiries and provide project updates</li>
              <li><strong>Contract Management:</strong> To fulfill our service agreements and manage business relationships</li>
              <li><strong>Payment Processing:</strong> To process payments and maintain billing records</li>
              <li><strong>Business Operations:</strong> To improve our services and conduct necessary business activities</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
              SMS/Text Messaging
            </h3>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                If you provide consent to receive text messages from us, we will use your phone number to send:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                <li>Responses to your text messages and inquiries</li>
                <li>Project-related communications when specifically requested</li>
                <li>Urgent project updates when necessary</li>
                <li>Appointment confirmations when requested via text</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Message frequency is minimal</strong> - we primarily use SMS for responses to customer-initiated conversations and essential project communications. <strong>Message and data rates may apply.</strong>
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              SMS Messaging Terms and Conditions
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-0">
                Data Sharing
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                <li><strong>Customer data is not shared with 3rd parties for promotional or marketing purposes.</strong></li>
                <li><strong>Mobile opt-in and consent are never shared with anyone for any purpose.</strong> Any information sharing that may be mentioned elsewhere in this policy excludes mobile opt-in data.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                Messaging Terms and Conditions
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 ml-4">
                <li>By providing your phone number and agreeing to receive texts, you consent to receive text messages from Paumalu Innovations, from 808-752-3766 regarding customer care.</li>
                <li><strong>Consent is not a condition of purchase.</strong> Message frequency varies.</li>
                <li><strong>Message & data rates may apply.</strong> You can reply STOP to unsubscribe at any time or HELP for assistance.</li>
                <li>You can also contact us at 808-752-3766 or scott@paumalu-innovations.com.</li>
                <li><strong>Mobile opt-in information is never shared with third parties.</strong></li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Information Sharing and Disclosure
            </h2>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-0">
                Important: No Marketing Sharing
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>We do NOT share, sell, or rent your personal information to third parties for marketing or promotional purposes.</strong>
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
              Permitted Sharing
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our business operations (such as payment processors or technology providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our customers</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
            </ul>
            
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-0">
                Mobile Opt-in Protection
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>All sharing mentioned in this policy excludes mobile opt-in and consent information. Opt-in information is never shared with anyone for any purpose.</strong>
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Your Rights and Choices
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
              Opt-Out Options
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              You have the right to opt-out of communications from us at any time:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
              <li><strong>Text Messages:</strong> Reply "STOP," "UNSUBSCRIBE," or "QUIT" to any text message</li>
              <li><strong>Email Communications:</strong> Use the unsubscribe link in any email or contact us directly</li>
              <li><strong>Phone Calls:</strong> Request to be removed from our calling list during any call or contact us directly</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
              Access and Updates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
              <li>Access the personal information we have about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal and contractual obligations)</li>
              <li>Request a copy of your information</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include secure data transmission protocols, access controls, and regular security assessments.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Data Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Children's Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18 years of age.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-500">
              Updates to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date.
            </p>
          </section>
          
          {/* Contact Information */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-8 rounded-lg border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-0">
              Contact Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              If you have questions about this Privacy Policy, want to exercise your rights, or need assistance with your information, please contact us:
            </p>
            
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="font-semibold">Paumalu Innovations</p>
              <p>Email: <a href="mailto:privacy@paumalu-innovations.com" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">privacy@paumalu-innovations.com</a></p>
              <p>Phone: [Your Phone Number]</p>
              <p>Address: [Your Business Address]</p>
              <p className="mt-4">For text message help, reply "HELP" to any message you receive from us.</p>
            </div>
          </div>
          
          <hr className="my-10 border-gray-200 dark:border-gray-700" />
          
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong>Note:</strong> This privacy policy complies with CTIA guidelines for SMS/10DLC registration and applicable privacy laws. By using our services or providing your information, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h1>
        <p className="mb-4">
          At Shinde Classes, we are committed to protecting your privacy. This
          Privacy Policy outlines how we collect, use, and safeguard your
          information.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">We may collect your name, email, phone number, and login details when you sign up or interact with our services.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information to provide services, send updates, and improve user experience. We never sell your data.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Contact Us</h2>
        <p>If you have questions, contact us at <a href="mailto:info@shindeclasses.com" className="text-blue-600 underline">info@shindeclasses.com</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

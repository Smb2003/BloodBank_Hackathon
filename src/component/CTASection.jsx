import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-200 mb-8">Sign up now and experience the power of the Student Management System.</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default CTASection;

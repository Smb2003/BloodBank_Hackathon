import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-300 text-center py-20 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4">Welcome to the Student Management System</h2>
        <p className="text-gray-200 mb-8">Manage your students efficiently and effectively with our intuitive system.</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    { title: 'Easy Enrollment', description: 'Quick and easy student enrollment process.' },
    { title: 'Manage Classes', description: 'Organize and manage classes effectively.' },
    { title: 'Track Performance', description: 'Monitor and analyze student performance.' }
  ];

  return (
    <div className="container mx-auto py-16 bg-gradient-to-r from-blue-100 to-blue-200">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:m-5 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;

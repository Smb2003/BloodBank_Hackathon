import React from 'react';

const Testimonial = ({ name, position, comment }) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl mx-2">
      <p className="text-gray-600 italic mb-4">"{comment}"</p>
      <p className="text-gray-900 font-semibold">{name}</p>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};

export default Testimonial;

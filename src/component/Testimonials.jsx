import React from 'react';
import Slider from 'react-slick';
import Testimonial from './Testimonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', position: 'CEO, XYZ School', comment: 'The Student Management System has revolutionized the way we manage our student data. Highly recommended!' },
    { name: 'Jane Smith', position: 'Principal, ABC Academy', comment: 'We\'ve been using the Student Management System for over a year now, and it has made our administrative tasks much easier.' },
    { name: 'Alice Johnson', position: 'Teacher, DEF High School', comment: 'An excellent tool for tracking student performance and managing classes.' },
    { name: 'Robert Brown', position: 'Admin, GHI Institute', comment: 'Simplifies our enrollment process significantly. A must-have for any educational institution.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Reviews</h2>
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <Testimonial name={testimonial.name} position={testimonial.position} comment={testimonial.comment} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

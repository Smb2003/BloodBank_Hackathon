// Add student ..

import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [Std_name, setName] = useState('');
  const [Rollno, setRollNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [Semester, setSemester] = useState('');
  const [CourseID, setCourseID] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:3000/Createstudent', {
        Std_name,
        Rollno,
        Email,
        Address,
        Semester: parseInt(Semester, 10),
        CourseID: parseInt(CourseID, 10),
      });

      if (response.status === 200 || response.status === 201) {
        console.log(response.data.result);
        setSuccessMessage('Student data added successfully');
        // Clear form inputs after successful submission
        setName('');
        setRollNumber('');
        setEmail('');
        setAddress('');
        setSemester('');
        setCourseID('');
      } else {
        throw new Error('Unexpected response from the server');
      }
    } catch (error) {
      console.error('Error adding student:', error);
      if (error.response) {
        setError(error.response.data?.message || 'Error adding student');
      } else if (error.request) {
        setError('No response from the server. Please try again later.');
      } else {
        setError('Error: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Welcome to Our Student Management System</h1>
      <p className="text-lg text-center text-gray-700 mb-16">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add Student</h2>
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            value={Std_name}
            onChange={(event) => setName(event.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Roll Number:</span>
          <input
            type="string"
            value={Rollno}
            onChange={(event) => setRollNumber(event.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Address:</span>
          <input
            type="text"
            value={Address}
            onChange={(event) => setAddress(event.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Semester:</span>
          <input
            type="number"
            value={Semester}
            onChange={(event) => setSemester(event.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">CourseID:</span>
          <input
            type="number"
            value={CourseID}
            onChange={(event) => setCourseID(event.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 transition-all"
          disabled={loading}
        >
          {loading ? 'Adding Student...' : 'Add Student'}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
      </form>
      <p className="text-lg text-center text-gray-700 mt-16">"The beautiful thing about learning is that no one can take it away from you." - B.B. King</p>
    </div>
  );
};

export default StudentForm;
